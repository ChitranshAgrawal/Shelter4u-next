import HomeSecondSection from "./HomeSecondSection.jsx";
import Recommended from "./Recommended.jsx";
import HomeThirdSection from "./HomeThirdSection.jsx";
import HomeFourthSection from "./HomeFourthSection.jsx";
import HomeFifthSection from "./HomeFifthSection.jsx";
import Head from "../Components/Header.jsx";
import Header from "../Components/Header.jsx";

export default async function HomePage() {
  let section = null;
  let homeThirdSectionData = null;
  let homeFourthSectionData = null; 
  let homeFifthSectionData = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/Home`, {
      cache: "no-store",
    });

    const json = await res.json();

    section = json.finalData.HomeSecondSectionData[0];
    homeThirdSectionData = json.finalData.HomeThirdSectionData[0];
    homeFourthSectionData = json.finalData.HomeFourthSectionData[0];
    homeFifthSectionData = json.finalData.HomeFifthSectionData; 

  } catch (e) {
    console.error("Error loading Home data:", e);
  }

  return (
    <>
    <Header/>
      {section && (
        <HomeSecondSection
          title={section?.title}
          redTitle={section?.redTitle}
          para={section?.para}
          bigImg={section?.bigImg}
          smallImg={section?.smallImg}
        />
      )}
      <Recommended />
      <HomeThirdSection data={homeThirdSectionData} />
      <HomeFourthSection
        title={homeFourthSectionData?.title}
        para={homeFourthSectionData?.para}
        section={homeFourthSectionData?.section}
      />
      
      <HomeFifthSection partners={homeFifthSectionData} />
      
    </>
  );
}
