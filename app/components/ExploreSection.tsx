import type { Country } from "~/types/countryType";
import CountryCard from "./CountryCard";
import FeaturedCard from "./FeaturedCard";

interface ExploreSectionProps {
  country: Country[];
}

const ExploreSection = ({country}: ExploreSectionProps ) => {
  const popular = country.slice(0, 3);
  const asia = country.filter(c =>c.region === "Asia").slice(0, 3)

  return (
    <section className="py-10 bg-[#fffaf0] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">🔥 Popular this week</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
            {popular.map((country) => (
              <FeaturedCard countries={country} />
            ))}
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-4">⛩️ Let's Visit Asia </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4" >
            {asia.map((country) => (
              <FeaturedCard countries={country} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
