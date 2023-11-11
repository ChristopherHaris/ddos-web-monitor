import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PeopleCard = ({ imageUrl, name, position, link }) => {
  const router = useRouter();

  const handleCardClick = () => {
    if (
      typeof window !== "undefined" &&
      window.location &&
      router &&
      link &&
      link.trim() !== ""
    ) {
      router.push(link);
    }
  };

  return (
    <>
      <motion.div
        className="relative group rounded-lg overflow-hidden cursor-pointer flex flex-col"
        onClick={handleCardClick}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      >
        <Image
          src={imageUrl}
          alt={name}
          className="object-cover w-full max-h-[600px]"
          width={500}
          height={500}
        />
        <div className="text-center my-10 space-y-2">
          <h1 className="text-2xl md:text-3xl font-semibold">{name}</h1>
          <p className="text-gray-500 text-base md:text-lg">{position}</p>
        </div>
      </motion.div>
    </>
  );
};

export default PeopleCard;
