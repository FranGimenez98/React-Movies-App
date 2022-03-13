export const API_KEY = '?api_key='+process.env.REACT_APP_API_KEY
export const API_KEY2 = 'api_key='+process.env.REACT_APP_API_KEY
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL+API_KEY;

export const ORIGINAL_IMAGE = 'https://image.tmdb.org/t/p/original';
export const W500_IMAGE = 'https://image.tmdb.org/t/p/w500';
export const TRENDING_URL = BASE_URL + "/trending/movie/week" + API_KEY;
export const POPULAR_URL = BASE_URL+"/discover/movie?sort_by=popularity.desc&"+API_KEY2;
export const UPCOMING_URL = BASE_URL+"/movie/upcoming"+API_KEY;
export const TOP_RATED_URL = BASE_URL+'/movie/top_rated'+API_KEY;
export const DETAIL = BASE_URL+'/movie'


// BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
// export const API_URL_IMAGE = "https://image.tmdb.org/t/p/w500/";
// export const TRENDING_URL = BASE_URL + "/trending/all/week?" + API_KEY;
// export const UPCOMING_URL = BASE_URL + "/movie/upcoming?" + API_KEY;
// export const ON_AIR_URL = BASE_URL + "/tv/on_the_air?" + API_KEY;
// export const TOP_RATED_MOVIES_URL = BASE_URL + "/movie/top_rated?" + API_KEY;
// export const TOP_RATED_TV_URL = BASE_URL + "/tv/top_rated?" + API_KEY;
// export const POPULAR_TV_URL = BASE_URL + "/tv/popular?" + API_KEY;