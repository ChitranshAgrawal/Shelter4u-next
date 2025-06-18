import TeamClient from './TeamClient';

export default async function TeamPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about/team`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch team members');
  }

  const data = await res.json();

  return <TeamClient teamMembers={data.team || []} />;
}
