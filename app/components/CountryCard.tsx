
import { useEffect, useState } from "react";
import { fetchLandmark } from "~/api/landmark";
import type { Country } from "~/types/countryType";
import fallBackImage from "../welcome/undraw_adventure-map_8hg8.svg"


interface CountryCardProps {
  countries: Country;
}
export default function CountryCard({countries}: CountryCardProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(()=> {
    fetchLandmark(countries.name.common)
    .then(setImageUrl)
  }, [countries.name.common])

  return (

      <div className='justify-items-center px-5 pt-5'>
        <div className="h-full w-full rounded-xl overflow-hidden border border-gray-200 bg-[#ffffff] relative hover:scale-[1.02] transition-transform ">
          <div className="relative w-full h-75">
            <img className= "object-cover w-full h-full overflow-hidden opacity:85%" src={imageUrl || fallBackImage}></img>
              <div className="flex items-center absolute text-l text-gray-700 top-5 left-5 rounded-full shadow p-2 bg-[#fffffff2]">
                <img src={countries.flags.png} className='h-5 w-5 rounded-full object-cover mr-2'></img>
                <span>{countries.name.common}</span>
              </div>
              <div className="w-[80%] absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white/90 text-sm text-gray-800 px-4 py-1 rounded-xl shadow-md flex justify-center gap-2 backdrop-blur-md text-m hover:bg-black hover:text-white transition-transform">
                <a href= {`/country/${countries.cca3}`}>Let's Visit</a>
              </div>
          </div>
        </div>

      </div>

  )
}
