"use client";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const AccordionSeason = ({ episodes, s_air_date, season_number }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
  });

  const { id } = useParams();
  console.log("pagenjsns", id);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const formattedDate = (dateString: any) => {
    if (!dateString) {
      return "";
    }

    const date = new Date(Date.parse(dateString));
    const options: any = { year: "numeric", month: "long", day: "numeric" };

    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className="border-b border-black gray w-[100%]">
      <div
        className="flex justify-between items-center cursor-pointer hover:bg-gray transition"
        onClick={toggleAccordion}
      >
        <div className="flex items-center gap-[2rem] cursor-pointer p-4 ">
          <div className="w-[60px] h-[60px] text-center flex items-center justify-center bg-red text-white poppins text-[20px]">
            {season_number}
          </div>
          <p className="mont text-white text-[18px]">Season {season_number}</p>
          {s_air_date && (
            <p className="text-white mont text-[17px]">
              {formattedDate(s_air_date)}
            </p>
          )}
        </div>
        <div className="pr-[2rem]">
          {isOpen ? (
            <Image src={"/arrow-top.svg"} width={30} height={30} alt="arrow" />
          ) : (
            <Image src={"/arrow-down.svg"} width={20} height={20} alt="arrow" />
          )}
        </div>
      </div>
      <animated.div
        style={{ height, opacity }}
        className="overflow-hidden transition-all duration-300"
      >
        {episodes?.map((episode: any) => (
          <Link
            key={episode?.still_path}
            href="/tvshows/[id]/[anotherid]"
            as={`/tvshows/${id}/season${season_number}episode${episode?.episode_number}`}
            className="flex items-center gap-[2rem] hover:bg-gray transition border border-gray p-3"
          >
            <Image
              src={`https://image.tmdb.org/t/p/w500${episode?.still_path}`}
              alt="episode-image"
              width={100}
              height={70}
            />
            <p className="text-white hover:text-red">
              {season_number} - {episode?.episode_number}
            </p>
            <div>
              <p className="text-white mont text-[17px] "> {episode?.name}</p>
              <p className=" mont text-red text-[15px] mt-[5px]">
                {" "}
                {formattedDate(episode?.air_date)}
              </p>
            </div>
          </Link>
        ))}
      </animated.div>
    </div>
  );
};

export default AccordionSeason;