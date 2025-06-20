import HomeSecondSection from "./home/HomeSecondSection.jsx";
import Recommended from "./home/Recommended.jsx";
import HomeThirdSection from "./home/HomeThirdSection.jsx";
import HomeFourthSection from "./home/HomeFourthSection.jsx";
import HomeFifthSection from "./home/HomeFifthSection.jsx";
import HomeFirstSection from "./home/HomeFirstSection.jsx";

export default async function HomePage() {
  let homeFirstSectionData = null;
  let homeSecondSectionData = null;
  let homeThirdSectionData = null;
  let homeFourthSectionData = null; 
  let homeFifthSectionData = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/Home`, {
      cache: "no-store",
    });

    const json = await res.json();

    homeFirstSectionData = json.finalData.HomeFirstSectionData[0];
    homeSecondSectionData = json.finalData.HomeSecondSectionData[0];
    homeThirdSectionData = json.finalData.HomeThirdSectionData[0];
    homeFourthSectionData = json.finalData.HomeFourthSectionData[0];
    homeFifthSectionData = json.finalData.HomeFifthSectionData; 

  } catch (e) {
    console.error("Error loading Home data:", e);
  }

  return (
    <>
    
      <HomeFirstSection
        data={homeFirstSectionData}
      />
      <HomeSecondSection
        data={homeSecondSectionData}
      />
      <Recommended />
      <HomeThirdSection
        data={homeThirdSectionData}
      />
      <HomeFourthSection
        data={homeFourthSectionData}
      />
      <HomeFifthSection
        data={homeFifthSectionData}
      />
      
    </>
  );
}





