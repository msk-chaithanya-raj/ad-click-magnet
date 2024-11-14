import React from "react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

function Section8({
  content,
  roundt,
}: {
  content: {
    mainpara: string;
    heading: string;
    para?: string;
    cards: { title: string; count: string; para: string }[];
  };
  roundt?: string;
}) {
  return (
    <div
      className={`services-secs-main-container rounded-[50px] h-[90vh] flex-col justify-center items-center text-center ${roundt}`}
    >
      <p className="services-secs-para text-lg sm:text-sm md:text-base">
        {content.mainpara}
      </p>
      <h2 className="services-secs-head text-3xl sm:text-xl md:text-2xl">
        {content.heading}
      </h2>
      <p className="services-secs-content-para text-base sm:text-sm md:text-base">
        {content.para}
      </p>

      <div className="flex justify-between flex-wrap mt-[60px] gap-6">
        {content.cards.map((each) => (
          <CardSpotlight
            key={each.title}
            className="h-96 w-96 sm:w-full md:w-[45%] services-secs-card text-left"
          >
            <p className="services-secs-card-title font-medium mb-3 text-lg sm:text-base md:text-lg">
              {each.title}
            </p>
            <h2 className="services-secs-card-count mb-2 text-4xl sm:text-3xl md:text-4xl font-medium">
              {each.count}
            </h2>
            <p className="services-secs-card-para font-light text-sm sm:text-xs md:text-sm">
              {each.para}
            </p>
          </CardSpotlight>
        ))}
      </div>
    </div>
  );
}

export default Section8;
