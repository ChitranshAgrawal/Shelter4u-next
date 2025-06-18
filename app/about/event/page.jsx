import EventClient from './EventClient.jsx';

export default async function EventPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about/event`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch events');
  }

  const data = await res.json();

  return <EventClient events={data.event} />;
}
