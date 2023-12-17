import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { createMovieImage } from "../services/movieServices";
import { UserAuth } from "../context/AuthContext";
import { db } from "../services/firebaseServises";
import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";

const Profile = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  const slide = (offset) => {
    const slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + offset;
  };

  const handelUnlikeShow = async (movie) => {
    const userDoc = doc(db, "Users", user.email);
    await updateDoc(userDoc, {
      favShows: arrayRemove(movie),
    });
  };

  useEffect(() => {
    if (user) {
      onSnapshot(doc(db, "Users", `${user.email}`), (doc) => {
        if (doc.data()) {
          setMovies(doc.data().favShows);
        }
      });
    }
  }, [user?.email]);

  if (!user) {
    return (
      <>
        <p>Fetching shows....</p>
      </>
    );
  }

  return (
    <>
      <div>
        <div>
          <img
            className="block w-full object-cover h-[500px]"
            src={`https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/9088b423-46dd-4b5d-90ab-d68523264d15/NG-en-20231211-popsignuptwoweeks-perspective_alpha_website_medium.jpg`}
            alt="//"
          />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-[500px]" />
          <div className="absolute top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl font-nsans-bold my-2">
              My Shows
            </h1>
            <p className="font-nsans-light text-gray-400 text-lg">
              {user.email}
            </p>
          </div>
        </div>
        {/* movie row */}
        <div>
          <h2 className="font-nsans-bold md:text-xl p-4 capitalize">
            Favourite Movies
          </h2>
          <div className="relative flex items-center group">
            <MdChevronLeft
              size={40}
              onClick={() => {
                slide(-500);
              }}
              className="bg-white rounded-full absolute left-2 opaicity-80 text-gray-700 z-10 hidden group-hover:block cursor-pointer"
            />
            <div
              id={`slider`}
              className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
            >
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="relative w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block rounded-lg overflow-hidden cursor-pointer m-2"
                >
                  <img
                    className="w-full h-40 block object-cover"
                    src={createMovieImage(
                      movie.backdrop_path ?? movie.poster_path,
                      "w500"
                    )}
                    alt={movie.title}
                  />
                  <div className="absolute top-0 left-0 w-full h-40 bg-black/80 opacity-0 hover:opacity-100">
                    <p className="whitespace-normal text-xs md:text-sm flex justify-center items-center h-full font-nsans-bold">
                      {movie.title}
                    </p>
                    <p className="cursor-pointer">
                      <AiOutlineClose
                        onClick={() => {
                          handelUnlikeShow(movie);
                        }}
                        size={20}
                        className="absolute top-2 right-2 text-gray-300"
                      />
                    </p>
                  </div>
                </div>
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
      </div>
    </>
  );
};

export default Profile;
