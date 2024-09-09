// src/services/apiService.js

const API_URL = 'https://embarrassed-karry-rosieomusic-3364938a.koyeb.app'; // Hardcoded API URL

export async function fetchData(endpoint) {
  const response = await fetch(`${API_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return await response.json();
}
