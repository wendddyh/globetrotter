import type { Country } from "~/types/countryType";

const BASE_URL = "https://restcountries.com/v3.1";

export async function fetchCountries(): Promise<Country[]> {
  const response = await fetch(`${BASE_URL}/all`);
  const data = await response.json();
  return data;
}
