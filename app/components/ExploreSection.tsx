import type { Country } from "~/types/countryType";
import CountryCard from "./CountryCard";

interface ExploreSectionProps {
  country: Country[];
}

const ExploreSection = ({country}: ExploreSectionProps ) => {
  const popular = country.slice(0, 3);
  const asia = country.filter(c =>c.region === "Asia").slice(0, 3)

  return (
    <section className="py-10 bg-[#fffaf0] px-6 ml-[15%]">
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">🔥 Popular this week</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {popular.map((country) => (
            <CountryCard countries={country} />
          ))}
        </div>
      </div>

      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4">Let's Visit Asia </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4" >
          {asia.map((country) => (
            <CountryCard countries={country} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExploreSection
