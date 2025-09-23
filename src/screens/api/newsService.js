import api from "./api";

const API_KEY = "1140998042ed4758948083833b15c12d";

export const getAppleNews = async () => {
  try {
    const response = await api.get("/everything", {
      params: {
        q: "apple",
        from: "2025-08-28",
        to: "2025-08-28",
        sortBy: "popularity",
        apiKey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log("GET Error:", error.message);
    throw error;
  }
};
