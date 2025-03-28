import { Link } from "react-router";
import type { Country } from "~/types/countryType";

interface CountryCardProps {
  countries: Country;
}
export default function CountryCard({countries}: CountryCardProps) {

  return (

      <div className='justify-items-center px-5 pt-5'>
        <div className="h-full w-full my-3 rounded-xl overflow-hidden border border-gray-200 bg-[#ffffff] relative hover:scale-[1.02] transition-transform ">
          <div className=" h-50 justify-items-center pt-[26px]">
            <img className= "h-full object-cover border-[3px] border-black-300 w-[80%]" src={countries.flags.png}></img>
          </div>
          <div className='p-4 mt-2 mb-2 px-3'>
            <div className='font-semibold'>{countries.name.common}</div>
            <p className="text-slate-600 leading-normal font-light">Capital: {countries.capital}</p>
            <a href= {`/country/${countries.cca3}`} className="border bg-orange-300 p-px my-3 rounded-l ">
              I'm travelling
            </a>
          </div>
        </div>

      </div>

  )
}
