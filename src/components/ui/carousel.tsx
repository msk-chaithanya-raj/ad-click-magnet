import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export const blogs: {
  id: number;
  url: string;
  time: string;
  description: string;
}[] = [
  {
    id: 1,
    url: "https://numerique.vamtam.com/wp-content/uploads/2023/05/milad-fakurian-58Z17lnVS4U-unsplash-Copy.jpg",
    time: "May, 2023",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
  },
  {
    id: 2,
    url: "https://numerique.vamtam.com/wp-content/uploads/2023/05/minh-pham-HI6gy-p-WBI-unsplash-Copy.jpg",
    time: "May, 2023",
    description:
      "The Metaverse boom: brands unite and Apple takes a rain check",
  },
  {
    id: 3,
    url: "https://numerique.vamtam.com/wp-content/uploads/2023/05/milad-fakurian-58Z17lnVS4U-unsplash-Copy.jpg",
    time: "May, 2023",
    description:
      "The evolution of live-stream content and short-form video: a look at the TikTok revolution",
  },
  {
    id: 4,
    url: "https://numerique.vamtam.com/wp-content/uploads/2023/05/minh-pham-HI6gy-p-WBI-unsplash-Copy.jpg",
    time: "May, 2023",
    description:
      "The Metaverse boom: brands unite and Apple takes a rain check",
  },
];

export default function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={1} // Start with 1 slide on smaller screens
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides for larger screens
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2, // 3 slides for even larger screens
            spaceBetween: 40,
          },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <div className="carousel-card flex flex-col items-center">
              <Image
                className="blog-img rounded-md"
                alt="blog img"
                src={blog.url}
                height={100}
                width={200}
                layout="intrinsic"
              />
              <div className="blog-content flex flex-col justify-center mt-4">
                <p className="blog-time text-sm text-gray-500">{blog.time}</p>
                <p className="blog-des text-md text-center">
                  {blog.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
