import { notFound } from 'next/navigation';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = params;
  // Placeholder fetching logic
  const article = null;
  if (!article) notFound();
  return (
    <article className="mx-auto max-w-3xl p-4">
      <h1 className="text-3xl font-bold">{slug}</h1>
      <p className="text-sm text-gray-500">Byline</p>
      <Image src="/placeholder.png" alt="" width={800} height={400} className="mt-4" />
      <p className="mt-6">Article body goes here...</p>
    </article>
  );
}
