import React, { Component } from 'react'
import {connect} from "react-redux"
import {searchMovie,fetchMovies,setLoading} from "../../action/searchAction"

export class SearchForm extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             error:null             
        }
    }
    

    changeHandler=(e)=>{
        this.props.searchMovie(e.target.value);
    }

    submitHandler=(e)=>{
        e.preventDefault();
        if(this.props.text===""){
           this.setState({
               error: "Please provide a value to Search"
           })
        }
        
        else {
            this.props.fetchMovies(this.props.text);
            this.props.setLoading();
            this.setState({
                error:null
            })
        }
        
               
    }
     
    render() {
        return (
            <div className="movie-container">
            <div className="form-container">
                <div>
                    <h3>Search your favourite Movies and Tv series</h3>
                </div>
                <div>
                    <form class="pop-form" id="searchForm" onSubmit={this.submitHandler}>
                        <input type="text" autoFocus="true" name="searchText" onChange={this.changeHandler}
                            placeholder="Example mission,gravity,war..."/>
                        <button type="submit">Search</button>
                        <div style={{color:"red"}}>{this.state.error}</div>
                        
                    </form>
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>({
    text:state.movies.text    
})

export default connect(mapStateToProps,{searchMovie,fetchMovies,setLoading})(SearchForm)
