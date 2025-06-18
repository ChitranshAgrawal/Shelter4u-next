import Footer from "../Components/Footer.jsx";

export default async function FooterPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/footer`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch footer data");
  }

  const { footer } = await res.json();

  return <Footer footerData={footer} />;
}
