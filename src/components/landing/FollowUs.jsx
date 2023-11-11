import Link from "next/link";
import { motion } from "framer-motion";
import { FacebookWithCircle } from "@styled-icons/entypo-social/FacebookWithCircle";
import { YoutubeWithCircle } from "@styled-icons/entypo-social/YoutubeWithCircle";
import { TwitterWithCircle } from "@styled-icons/entypo-social/TwitterWithCircle";
import { InstagramWithCircle } from "@styled-icons/entypo-social/InstagramWithCircle";
import React from "react";

const LogoSize = 55;

const socialMediaLinks = [
  {
    icon: FacebookWithCircle,
    color: "text-blue-800",
    id: 1,
    link: "https://www.facebook.com/lombokbebassampah",
  },
  {
    icon: YoutubeWithCircle,
    color: "text-red-500",
    id: 2,
    link: "https://www.youtube.com/@ddorocare-aksiindonesiales6075",
  },
  {
    icon: TwitterWithCircle,
    color: "text-blue-400",
    id: 3,
    link: "https://twitter.com/ddorocare",
  },
  {
    icon: InstagramWithCircle,
    color: "text-gray-900",
    id: 4,
    link: "https://www.instagram.com/ddorocareid/",
  },
];

function FollowUs() {
  const handleLinkClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="font-bold text-blue-900 text-xl md:text-2xl text-center my-8">
        FOLLOW US
      </h1>
      <div className="flex w-full justify-evenly">
        {socialMediaLinks.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={`cursor-pointer ${item.color}`}
            onClick={() => handleLinkClick(item.link)}
          >
            {React.createElement(item.icon, { size: LogoSize })}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FollowUs;
