// app/home/page.tsx
import HomeSecondSection from "./HomeSecondSection";

export default async function HomeRoute() {
  const API_URI = process.env.NEXT_PUBLIC_BACKEND_URL;

  const res = await fetch(`${API_URI}/home-second-section`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch home section data");
  }

  const data = await res.json();

  return (
    <main>
      <HomeSecondSection
        title={data.title}
        redTitle={data.redTitle}
        para={data.para}
        // bigImg={data.bigImg || '/building1.jpg'}
        // smallImg={data.smallImg || '/building2.jpg'}
      />

    </main>
  );
}
