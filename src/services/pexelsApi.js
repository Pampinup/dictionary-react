const API_URL = "https://api.pexels.com/v1/search";

export async function searchImages(query) {
  const response = await fetch(
    `${API_URL}?query=${encodeURIComponent(query)}&per_page=4`,
    {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Unable to fetch images");
  }

  return response.json();
}
