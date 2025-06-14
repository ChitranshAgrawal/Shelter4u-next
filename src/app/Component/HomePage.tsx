import HomeSecondSection from "../home/HomeSecondSection"
import RecommendedCards from "../home/RecommendedCards"

export default function homePage() {
  return (
    <main>
      <HomeSecondSection
        title="We help you find the right property with"
        redTitle=" Zero Brokerage"
        para="Discover properties that match your lifestyle, budget, and location - only on Shelter4U, your no-brokerage real estate partner."
        bigImg="/building1.jpg"
        smallImg="/building2.jpg"
      />
      <RecommendedCards/>
    </main>
  )
}
