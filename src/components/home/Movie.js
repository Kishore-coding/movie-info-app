import React, { Component } from 'react';
import {connect} from "react-redux";
import {fetchMovie,setLoading} from "../../action/searchAction"
import {Link} from "react-router-dom"

export class Movie extends Component {
   componentDidMount(){
        this.props.fetchMovie(this.props.match.params.id);
        this.props.setLoading();
   }
    render() {
        const {loading,movie} = this.props;

        let movieInfo=(
            <div>
                <div className="movie-page">
            
                    <div className="movie_image">
                        <img src={movie.Poster} alt={movie.Title}/>
                    </div>               
                                        
                    <div className="movie-title">
                        <h2>Title: {movie.Title}</h2>
                        <ul className="movie_details">
                           
                            <li><strong>Genre:</strong> {movie.Genre}</li>
                            <hr/>
                            <li><strong>Released:</strong> {movie.Released}</li>
                            <hr/>
                            <li><strong>Rated:</strong> {movie.Rated}</li>
                            <hr/>
                            <li><strong>IMDB Rating:</strong> {movie.imdbRating}</li>
                            <hr/>
                            <li><strong>Director:</strong> {movie.Director}</li>
                            <hr/>
                            <li><strong>Writer:</strong> {movie.Writer}</li>
                            <hr/>
                            <li><strong>Actors:</strong> {movie.Actors}</li>
                        </ul>
                    </div>
                </div>

               
                    <div className="about-movie">
                        <h3>About</h3>
                        <p>{movie.Plot}</p> 
                        
                        <a className="imdb-url"  href={'https://www.imdb.com/title/' + movie.imdbID}
                        target="_blank" rel="noreferrer">View on IMDB</a>

                        <Link to ="/" className="back-to-search">Go Back To Search</Link>
                        
                    </div>
                
            </div>

        );
        let content=loading ? <div>Loading...</div>: movieInfo;
        return (
            <div>
               {content}
            </div>

        )                 
    }
}

const mapStateToProps=(state)=>({
    loading:state.movies.loading,
    movie:state.movies.movie
})
export default connect
(mapStateToProps,{fetchMovie,setLoading})(Movie) 
