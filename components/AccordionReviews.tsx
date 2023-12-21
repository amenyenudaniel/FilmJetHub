"use client";
import { useSpring, animated } from "react-spring";
import { useState } from "react";

const AccordionReviews = ({ author, avatar_path, rating, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
  });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-black gray w-[100%] mb-[0.2rem]">
      <div
        className="flex justify-between items-center cursor-pointer hover:bg-gray transition"
        onClick={toggleAccordion}
      >
        <div className="flex items-center sm:gap-[2rem] gap-[1rem] cursor-pointer p-4">
          {avatar_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${avatar_path}`}
              alt="profile"
              className="sm:w-[50px] w-[30px] h-[30px] sm:h-[50px] rounded-full"
            />
          ) : (
            <img
              src="/profile.svg"
              alt="profile"
              className="sm:w-[50px] w-[30px] h-[30px] sm:h-[50px] rounded-full"
            />
          )}

          <p className="text-white mont sm:text-[17px] text-[15px]">{author}</p>
        </div>

        <div className="pr-[2rem] flex sm:gap-[3rem] gap-[1rem]">
          {rating !== null && (
            <p className="text-white mont sm:text-[17px]   text-[15px]">
              ⭐{rating}
            </p>
          )}

          {isOpen ? (
            <img
              src={"/arrow-top.svg"}
              className="sm:w-[30px] w-[25px] h-[25px] sm:h-[30px]"
              alt="arrow"
            />
          ) : (
            <img
              src={"/arrow-down.svg"}
              className="sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]"
              alt="arrow"
            />
          )}
        </div>
      </div>
      <animated.div
        style={{ height, opacity }}
        className="overflow-hidden transition-all duration-300 slide-bottom"
      >
        <p className="sm:px-[2rem] px-2 py-[1rem] mont text-white sm:text-[17px] text-[14px]">
          {content}
        </p>
      </animated.div>
    </div>
  );
};

export default AccordionReviews;
