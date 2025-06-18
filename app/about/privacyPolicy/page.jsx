import PrivacyPolicyClient from './PrivacyPolicyClient';

export default async function PrivacyPolicyPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/about/privacyPolicy`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch privacy policy');
  }

  const data = await res.json();
  return <PrivacyPolicyClient data={data.privacyPolicy} />;
}
