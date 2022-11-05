// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "f1218311ca3bef42bd7927f1c67a1df1",
    language: "pt-BR",
    include_adult: false,
  },
});

export default api;
