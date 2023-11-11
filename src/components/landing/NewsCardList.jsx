import * as React from "react";
import NewsCard from "./NewsCard";
import { Suspense } from "react";
import BarLoader from "react-spinners/BarLoader";

const mockDatabase = [
  {
    id: 1,
    imageUrl: "/images/news1.jpg",
    title:
      "DDOROCARE dan GF Luncurkan EcoRanger Academy untuk Mendukung NTB Zero Waste",
    linkText: "Read More",
    linkHref: "/landing/news/1",
  },
  {
    id: 2,
    imageUrl: "/images/news2.jpg",
    title:
      "Peringati HPSN 2022, DDOROCARE dan GF Melaksanakan Edukasi dan Cleanup di DWH Bilebante",
    linkText: "Read More",
    linkHref: "/landing/news/2",
  },
  {
    id: 3,
    imageUrl: "/images/news3.jpg",
    title:
      "Mewakili Pegiat Lingkungan, DDOROCARE Hadiri Penyusunan Road Map 100% EBT NTB",
    linkText: "Read More",
    linkHref: "/landing/news/3",
  },
];

function NewsCardList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
      {mockDatabase.map((item) => (
        <Suspense
          key={item.id}
          fallback={
            <div className="flex justify-center items-center h-screen">
              <BarLoader color={"#000000"} loading={true} height={4} />
            </div>
          }
        >
          <NewsCard
            imageUrl={item.imageUrl}
            title={item.title}
            linkText={item.linkText}
            linkHref={`/landing/news/${item.id}`}
          />
        </Suspense>
      ))}
    </div>
  );
}

export default NewsCardList;
