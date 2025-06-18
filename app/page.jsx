import HomeSecondSection from "./home/HomeSecondSection.jsx";
import Recommended from "./home/Recommended.jsx";
import HomeThirdSection from "./home/HomeThirdSection.jsx";
import HomeFourthSection from "./home/HomeFourthSection.jsx";
import HomeFifthSection from "./home/HomeFifthSection.jsx";
import Header from "./Components/Header.jsx";
import Footer from "./footer/page.jsx";

export default async function HomePage() {
  let section = null;
  let company = null;
  let homeFourthSectionData = null; 
  let homeFifthSectionData = null;

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/home/Home`, {
      cache: "no-store",
    });

    const json = await res.json();

    section = json.finalData.HomeSecondSectionData[0];
    company = json.finalData.HomeThirdSectionData[0];
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
      <HomeThirdSection data={company} />
      <HomeFourthSection
        title={homeFourthSectionData?.title}
        para={homeFourthSectionData?.para}
        section={homeFourthSectionData?.section}
      />
      
      <HomeFifthSection partners={homeFifthSectionData} />
      <Footer/>
      
    </>
  );
}
