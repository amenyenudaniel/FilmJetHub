import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <header className="bg-hero">
      <nav className="paddingNav flex flex-row justify-between items-center pt-[1rem]">
        <Link href={"/"}>
          <h1 className="cursor-pointer text-red font-bold poppins sm:text-[2.5rem] text-[1.5rem]">
            FilmJetHub
          </h1>
        </Link>
        <Link href={"/sign-in"}>
          <button className="bg-red outline-none border-none py-1 sm:px-3 px-2 rounded-[5px] text-white sm:text-[17px] text-[15px] hover:bg-white hover:text-black font-medium transition">
            Sign In
          </button>
        </Link>
      </nav>

      <section className="margin flex justify-center items-center flex-col">
        <p className="lg:w-[60%] sm:w-[80%] w-[100%] px-[1rem] sm:px-[0rem] text-white sm:text-[28px] text-[20px] mont text-center font-bold">
          "Explore a vast library of limitless entertainment on our movies
          website. Enjoy unlimited streaming and downloading of movies, TV
          shows, and cartoons. Dive into a world of cinematic experiences with a
          diverse collection that caters to every entertainment preference"
        </p>
        <Link href={"/create-account"}>
          <button className="outline-none border-none py-2 sm:px-4  px-3 text-white bg-red mt-[2rem] sm:text-[22px] text-[18px] font-bold rounded-[5px] hover:bg-white hover:text-black  transition">
            Get Started
          </button>
        </Link>
      </section>
    </header>
  );
};

export default Hero;
