export const countryFlagMoji: Record<string, string> = {
  CHE: "app/welcome/flagsEmoji/switzerland.svg"
};

export function getCountryFlagMoji(cca3: string): string {
  return countryFlagMoji[cca3.toUpperCase()]
}
