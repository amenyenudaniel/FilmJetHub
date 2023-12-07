"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { MovieProps } from "@/types";
import { allMoviesAPI, nowPlayingMovies } from "@/constants/api";
import Loading from "./Loading";

// Main functional component
const Movies = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [allMovies, setAllMovies] = useState<any>([]);
  const [pages, setPages] = useState<number>(1);
  const [loading, setLoading] = useState(false);

  // Function to fetch data for "Now Playing" and "Popular Movies"
  const fetchData = async () => {
    setLoading(true);
    try {
      const dataForPage1 = await allMoviesAPI(pages);
      setAllMovies((prevMovies: any[]) => [
        ...(Array.isArray(prevMovies) ? prevMovies : []),
        ...(dataForPage1?.results || []),
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Function to handle "Load More" button click
  const handleClick = () => {
    setPages((prevPages: number) => prevPages + 1);
  };

  // Effect to fetch initial data for "Now Playing" movies
  useEffect(() => {
    fetchData();
  }, [pages]); // Fetch data when pages change

  // Effect to fetch initial data for "Now Playing" movies
  useEffect(() => {
    setLoading(true);
    try {
      nowPlayingMovies().then((data) => {
        console.log(data?.results);
        setMovies(data?.results);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []); // Fetch initial data for "Now Playing"

  // Loading state check
  if (loading) {
    return <Loading />;
  }

  // JSX code for the component
  return (
    <div className="bg-black padding">
      <h1 className="text-center text-red poppins sm:text-[25px] text-[20px]">
        Movies
      </h1>
      <h1 className="text-white mont mt-[1rem] font-bold sm:text-[30px] text-[20px] mb-[3rem]">
        Now Playing
      </h1>

      {/* Swiper component for "Now Playing" movies */}
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{ delay: 1800 }}
        loop
        breakpoints={
          {
            // ... breakpoints configuration
          }
        }
        modules={[Pagination, Autoplay]}
      >
        {movies?.map((movie: MovieProps) => (
          <SwiperSlide
            key={movie?.id}
            className="w-[100%] h-full hover:scale-[1.1] transition hover:opacity-[0.7]"
          >
            <Link href={`/home/[id]`} as={`/home/${movie?.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="movie-poster"
                width={200}
                height={400}
              />
              {movie?.title.length > 13 ? (
                <p className="text-white  md:text-[17px] text-[15px] mt-[0.5rem]">
                  {movie?.title.slice(0, 13)}..
                </p>
              ) : (
                <p className="text-white md:text-[17px] text-[15px] mt-[0.5rem]">
                  {movie?.title}
                </p>
              )}
              <p className="text-white text-[17px] text-[15px] mont">
                ⭐{movie?.vote_average.toFixed(1)}
              </p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* "Popular Movies" section */}
      <h1 className="text-white mont mt-[1rem] font-bold sm:text-[30px] text-[20px] mb-[3rem] mt-[5rem]">
        Popular Movies
      </h1>

      <div className="flex flex-wrap gap-[1.5rem]">
        {allMovies?.map((movie: MovieProps) => (
          <div
            key={movie?.id}
            className="h-full hover:scale-[1.1] transition hover:opacity-[0.7]"
          >
            <Link href={`/home/[id]`} as={`/home/${movie?.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                alt="movie-poster"
                width={200}
                height={400}
              />
              {movie?.title.length > 13 ? (
                <p className="text-white  md:text-[17px] text-[15px] mt-[0.5rem]">
                  {movie?.title.slice(0, 13)}..
                </p>
              ) : (
                <p className="text-white md:text-[17px] text-[15px] mt-[0.5rem]">
                  {movie?.title}
                </p>
              )}
              <p className="text-white text-[17px] text-[15px] mont">
                ⭐{movie?.vote_average.toFixed(1)}
              </p>
            </Link>
          </div>
        ))}
      </div>

      {/* "Load More" button */}
      <button
        className="outline-none border-none py-2 sm:px-4  px-3 text-white mont bg-red mt-[3rem] sm:text-[20px] text-[16px] font-bold rounded-[5px] hover:bg-white hover:text-black transition flex m-auto"
        onClick={handleClick}
      >
        Load More
      </button>
    </div>
  );
};

export default Movies;
