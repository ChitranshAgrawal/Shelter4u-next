import CompanyProfileClient from './CompanyProfileClient';

export default async function CompanyProfilePage() {
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const res = await fetch(`${baseUrl}/api/about/companyProfile`, {
    cache: 'no-store',
  });


if (!res.ok) {
    throw new Error('Failed to fetch company profile');
}
  const data = await res.json();

  return <CompanyProfileClient data={data.companyProfile} />;
}


