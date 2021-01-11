import { FETCH_MOVIE, FETCH_MOVIES, LOADING, MOVIE_SEARCH } from "../action/types";


const initialState={
    text:"",
    movies:[],
    loading:false,
    movie:[]
}

export default function searchReducer(state=initialState,action){
    switch(action.type){
        case MOVIE_SEARCH:
            return {
                ...state,
                text:action.payload,
                loading:false
            }
        case FETCH_MOVIES:
            return {
                ...state,
                movies:action.payload,
               loading:false
            }
        case FETCH_MOVIE:
            return {
                 ...state,
                 movie:action.payload,
                loading:false
                }
        case LOADING:
            return {
                ...state,
                loading:true
            }
        default:
            return state;
    }
}