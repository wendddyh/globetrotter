
const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY
const BASE_URL= 'https://api.pexels.com/v1/search'

export async function fetchLandmark(countryName:string): Promise<string | null > {
  const response = await fetch(`${BASE_URL}?query=${encodeURIComponent(countryName)}&per_page=1`,
    {
      headers: {
        Authorization: PEXELS_API_KEY
      },
    }
  );

  if (!response.ok) {
    console.log('Error on retrieve the images', response.status);
    return null;
  };

  console.log(import.meta.env.VITE_PEXELS_API_KEY)

  const data = await response.json();
  return data.photos?.[0]?.src?.landscape || null
}
