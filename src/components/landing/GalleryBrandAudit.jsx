import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { useMediaQuery } from "@react-hook/media-query";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

function GalleryBrandAudit() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const galleryTab = [
    {
      imageUrl: "/images/brandaudit/BrandAudit1.jpg",
    },
    {
      imageUrl: "/images/brandaudit/BrandAudit2.jpg",
    },
    {
      imageUrl: "/images/brandaudit/BrandAudit3.jpg",
    },
    {
      imageUrl: "/images/brandaudit/BrandAudit4.jpg",
    },
    {
      imageUrl: "/images/brandaudit/BrandAudit5.jpg",
    },
    {
      imageUrl: "/images/brandaudit/BrandAudit6.jpg",
    },
    {
      imageUrl: "/images/brandaudit/BrandAudit7.jpg",
    },
    {
      imageUrl: "/images/brandaudit/BrandAudit8.jpg",
    },
    {
      imageUrl: "/images/brandaudit/BrandAudit9.jpg",
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

  const itemsPerPage = 3; // Adjust the number of items per page as needed
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleItems = galleryTab.slice(startIndex, endIndex);

  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className="max-w-[80%] md:max-w-[75%] w-full mx-auto my-11 relative">
      <div className="grid grid-cols-3 xl:grid xl:grid-cols-9 gap-3 flex-wrap mx-2 md:mx-0">
        {(isSmallScreen ? visibleItems : galleryTab).map((x, index) => (
          <motion.div
            key={index}
            className="h-[200px] relative cursor-pointer"
            onClick={() => {
              setOpen(true);
              setActiveIndex(isSmallScreen ? index + startIndex : index);
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
      {isSmallScreen && (
        <div className="flex justify-center gap-5 mt-10">
          <Button
            size="icon"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
            disabled={currentPage === 0}
            className="rounded"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            size="icon"
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(
                  prev + 1,
                  Math.ceil(galleryTab.length / itemsPerPage) - 1
                )
              )
            }
            disabled={
              currentPage === Math.ceil(galleryTab.length / itemsPerPage) - 1
            }
            className="rounded"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
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

export default GalleryBrandAudit;
