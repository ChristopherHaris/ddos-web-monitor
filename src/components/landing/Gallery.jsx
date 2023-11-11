import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

function Gallery() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryTab = [
    {
      imageUrl: "/images/gallery1.jpg",
    },
    {
      imageUrl: "/images/gallery2.jpg",
    },
    {
      imageUrl: "/images/gallery3.jpg",
    },
  ];

  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="max-w-[80%] md:max-w-[75%] w-full mx-auto my-11 relative">
      <div className="flex flex-col md:grid md:grid-cols-3 gap-3 flex-wrap mx-2 md:mx-0">
        {galleryTab.map((x, index) => (
          <motion.div
            key={index}
            className="md:h-[350px] h-[400px] relative cursor-pointer"
            onClick={() => {
              setOpen(true);
              setActiveIndex(index);
            }}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="group h-full">
              <div
                className="bg-cover bg-center h-full w-full bg-no-repeat"
                style={{ backgroundImage: `url("${x.imageUrl}")` }}
              ></div>
              <div className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"></div>
            </div>
          </motion.div>
        ))}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
        index={activeIndex}
      />
    </div>
  );
}

export default Gallery;
