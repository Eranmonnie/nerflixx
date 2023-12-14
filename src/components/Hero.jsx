import axios from 'axios';
import React, { useEffect, useState } from 'react'
import endpoints, { createMovieImage } from '../services/movieServices';

export const Hero = () => {
  const[movie, setMovie] = useState({});

  useEffect(()=>{
    axios.get(endpoints.popular).then((response)=>{
      const movies = response.data.results;
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    })
  }, []);
  
  const truncate=(str, len)=>{
      if(!str){
        return '' 
      }
      else{
      return str.length  > len ? str.slice(0, len) + "..." : str 
      }
  }

  if (!movie){
      return(
      <div>
        <p>fetching  movie...</p>
      </div>
    )
  };

  const{title, backdrop_path, release_date, overview } = movie;

  return (
    <div className="w-full h-[470px] lg:h-[570px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[470px] lg:h-[570px] bg-gradient-to-r from-black"/>
            <img
            className="w-full h-full object-cover object-top"
            src={createMovieImage(backdrop_path, 'original')}
            alt={title} 
            />

            <div className="absolute w-full top-[10%] lg:top-[35%] p-4 md:p-8">
              <h1 className="text-3xl md:text-6xl font-nsans-bold">{title}</h1> 
              <div className="mt-8 mb-4">
                <button className="capitalize bg-gray-300 text-black py-2 px-5">
                  play
                </button>
                <button className="capitalize py-2 px-5 ml-4 buttonwenowork">
                  watch later
                </button>
              </div>
              <p className="text-gray-400 text-sm">{release_date}</p>
              <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-grey-200">{truncate(overview, 165) }</p>
            </div>
      </div>
      
    </div>
  )
}
