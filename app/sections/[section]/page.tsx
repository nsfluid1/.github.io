interface Props {
  params: { section: string };
}

export default function SectionPage({ params }: Props) {
  const { section } = params;
  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-bold capitalize">{section}</h1>
      <p className="text-sm text-gray-600">Articles for {section}</p>
    </main>
  );
}
