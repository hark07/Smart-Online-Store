import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const MainBanner = () => {
  const banners = [
    {
      id: 1,
      img: assets.image2,
      title: (
        <>
          Next-Gen Electronics, <br /> at Your Fingertips!
        </>
      ),
    },
    {
      id: 2,
      img: assets.macbook_image,
      title: (
        <>
          Best Prices, <br /> Delivered to Your Door!
        </>
      ),
    },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setSwiperReady(true);
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-[#f3f3f3]">
      {/* Navigation Arrows (hidden on mobile) */}
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className="hidden md:flex absolute z-10 left-4 top-1/2 -translate-y-1/2 bg-white text-primary rounded-full p-2 cursor-pointer shadow hover:bg-primary hover:text-white transition"
      >
        <IoIosArrowBack size={24} />
      </button>

      <button
        ref={nextRef}
        aria-label="Next slide"
        className="hidden md:flex absolute z-10 right-4 top-1/2 -translate-y-1/2 bg-white text-primary rounded-full p-2 cursor-pointer shadow hover:bg-primary hover:text-white transition"
      >
        <IoIosArrowForward size={24} />
      </button>

      {swiperReady && (
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          loop
          className="w-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div
                className="
                  flex flex-col-reverse md:flex-row
                  items-center justify-between
                  gap-6
                  px-4 py-8
                  sm:px-6 sm:py-10
                  md:px-16 md:py-16
                "
              >
                {/* TEXT SECTION */}
                <div className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-6">
                  <h1
                    className="
                      font-bold text-gray-900 leading-tight
                      text-xl sm:text-2xl md:text-4xl lg:text-5xl
                      max-w-md mx-auto md:mx-0
                    "
                  >
                    {banner.title}
                  </h1>

                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-4">
                    <Link
                      to="/products"
                      className="px-9 py-2 text-sm sm:text-base bg-primary text-white rounded hover:bg-primary-dull transition"
                    >
                      Shop Now
                    </Link>

                    <Link
                      to="/products"
                      className="px-6 py-2 text-sm sm:text-base border border-gray-700 rounded hover:bg-gray-200 transition"
                    >
                      Explore Deals
                    </Link>
                  </div>
                </div>

                {/* IMAGE SECTION */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <img
                    src={banner.img}
                    alt="banner"
                    className="
                      w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg
                      h-[180px] sm:h-[220px] md:h-[300px] lg:h-[380px]
                      object-contain
                    "
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default MainBanner;
