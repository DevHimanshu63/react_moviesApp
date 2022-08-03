import React, { Component } from 'react'
// import { movies } from './GetMovies'
import axios from 'axios'
export default class List extends Component {
    constructor(){
        super();
        this.state={
            hover:"",
            parr:[1],
            currPage:7,
            movies:[],
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

    async componentDidMount (){
        let res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1749ee86927c862e6ac40360e3eb8c0d&language=en-US&page=${this.state.currPage}`);
        // console.log(res.data);
        this.setState({
            movies:[...res.data.results] 
        })
    }

    render() {  
        // console.log("render is called ")
        // let movie = movies.results;
        return (
            <>
                {
                    this.state.movies.length === 0 ?
                        <div className="spinner-border text-secondary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div> :
                        (
                            <div>
                                <h3 className='text-center'><strong>Trending movies</strong></h3>
                                <div>
                                    <div className='movies-list'>
                                    {
                                        this.state.movies.map((movieObj) => (
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

                                <div className='pegination'>
                                    
                                    <nav aria-label="Page navigation example">
                                    <ul class="pagination">
                                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                        {
                                        this.state.parr.map(pageNum =>(
                                        <li class="page-item"><a class="page-link" href="#">{pageNum}</a></li>

                                        ))
                                        }
                                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                    </ul>
                                    </nav>

                                </div>
                            </div>

                        )
                }

            </>
        )
    }
}
