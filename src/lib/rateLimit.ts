import { db } from '@/src/lib/db';
import { addMinutes } from 'date-fns';

type Opts = { limit: number; windowSec: number; key: string };
export async function hitLimit({ limit, windowSec, key }: Opts) {
  const now = new Date();
  const windowStart = new Date(Math.floor(now.getTime() / (windowSec * 1000)) * (windowSec * 1000));
  const blocked = await db.$queryRaw<{ exists: boolean }[]>`
    select exists(select 1 from ip_block where ip = ${key}::inet and until > now())`;
  if (blocked[0]?.exists) return { allowed: false, remaining: 0, retryAfterSec: 600 };
  const rows = await db.$queryRaw<{ count: number }[]>`
    insert into rate_limit (key, window_start, count)
    values (${key}, ${windowStart}, 1)
    on conflict (key, window_start)
    do update set count = rate_limit.count + 1
    returning count`;
  const count = rows[0]?.count ?? 1;
  const remaining = Math.max(0, limit - count);
  if (count > limit * 5) {
    await db.$executeRawUnsafe(
      `insert into ip_block(ip, until) values ($1::inet, $2)
       on conflict (ip) do update set until = $2`,
      key,
      addMinutes(now, 10)
    );
  }
  return {
    allowed: count <= limit,
    remaining,
    retryAfterSec: Math.ceil((windowStart.getTime() + windowSec * 1000 - now.getTime()) / 1000),
  };
}
