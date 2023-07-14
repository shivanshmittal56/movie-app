import React, { useState,useEffect } from "react"
import "./movieList.css"
import Card from "../card/card"
import {useParams} from "react-router-dom"

const MovieList=()=>{ 
  const [movieList,setMovieList]=useState([])
  const {type}= useParams()

  useEffect(()=>{
    getData()
  },[])

  
  useEffect(()=>{
    getData()
  },[type])
  

  const getData=()=>{
    fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=073e9c8414c2e3635625dc3e99522348&language=en-US`)
    .then(res=>res.json())
    .then(data=>setMovieList(data.results))
  }


  return (
    <div className="movie__list">
        <h2 className="list__title">{(type?type:"POPULAR").toUpperCase()}</h2>
        <div className="list__cards">
            {
                movieList.map(movie=>(
                    <Card movie={movie}/>
                ))
            }
            </div> 
    </div>
  )
}


export default MovieList