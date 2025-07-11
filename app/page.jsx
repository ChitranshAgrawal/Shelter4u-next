import HomeFirstSection from "./home/HomeFirstSection.jsx";
import HomeSecondSection from "./home/HomeSecondSection.jsx";
import HomeThirdSection from "./home/HomeThirdSection.jsx";
import HomeFourthSection from "./home/HomeFourthSection.jsx";
import HomeFifthSection from "./home/HomeFifthSection.jsx";
import Recommended from "./home/Recommended.jsx";

// Fetch recommended projects
async function fetchRecommendedProjects() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/Recommended`, {
      cache: "force-cache",
    });

    if (!res.ok) throw new Error("Failed to fetch recommended projects");

    const json = await res.json();
    return json.data || [];
  } catch (error) {
    console.error("Recommended fetch error:", error);
    return [];
  }
}

export default async function HomePage() {
  let homeFirstSectionData = null;
  let homeSecondSectionData = null;
  let homeThirdSectionData = null;
  let homeFourthSectionData = null;
  let homeFifthSectionData = null;
  let recommendedProjects = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/Home`, {
      cache: "force-cache",
    });

    const json = await res.json();

    homeFirstSectionData = json.finalData.HomeFirstSectionData[0];
    homeSecondSectionData = json.finalData.HomeSecondSectionData[0];
    homeThirdSectionData = json.finalData.HomeThirdSectionData[0];
    homeFourthSectionData = json.finalData.HomeFourthSectionData[0];
    homeFifthSectionData = json.finalData.HomeFifthSectionData;

    recommendedProjects = await fetchRecommendedProjects();

  } catch (e) {
    console.error("Error loading Home data:", e);
  }

  return (
    <>
      <HomeFirstSection data={homeFirstSectionData} />
      <Recommended projects={recommendedProjects} />
      <HomeSecondSection data={homeSecondSectionData} />
      <HomeThirdSection data={homeThirdSectionData} />
      <HomeFourthSection data={homeFourthSectionData} />
      <HomeFifthSection data={homeFifthSectionData} />
    </>
  );
}
