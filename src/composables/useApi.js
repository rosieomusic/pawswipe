// src/composables/useApi.js

const API_URL = 'https://embarrassed-karry-rosieomusic-3364938a.koyeb.app'; // Hardcoded API URL

export function useApi() {
  const fetchData = async (endpoint) => {
    try {
      const response = await fetch(`${API_URL}/${endpoint}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { fetchData };
}
