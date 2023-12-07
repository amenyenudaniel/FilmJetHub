"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { MovieProps } from "@/types";
import { nowPlayingMovies } from "@/constants/api";

import "swiper/css";
import Link from "next/link";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    nowPlayingMovies().then((data) => {
      console.log(data?.results);
      setMovies(data?.results);
    });
  }, []);

  return (
    <div className="bg-black padding">
      <h1 className="text-center text-red poppins sm:text-[25px] text-[20px]">
        Movies
      </h1>
      <h1 className="text-white mont mt-[1rem] font-bold sm:text-[30px] text-[20px] mb-[3rem]">
        Now Playing
      </h1>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{ delay: 1800 }}
        loop
        breakpoints={{
          230: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
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
    </div>
  );
};

export default Movies;
