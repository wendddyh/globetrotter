import type { Route } from "./+types/index";
import logo from '../welcome/wh2.png'
import travelman from '../welcome/Journey-pana.svg'
import travellady from '../welcome/undraw_adventure-map_8hg8.svg'
import suitcaselady from '../welcome/undraw_departing_010k.svg'
import couplebike from '../welcome/undraw_traveling_c18z.svg'
import SearchBar from "~/components/SearchBar";
import Filter from "~/components/Filter";
import CountryCard from "~/components/CountryCard";
import Navbar from "~/components/Navbar";
import { useEffect, useState } from "react";
import { fetchCountries } from "~/api/CountryList";
import type { Country } from "~/types/countryType";
import { Link } from "react-router";


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


  const filteredCountries = countries.filter((country) => {
    const matchedRegion = selectedRegion.length === 0 || selectedRegion.includes(country.region)
    const searchedCountry = country.name.common.toLowerCase().includes(search.toLowerCase())

    return matchedRegion && searchedCountry
  })

  return (
    <>
      <div className="bg-[#fff0dc] relative text-center">
        <div className='w-full bg-[#ffbd59] rounded-b-[50%] absolute top-0 left-0 z-0'>
          <div className='relative z-10 max-w-4xl mx-auto px-4'>
            <img className="mx-auto" src={logo} alt="globetrotter logo"></img>
          </div>
        </div>

        <div className='pt-[15%]'>
          <h2 className='text-3xl md:text-2xl font-bold text-orange-600 mb-3'>
            COLLECT YOUR STAMP VIRTUALLY
          </h2>

          <p className='text-md md:text-xl font-semibold text-gray-500 mb-6 max-w-md mx-auto'>
            Discover, learn and collect your travel stamp from every country
          </p>

          <div className='flex items-center justify-center gap-2 mb-5'>
            <SearchBar searchCountry={search} setSearchCountry={setSearch} />
          </div>

          <div className='bottom-0 left-0 z-0'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffbd59" fill-opacity="1" d="M0,256L48,234.7C96,213,192,171,288,154.7C384,139,480,149,576,154.7C672,160,768,160,864,138.7C960,117,1056,75,1152,80C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          <img className="absolute bottom-40 right-[35%] w-[15%]" src={travelman} alt="travel man"></img>
          <img className="absolute bottom-11 right-[11%] w-[20%]" src={travellady} alt="travel lady"></img>
          <img className="absolute bottom-30 left-[12%] w-[15%]" src={suitcaselady} alt="suitcase lady"></img>
          <img className="absolute bottom-20 left-[35%] w-[15%]" src={couplebike} alt="travel man"></img>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Filter regions={region} selected={selectedRegion} onAdd={addRegion} onRemove={removeRegion} onReset={resetRegion} />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-[#fff0dc] relative text-center">
            {filteredCountries.map((country) => (
            <CountryCard countries={country} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
