import type { Route } from "./+types/index";
import logo from '../welcome/wh2.png'
import travelman from '../welcome/Journey-pana.svg'
import travellady from '../welcome/undraw_adventure-map_8hg8.svg'
import suitcaselady from '../welcome/undraw_departing_010k.svg'
import couplebike from '../welcome/undraw_traveling_c18z.svg'
import SearchBar from "~/components/SearchBar";
import Filter from "~/components/Filter";
import CountryCard from "~/components/CountryCard";
import { useEffect, useState } from "react";
import { fetchCountries } from "~/api/CountryList";
import type { Country } from "~/types/countryType";
import ExploreSection from "~/components/ExploreSection";
import { useAutoScrollTo } from "~/hooks/useAutoScrollTo";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GlobeTrotter" },
    { name: "Fun Fact or the World", content: "Welcome to Globe Trotter.Virtually travel!" },
  ];
}

export default function Home() {
  const [selectedRegion, setSelectedRegion] = useState<string[]>([])
  const [region, setRegion] = useState<string[]>([])
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('');
  const [isSearchSubmitted, setIsSearchSubmitted] = useState(false);

  useEffect(() => {
    fetchCountries()
    .then((data) => {setCountries(data)

    const allRegions = data.map((country) => country.region).filter((region) => region && region !== '')
    const uniqueRegions= Array.from(new Set(allRegions)).sort()
    setRegion(uniqueRegions)
    })

    .catch(err => console.log(err))
    .finally(() => setLoading(false))

    }, [])

    useEffect(() => {
      if (isSearchSubmitted) {
        setIsSearchSubmitted(false)
      }
    },[isSearchSubmitted]);

  const addRegion = (region: string) => {
    if(!selectedRegion.includes(region)){
      setSelectedRegion(prev => ([...prev, region]))
    }
  }

  const removeRegion = (region: string) => {
    setSelectedRegion((prev) => prev.filter((current) => current !== region))
  }

  const resetRegion = () => {
    setSelectedRegion([])
  }

  const scrollRef = useAutoScrollTo([selectedRegion, isSearchSubmitted])

  const filteredCountries = countries.filter((country) => {
    const matchedRegion = selectedRegion.length === 0 || selectedRegion.includes(country.region)
    const searchedCountry = country.name.common.toLowerCase().includes(search.toLowerCase())

    return matchedRegion && searchedCountry
  })

  const hasSearchedOrFilter= search.trim() !== "" || selectedRegion.length > 0;

  const totalCountry = countries.length;
  const totalRegion = new Set(countries.map(country => country.region)).size;

  return (
    <>
      <div className="bg-[#fff0dc] relative text-center">
        <div className='w-full bg-[#ffbd59] rounded-b-[50%] absolute top-0 left-0 z-0'>
          <div className='relative z-10 max-w-4xl mx-auto px-4'>
            <img className="mx-auto" src={logo} alt="globetrotter logo"></img>
          </div>
        </div>

        <div className='pt-[15%]'>
          <h2 className='text-5xl font-bold font-cartoon text-orange-600 mb-3'>
            COLLECT YOUR VIRTUAL TRAVEL STAMPS,
          </h2>

          <p className='text-[30px] font-semibold text-gray-500 mb-5 w-[40%] mx-auto'>
          ✈️ Discover, learn and collect your travel stamp from every country
          </p>

          <p className="text-2xl text-gray-600 test-slate-600">
          🌍 {totalCountry} countries  | 🗺️ {totalRegion} regions
          </p>

          <div className='flex flex-wrap items-center justify-center'>
            <SearchBar searchCountry={search} setSearchCountry={setSearch} onSearchSubmit={() => setIsSearchSubmitted(true)} />
          </div>

          <div className='items-center justify-center'>
            <Filter regions={region} selected={selectedRegion} onAdd={addRegion} onRemove={removeRegion} onReset={resetRegion} />
          </div>

          <div className='bottom-0 left-0 z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffbd59" fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,154.7C672,160,768,160,864,138.7C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <img className="absolute bottom-30 right-[35%] w-[18%]" src={travelman} alt="travel man"></img>
          <img className="absolute bottom-16 right-[11%] w-[20%]" src={travellady} alt="travel lady"></img>
          <img className="absolute bottom-30 left-[12%] w-[15%]" src={suitcaselady} alt="suitcase lady"></img>
          <img className="absolute bottom-52 left-[35%] w-[11%]" src={couplebike} alt="travel man"></img>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div>
            <ExploreSection country={countries} />
          </div>

          <section ref={scrollRef} id="results" className="py-10 justify-items-center text-center">
            {/* no search or filter applied */}
            {!hasSearchedOrFilter &&  (
              <div className="bg-[#fff0dc] p-[90px]">
                <p className="text-lg font-medium whitespace-nowrap">Ready to explore?</p>
                <p className="text-lg font-medium whitespace-nowrap">Use the search bar or pick the region to begin your journey</p>
              </div>
            )}

            {/* if the search or filter applied */}
            {hasSearchedOrFilter && filteredCountries.length > 0 && (
            <>
              <p className="text-lg font-medium whitespace-nowrap">Showing {filteredCountries.length} country(ies) {search && `for "${search}"`} {selectedRegion.length > 0 && `in ${selectedRegion.join(", ")}`}
              </p>
              {(selectedRegion.length > 0 || search.trim() !== '') && (
              <button onClick={() => {
                setSearch('')
                setSelectedRegion([]);
              }}
              className="ml-[2px] p-[3px] text-sm bg-red-500 rounded text-white hover:text-black mt-2 mb-5">Clear all filters
              </button>
            )}

              <div className="p-[60px] grid grid-cols-4 md:grid-cols-4 sm:grid-cols-3 gap-4 justify-center bg-[#fff0dc] relative text-center">
                {filteredCountries.map((country) => (<CountryCard countries={country} />))}
              </div>

            </>
            )}

          </section>
        </div>
      </div>
    </>
  );
}
