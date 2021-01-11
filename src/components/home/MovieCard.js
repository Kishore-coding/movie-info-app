import React, { Component } from 'react';
import {Link} from "react-router-dom";

export class MovieCard extends Component {
    render() {
        const {movie}=this.props // getting movie as prop from moviescontainer.js 

        return (
            <div >
                <div className="movie-details">
                   
                    <Link to ={"/movie/" + movie.imdbID}><img src={movie.Poster} alt={movie.Title}/></Link> 
                                      
                    <h5>{movie.Title.length<17 ? <h5>{movie.Title} - {movie.Year}</h5>
                        : <h5>{movie.Title.substring(0,21)}...-{movie.Year}</h5>} </h5>
                    <Link to={"/movie/" + movie.imdbID} className="details-link">Movie Details</Link>                    
                 </div>
                
            </div>
        )
    }
}

export default MovieCard
