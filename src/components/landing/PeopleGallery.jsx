import React from "react";
import PeopleCard from "@/components/landing/PeopleCard";
import Link from "next/link";

const PeopleGallery = () => {
  const peopleList = [
    {
      id: 1,
      name: "M. Wahyu Rosadi",
      position: "Founder & Direktur Eksekutif",
      imageUrl: "/images/wahyu.png",
      link: "/landing/team/wahyu",
    },
    {
      id: 2,
      name: "Imran Muliadi",
      position: "Manager Riset & Pemberdayaan ",
      imageUrl: "/images/imran.png",
      link: "/landing/team/imran",
    },
    {
      id: 3,
      name: "Rosyiadi",
      position: "Manager Program & Pengembangan SDM",
      imageUrl: "/images/rozyadi.png",
      link: "/landing/team/rozyadi",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {peopleList.map((person) => (
        <Link key={person.id} href={person.link} passHref>
          <PeopleCard
            imageUrl={person.imageUrl}
            name={person.name}
            position={person.position}
          />
        </Link>
      ))}
    </div>
  );
};

export default PeopleGallery;
