export async function fetchLandmark(countryName:string): Promise<string | null > {
  const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY
  const response = await fetch(`https://api./pexels.com/v1/search?query=${encodeURIComponent(countryName)}&per_page=1`,
    {
      headers: {
        Authorization: PEXELS_API_KEY
      },
    }
  );
  console.log("fethicng country:", countryName)

  if (!response.ok) {
    console.log('no images found');
    return null;
  };

  const data = await response.json();
  console.log('respjnse data:', data)
  return data.photos?.[0].src?.landscape || null
}
