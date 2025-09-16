// import axios from "axios";

// //1.creating API instance

// const api = axios.create({
//     baseURL:"https://newsdata.io/api/1",
//     headers: {
//         "Content-Type": "application/json",
//       }
// })


// //2.GET helper 

// export const getApi = async (endpoint,params={}) =>{
//     try{
//         const response = await api.get(endpoint,{params})
//         return response.data
//     }
//     catch(error){
//         console.log("GET Error",error.message);
//         throw(error)

//     }
// }

// export default api;


// api.js
// api.js
// import axios from "axios";

// // 1. create API instance
// const api = axios.create({
//   baseURL: "https://newsapi.org/v2",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });


// // newsService.js
// import { getApi } from "./api";

// const API_KEY = "1140998042ed4758948083833b15c12d"; 

// export const getAppleNews = async () => {
//   return await getApi("/everything", {
//     q: "apple",
//     from: "2025-08-28",
//     to: "2025-08-28",
//     sortBy: "popularity",
//     apiKey: API_KEY,
//   });
// };




// // api.js
// import axios from "axios";

// // 1. create API instance
// const api = axios.create({
//   baseURL: "https://newsapi.org/v2",
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // 2. GET helper
// export const getApi = async (endpoint, params = {}) => {
//   try {
//     const response = await api.get(endpoint, { params });
//     return response.data;
//   } catch (error) {
//     console.log("GET Error:", error.message);
//     throw error;
//   }
// };
// // newsService.js
// import { getApi } from "./api";

// const API_KEY = "1140998042ed4758948083833b15c12d";

// export const getAppleNews = async () => {
//   return await getApi("/everything", {
//     q: "apple",
//     from: "2025-08-28",
//     to: "2025-08-28",
//     sortBy: "popularity",
//     apiKey: API_KEY,
//   });
// };

// export default api;


//


// api.js
import axios from "axios";

// Create API instance
const api = axios.create({
  baseURL: "https://newsapi.org/v2",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
