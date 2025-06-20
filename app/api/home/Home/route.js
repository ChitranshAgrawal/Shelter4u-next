import { NextResponse } from "next/server";
import { models } from "../../../../lib/connections.js";

const {
  HomeSecondSection,
  HomeThirdSection,
  HomeFourthSection,
  HomeFifthSection
} = models;

export async function GET() {
  try {
    const HomeSecondSectionData = await HomeSecondSection.find();
    const HomeThirdSectionData = await HomeThirdSection.find();
    const HomeFourthSectionData = await HomeFourthSection.find();
    const HomeFifthSectionData = await HomeFifthSection.find();

    const finalData = {
      HomeSecondSectionData,
      HomeThirdSectionData,
      HomeFourthSectionData,
      HomeFifthSectionData,
    };

    console.log(finalData);

    return NextResponse.json({ success: true, finalData }, { status: 200 });
  } catch (error) {
    console.error("Error fetching home sections:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

