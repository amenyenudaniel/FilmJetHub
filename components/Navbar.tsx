"use client";
import Link from "next/link";
import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import { AuthContext } from "@/context";
import { AuthContextProps } from "@/types";
import Image from "next/image";

const Navbar = () => {
  const [userOpen, setUserOpen] = useState<boolean>(false);
  const { user } = useContext(AuthContext) as AuthContextProps;
  return (
    <section>
      <nav className="paddingNav bg-black py-2 flex items-center justify-between">
        <Link href={"/home"}>
          <h1 className="cursor-pointer text-red font-bold poppins sm:text-[2.5rem] text-[1.5rem]">
            FilmJetHub
          </h1>
        </Link>
        <div className="flex items-center gap-[20px]">
          <Link
            href={"/home"}
            className="text-white text-[18px] mont hover:text-red transition"
          >
            Movies
          </Link>
          <Link
            href={"/tvshows"}
            className="text-white text-[18px] mont hover:text-red transition"
          >
            Tv Shows
          </Link>
          <SearchBar />
        </div>
        <Image
          src={"/profile.svg"}
          width={35}
          height={35}
          alt="profile"
          className="cursor-pointer"
          onClick={() => setUserOpen(!userOpen)}
        />
      </nav>

      {userOpen && (
        <div className="w-[400px] flex items-center flex-col justify-center px-1 py-4 bg-gray rounded-[10px] absolute right-[20px]">
          <div className="flex justify-between gap-[10px] items-center">
            <p className="text-white text-[18px] mont">{user.email}</p>
            <p
              className="text-[30px] text-red cursor-pointer"
              onClick={() => setUserOpen(false)}
            >
              x
            </p>
          </div>

          {/* <button
            onClick={handleSignOut}
            className="outline-none border-none py-2 sm:px-4  px-3 text-white  mont bg-red mt-[2rem] sm:text-[22px] text-[18px] font-bold rounded-[5px] hover:bg-white hover:text-black transition"
          >
            Sign Out
          </button> */}
        </div>
      )}
    </section>
  );
};

export default Navbar;
