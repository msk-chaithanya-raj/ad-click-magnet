import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";
import React, { useEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function Cards3dSections({
  content,
  className,
  translate,
}: {
  content: {
    mainpara: string;
    head: string;
    cards: { head: string; para: string; img: string }[];
  };
  className?: string;
  translate?: string;
}) {
  const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const hscroll = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: translate || "-100%",
        ease: "none",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          scroller: "body",
          start: "top -40%",
          end: "27% top",
          scrub: 2,
          pin: true,
        },
      }
    );
    return () => {
      hscroll.kill();
    };
  }, [translate]);

  return (
    <div
      ref={triggerRef}
      className={`services-secs-main-container h-[150vh] overflow-hidden flex-col justify-center items-center text-center ${className}`}
    >
      <p className="services-secs-para">{content.mainpara}</p>
      <h2 className="services-secs-head">{content.head}</h2>
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row lg:flex-wrap justify-center mt-[60px] gap-6"
      >
        {content.cards.map((each, index) => (
          <CardContainer key={index} className="inter-var text-left">
            <CardBody className="card-body-cards3d w-[100%] h-auto rounded-xl p-6 border bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {each.head}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {each.para}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={each.img}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default Cards3dSections;
