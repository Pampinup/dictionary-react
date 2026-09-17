const API_URL = "https://api.shecodes.io/dictionary/v1/define";

export async function searchWord(word) {
  const response = await fetch(
    `${API_URL}?word=${encodeURIComponent(word)}&key=${import.meta.env.VITE_SHECODES_API_KEY}`,
  );

  if (!response.ok) {
    throw new Error("Word not found");
  }

  const data = await response.json();

  if (!data.meanings || data.meanings.length === 0) {
    throw new Error("Word not found");
  }

  return data;
}
