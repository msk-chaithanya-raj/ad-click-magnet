import React from "react";
import { TypewriterEffect } from "../ui/TypewriterEffect";
import { FaAngleRight } from "react-icons/fa6";

function Section7({
  content,
}: {
  content: {
    mainpara: string;
    heading: { text: string; className: string }[];
    para1: string;
    para2: string;
    button: string;
  };
}) {
  return (
    <div className="services-sec7-main-container flex justify-center items-center py-12 px-6">
      <div className="services-sec7-card w-full max-w-[1200px]">
        <div className="services-sec7-card-content w-full sm:w-[80%] md:w-[70%] mx-auto">
          <p className="services-secs-main-para mb-6 text-lg sm:text-base md:text-lg">
            {content.mainpara}
          </p>
          <TypewriterEffect
            className="services-secs-head text-xl sm:text-lg md:text-xl"
            words={content.heading}
          />
          <p className="services-sec7-content-para mt-6 text-base sm:text-sm md:text-base">
            {content.para1}
          </p>
          <br />
          <p className="services-sec7-content-para mb-9 text-base sm:text-sm md:text-base">
            {content.para2}
          </p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="book-a-call px-6 py-2 text-lg sm:text-base"
            >
              Book a call
            </button>
            <button
              type="button"
              className="ai-design-service flex items-center text-lg sm:text-base"
            >
              {content.button}
              <FaAngleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
