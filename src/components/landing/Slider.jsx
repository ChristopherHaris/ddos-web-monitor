import React, { useState, useEffect, useMemo, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function Slider() {
  const slides = useMemo(
    () => [
      {
        url: "/images/news1.jpg",
        text: "DDOROCARE dan GF Luncurkan EcoRanger Academy untuk Mendukung NTB Zero Waste",
      },
      {
        url: "/images/news2.jpg",
        text: "Peringati HPSN 2022, DDOROCARE dan GF Melaksanakan Edukasi dan Cleanup di DWH Bilebante",
      },
      {
        url: "/images/news3.jpg",
        text: "Mewakili Pegiat Lingkungan, DDOROCARE Hadiri Penyusunan Road Map 100% EBT NTB",
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    // Set up an interval to auto-slide every 5 seconds
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clear the interval when the component is unmounted or when currentIndex changes
    return () => clearInterval(intervalId);
  }, [currentIndex, nextSlide]);

  return (
    <div className="max-w-[90%] md:max-w-[75%] md:h-[400px] h-[200px] w-full mx-auto my-20 flex justify-center relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      >
        {/* Text Overlay */}
        <div className="text-overlay absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h2
            className="text-white md:text-4xl text-xl font-bold text-center"
          
          >
            {slides[currentIndex].text}
          </h2>
        </div>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
