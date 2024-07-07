// src/services/apiService.js
import axios from "axios";

const fetchDataFromAPI = async (apiUrl) => {
  try {
    const response = await axios.get(apiUrl, {
      headers: {
        // Add any custom headers here
      },
      timeout: 5000, // Set a timeout for the request
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.error("Server responded with error:", error.response.status);
      console.error(error.response.data);
    } else if (error.request) {
      // Request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something else happened
      console.error("Error", error.message);
    }
    throw error;
  }
};

export { fetchDataFromAPI };
