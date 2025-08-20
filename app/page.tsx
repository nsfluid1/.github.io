import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-4 space-y-6">
      <h1 className="text-3xl font-bold text-brand">NSFluid</h1>
      <p className="text-lg">Independent news covering the world.</p>
      <nav aria-label="Sections" className="flex gap-4">
        {['world', 'politics', 'business', 'tech', 'culture', 'sports', 'science', 'opinion'].map((s) => (
          <Link key={s} href={`/sections/${s}`} className="hover:underline">
            {s[0].toUpperCase() + s.slice(1)}
          </Link>
        ))}
      </nav>
    </main>
  );
}
