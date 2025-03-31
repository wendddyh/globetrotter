import React, { useEffect, useState } from 'react'
import { fetchLandmark } from '~/api/landmark'
import type { Country } from '~/types/countryType'
import fallbackImage from '../welcome/undraw_adventure-map_8hg8.svg'
import { Link } from 'react-router'

interface FeaturedCardProps {
  countries: Country
}

const FeaturedCard = ({countries}: FeaturedCardProps) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  useEffect(() => {
    fetchLandmark(countries.name.common)
    .then(setImageUrl)
  }, [countries.name.common])

  return (
    <Link to={`/country/${countries.cca3}`}>
      <div className='justify-items-center hover:scale-[1.02] transition-transform'>
        <div className='h-full w-full  border border-gray-200 bg-[#ffffff]'>
          <div className= 'relative w-full h-80'>
            <img className='object-cover w-full h-full overflow-hidden opacity:85%' src={imageUrl || fallbackImage}></img>
            <div className="flex items-center absolute text-l text-gray-700 top-5 left-5 rounded-full shadow p-2 bg-[#fffffff2]">
              <img src={countries.flags.png} className='h-5 w-5 rounded-full object-cover mr-2'></img>
              <span>{countries.name.common}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default FeaturedCard
