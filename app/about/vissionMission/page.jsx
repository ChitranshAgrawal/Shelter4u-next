import VisionMissionClient from "./VissionMissionClient.jsx";

export default async function VisionMissionPage() {
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  let data = null;

  try {
    const res = await fetch(`${API}/api/about/vissionMission`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error("Failed to fetch");

    data = await res.json();
  } catch (error) {
    console.error("VisionMission fetch error:", error.message);
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600 font-bold">Failed to load vision & mission data.</p>
      </div>
    );
  }

  return <VisionMissionClient data={data.visionMission[0]} />;
}
