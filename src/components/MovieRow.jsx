import React, { useEffect, useState } from "react";
import axios from "axios";
import { MovieItem } from "./MovieItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export const MovieRow = ({ title, url }) => {
  const [movies, setMovie] = useState([]);
  const rowId = Math.floor(Math.random() * 1000);

  const slide = (offset) => {
    const slider = document.getElementById("slider" + rowId);
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  useEffect(() => {
    axios.get(url).then((response) => {
      setMovie(response.data.results);
    });
  }, [url]);

  return (
    <div>
      <h2 className="font-nsans-bold md:text-xl p-4 capitalize">{title}</h2>
      <div className="relative flex items-center group">
        <MdChevronLeft
          size={40}
          onClick={() => {
            slide(-500);
          }}
          className="bg-white rounded-full absolute left-2 opaicity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
        />
        <div
          id={`slider` + rowId}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          size={40}
          onClick={() => {
            slide(500);
          }}
          className="bg-white rounded-full absolute right-2 opaicity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
        />
      </div>
    </div>
  );
};
