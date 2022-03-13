import { GET_MOVIE_DETAILS, GET_POPULAR_MOVIES, GET_TOP_RATED_MOVIES, GET_TRENDING_MOVIES, GET_UPCOMING_MOVIES, SEARCH_MOVIE } from "../actions";

const initialState = {
    trending: [],
    popular: [],
    upcoming: [],
    topRated: [],
    detail: [],
    searchedMovies: [],
}

function rootReducer(state = initialState, action){
    switch(action.type){
        case GET_TRENDING_MOVIES:
            return{
                ...state,
                trending: action.payload,
            }
        default: return state

        case GET_POPULAR_MOVIES:
            return{
                ...state,
                popular: action.payload,
            }
        
        case GET_UPCOMING_MOVIES:
            return{
                ...state,
                upcoming: action.payload,
            }
        
        case GET_TOP_RATED_MOVIES:
            return{
                ...state,
                topRated: action.payload,
            }

        case GET_MOVIE_DETAILS:
            return{
                ...state,
                detail: action.payload,
            }
        
        case SEARCH_MOVIE: 
            return{
                ...state,
                searchedMovies: action.payload,
            }
    }
}

export default rootReducer;