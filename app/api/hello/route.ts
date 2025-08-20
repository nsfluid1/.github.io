import { NextResponse } from 'next/server';
import { hitLimit } from '@/src/lib/rateLimit';

export const runtime = 'nodejs';

export async function GET(request: Request) {
  const ip = (request.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() || '0.0.0.0';
  const limit = await hitLimit({ key: ip, limit: 120, windowSec: 60 });
  if (!limit.allowed) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: { 'Retry-After': String(limit.retryAfterSec) },
    });
  }
  return NextResponse.json({ message: 'Hello from NSFluid!' });
}
