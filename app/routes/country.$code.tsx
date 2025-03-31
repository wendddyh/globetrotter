import { useEffect, useState } from "react"
import type { Country } from "~/types/countryType"
import { Link, useParams } from "react-router"
import { countryByCode } from "~/api/CountryByCode"


export default function CountryDetail() {
  const {code} = useParams<{code: string}>()
  const [country, setCountry] = useState<Country | null> (null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (code) {
      countryByCode(code)
      .then(setCountry)
      .catch(() => setCountry(null))
      .finally(() => setLoading(false))
    }
  }, [code])

  if (loading) return <p>Loading Country details</p>
  if (!country) return <p>Ouch, our bad, we seems to lost the country data to the robot</p>

  return (

      <div className="p-6 max-w-4-xl auto">
        <h1 className="text-3xl font-semibold mb-4">{country.name.common}</h1>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`}></img>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>Language: {country.language}</p>
        <a href ="/">Back to home</a>
      </div>


  )
}
