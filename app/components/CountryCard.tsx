import { Link } from "react-router";
import type { Country } from "~/types/countryType";
import { countryFlagMoji } from "../types/countryFlagMoji"

interface CountryCardProps {
  countries: Country;
}
export default function CountryCard({countries}: CountryCardProps) {

  return (

      <div className='flex justify-center px-5 pt-5'>
        <div className="h-fit my-3 rounded-xl overflow-hidden border border-gray-200 bg-[#ffffff] relative">
          <div className="text-4xl mb-2">
            <img src={countryFlagMoji[countries.cca3]}></img>
          </div>
          <div className='p-4 mt-2 mb-2 px-3'>
            <div className='font-semibold'>{countries.name.common}</div>
            <p className="text-slate-600 leading-normal font-light">Capital: {countries.capital}</p>
            <a href= {`/country/${countries.cca3}`}>
              See More
            </a>
          </div>
        </div>

      </div>

  )
}
