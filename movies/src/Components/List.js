import React, { Component } from 'react'
import { movies } from './GetMovies'
export default class List extends Component {
    constructor(){
        super();
        this.state={
            hover:""
        };
    }
    handleEnter=(id)=>{
        this.setState({
          hover:id,
        });
    };
    handleLeave=()=>{
        this.setState({
          hover:"",
        });
    };

    render() {
        let movie = movies.results;
        return (
            <>
                {
                    movie.length === 0 ?
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> :
                        (
                            <div>
                                <h3 className='text-center'><strong>Trending movies</strong></h3>
                                <div>
                                    <div className='movies-list'>
                                    {
                                        movie.map((movieObj) => (
                                            <div>
                                                <div className="card movie-card" onMouseEnter={()=>this.handleEnter(movieObj.id)} onMouseLeave={this.handleLeave}>
                                                    <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`} className="card-img-top Movie-img " alt="..." style={{ width: "20vw", heigth: "40vh" }} />
                                                   
                                                        <h5 className="card-title movie-title">{movieObj.original_title}</h5>
                                                        
                                                        <div className='button-wrapper'>
                                                            { this.state.hover === movieObj.id && (
                                                            <a href="#" class="btn btn-danger movie-button">Add to Favourites</a>
                                                            )}
                                                        </div>
                                                    
                                                </div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                </div>



                            </div>

                        )
                }

            </>
        )
    }
}
