import type { Country } from "~/types/countryType";

// const BASE_URL="https://restcountries.com/v3.1"

export async function countryByCode(code: string): Promise<Country> {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  if (!response.ok) {
    throw new Error("Failed to fetch country by code")
  }

  const data: Country[] = await response.json()
  if (!data.length){
    throw new Error("no data")
  }
  return data[0]
}
