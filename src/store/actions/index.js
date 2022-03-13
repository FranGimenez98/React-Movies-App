import axios from "axios";
import { API_KEY, API_KEY2, DETAIL, POPULAR_URL, TOP_RATED_URL, TRENDING_URL, UPCOMING_URL } from "../../config/api";

export const GET_TRENDING_MOVIES = "GET_TRENDING_MOVIES";
export const GET_POPULAR_MOVIES = "GET_POPULAR_MOVIES";
export const GET_UPCOMING_MOVIES = "GET_UPCOMING_MOVIES";
export const GET_TOP_RATED_MOVIES = "GET_TOP_RATED_MOVIES";
export const GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

export const getTrendingMovies = () => {
    return async function(dispatch){
        var res = await axios.get(TRENDING_URL);
        return dispatch({
            type: GET_TRENDING_MOVIES,
            payload: res.data.results,
        })
    }
}

export const getPopularMovies = () => {
    return async function(dispatch){
        let res = await axios.get(POPULAR_URL);
        return dispatch({
            type: GET_POPULAR_MOVIES,
            payload: res.data.results,
        })
    }
}

export const getUpcomingMovies = () => {
    return async function(dispatch){
        let res = await axios.get(UPCOMING_URL);
        return dispatch({
            type: GET_UPCOMING_MOVIES,
            payload: res.data.results,
        })
    }
}

export const getTopRatedMovies = () => {
    return async function(dispatch){
        let res = await axios.get(TOP_RATED_URL);
        return dispatch({
            type: GET_TOP_RATED_MOVIES,
            payload: res.data.results
        })
    }
}

export const getMovieDetails = (id) => {
    return async function(dispatch){
        let res = await axios.get((`https://api.themoviedb.org/3/movie/${id}${API_KEY}`))
        return dispatch({
            type: GET_MOVIE_DETAILS,
            payload: res.data,
        })
    }
}

export const searchMovie = (name) => {
    return async function(dispatch){
        // https://api.themoviedb.org/3/search/movie?query=Avengers&api_key=API_KEY&page=2
        let res = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${name}&${API_KEY2}&page=2`)
        return dispatch({
            type: SEARCH_MOVIE,
            payload: res.data.results,
        })
    }
}