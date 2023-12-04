"use client";
import { AccordionItemProps } from "@/types";
import { useState } from "react";
import { useSpring, animated } from "react-spring";

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { height, opacity } = useSpring({
    from: { height: 0, opacity: 0 },
    to: { height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 },
  });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-black gray w-[100%]">
      <div
        className="flex items-center justify-between cursor-pointer p-4"
        onClick={toggleAccordion}
      >
        <h3 className="sm:text-[20px] text-[18px] font-bold text-white poppins">
          {title}
        </h3>
        {isOpen ? (
          <p className="text-white text-[20px] font-bold mont">-</p>
        ) : (
          <p className="text-white text-[20px] font-bold mont">+</p>
        )}
      </div>
      <animated.div
        style={{ height, opacity }}
        className="overflow-hidden transition-all duration-300"
      >
        <p className="p-4 text-white mont sm:text-[18px] text-[16px]">
          {content}
        </p>
      </animated.div>
    </div>
  );
};

const Accordion = () => {
  return (
    <section className="padding bg-black">
      {" "}
      <h1 className="text-white poppins font-bold sm:text-[30px] text-[20px] mb-[3rem]">
        Frequently Asked Questions
      </h1>
      <div className="lg:w-[70%] w-[100%] mx-auto mt-8 gap-[0.5rem] flex flex-col">
        <AccordionItem
          title="Accordion Item 1"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <AccordionItem
          title="Accordion Item 2"
          content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <AccordionItem
          title="Accordion Item 2"
          content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <AccordionItem
          title="Accordion Item 2"
          content="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </section>
  );
};

export default Accordion;
