import CareerClient from './CareerClient';

export default async function CareerPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about/career`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch careers');
  }

  const data = await res.json();

  return <CareerClient careers={data.career} />;
}
