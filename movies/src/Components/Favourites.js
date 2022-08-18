import React, { Component } from 'react'
import axios from 'axios';
export default class Favourites extends Component {
   
    constructor(){
        super();
        this.state={
            movies:[],
            genre:[],
            currGenre:"All Genre",
        };
    }


    async componentDidMount (){
        // let ans=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=32c3d6c3f2e25bdbb3a269c9e549ab51&language=en-US&page=${this.state.currPage}`);
        // console.log(res.data);
        let results=JSON.parse(localStorage.getItem("movies"))
        let genreId = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Sci-Fi",
            10770: "TV",
            53: "Thriller",
            10752: "War",
            37: "Western",
          };
        let genreArr=[];
        results.map((movieObj)=>{
         if(!genreArr.includes(genreId[movieObj.genre_ids[0]])){
            genreArr.push(genreId[movieObj.genre_ids[0]]);
         }   
        })
        genreArr.unshift("All Genre")
        // console.log(genreArr);
        this.setState({
            movies:[...results],
            genre:[...genreArr] ,

        })
    }
   

    handleCurrGenre=(genre)=>{
        this.setState({
            currGenre:genre
        });
    }

    render() {

        let genreId = {
            28: "Action",
            12: "Adventure",
            16: "Animation",
            35: "Comedy",
            80: "Crime",
            99: "Documentary",
            18: "Drama",
            10751: "Family",
            14: "Fantasy",
            36: "History",
            27: "Horror",
            10402: "Music",
            9648: "Mystery",
            10749: "Romance",
            878: "Sci-Fi",
            10770: "TV",
            53: "Thriller",
            10752: "War",
            37: "Western",
          };
        let filterdArr=[];
        if(this.state.currGenre != "All Genre"){
            filterdArr=this.state.movies.filter((movieObj)=>genreId[movieObj.genre_ids[0]]==this.state.currGenre)
        }
        else{
        filterdArr=this.state.movies;  
        }
        
        return (
            <div className="row">
                <div className='col-3' >
                    <ul class="list-group">
                        {this.state.genre.map((genre)=>(
                
                            this.state.currGenre===genre ?
                        <li class="list-group-item active" aria-current="true">{genre}</li>
                        :
                        <li class="list-group-item" aria-current="true" onClick={()=>this.handleCurrGenre(genre)}>{genre}</li>
                        
                        ))}
                       

                    </ul>
                </div>
                <div className='col'>
                    <div className='row'>
                    <input type="text" className='col' placeholder='search'></input>
                    <input type="number" className='col' placeholder='5'></input>
                    </div>
                    
                    <div className='row'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Title</th>
                                    <th scope="col">Genre</th>
                                    <th scope="col">Popularity</th>
                                    <th scope="col">Rating</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filterdArr.map((movieObj)=>(
                                <tr>
                                    <th scope="row"><img width="50px" src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}/>{movieObj.original_title}</th>
                                    <td>{genreId[movieObj.genre_ids[0]]}</td>
                                    <td>{movieObj.popularity}</td>
                                    <td>{movieObj.vote_average}</td>
                                    <td>
                                    <button class="btn btn-outline-danger">
                                        Delete
                                    </button>
                                    </td>
                                </tr>
                                 ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
