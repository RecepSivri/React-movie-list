import axios from "axios";
import {key} from "../config"
const url = 'https://api.themoviedb.org/3/discover/movie?api_key='+key+'&with_genres=';
const trendUrl = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzIzNDE3NWE1ZjMzMzkxODcxMmMxNTAwYWE4YjViNCIsInN1YiI6IjY2NDMyNWE0MDFhYjcyOGUwZTM1NzE2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wwr7UuWoY_XfZrVOi9-faVM5moyF-mVqBjHRZz2E1nA'
  }
};
const genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]

export const getMovies = (name: string) => {
  const index = genres.findIndex((item: any) => {
    return item.name === name;
  })
  if(index !== -1){
    return axios.get(url+genres[index].id);
  } else {
    return null;
  }
}

export const getTrends = () => {
  return axios.get(trendUrl, options);
}

