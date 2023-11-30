import React from 'react'
import { createMovieImage } from '../services/movieServices'

export const MovieItem = ({movie}) => {
   const {backdrop_path, title, poster_path} = movie
  return (
    <div className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2">
        <img
        className="w-full h-40 block object-cover"
         src={createMovieImage(backdrop_path ?? poster_path, "w500")} alt={title} />
    </div>
  )
}
