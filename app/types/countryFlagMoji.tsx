export const countryFlagMoji: Record<string, string> = {
  CHE: "😋"
};

export function getCountryFlagMoji(cca3: string): string {
  return countryFlagMoji[cca3.toUpperCase()]
}
