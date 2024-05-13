import axios from "axios";
const api: string = "https://www.omdbapi.com/?apikey="

export const getMovies = (name: string) => {
  return axios.get(api+'&t=' + name);
}

export const getCategories = (name: string) => {
  return axios.get(api+'&type=' + name);
}