
import {FETCH_MOVIE, FETCH_MOVIES, LOADING, MOVIE_SEARCH} from "./types" 
import axios from "axios"


export const searchMovie=(text)=>(dispatch)=>{
    dispatch({
        type:MOVIE_SEARCH,
        payload:text
    })
}

export const fetchMovies=(text)=>(dispatch)=>{
    axios.get(` http://www.omdbapi.com/?apikey=ab1fdbcc&s=${text}`)
     
        .then(response=> dispatch({
            type:FETCH_MOVIES,
            payload:response.data
        }))
        .catch(error=> console.log(error))
}

export const fetchMovie=(id)=>(dispatch)=>{
    axios.get(` http://www.omdbapi.com/?apikey=ab1fdbcc&i=${id}`)
     
        .then(response=> dispatch({
            type:FETCH_MOVIE,
            payload:response.data
        }))
        .catch(error=> console.log(error))
}

export const setLoading=()=>{
    return{
        type:LOADING
    }
}