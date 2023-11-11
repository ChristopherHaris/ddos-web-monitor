import React from "react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const PeopleDetail = ({ person }) => {
  return (
    <div className="w-[80%] md:w-[60%] mt-20">
      <div className="flex flex-col h-full lg:flex-row gap-10 ">
        <Image
          src={person.imageUrl}
          alt={person.name}
          width={500}
          height={500}
          className="rounded-lg md:w-[40%] xl:w-[50%]"
        />
        <div className="flex justify-start xl:items-center sm:h-[100%] md:h-[80%] xl:h-[60%] 2xl:h-[50%]">
        <Separator orientation="vertical" className="w-2 h-full mr-4" />
          <div className="flex flex-col pl-4">
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold">{person.name}</h1>
              <h2 className="text-lg font-medium">{person.position}</h2>
            </div>
            <p className="mt-4 w-full text-justify">
              {person.quote}
            </p>
            <h2 className="text-lg font-bold mt-3">{person.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetail;
