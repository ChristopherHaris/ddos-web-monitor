import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } },
};

const hoverAnimation = {
  scale: 1.1,
  transition: { duration: 0.5 },
};

function NewsCard({ imageUrl, title, linkText, linkHref }) {
  return (
    <Card className="w-full items-center">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        whileHover={hoverAnimation}
      >
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          className="h-56"
        />
      </motion.div>
      <div className="m-5">
        <CardContent>
          <h1 component="div" className="text-center font-bold text-lg">
            {title}
          </h1>
        </CardContent>
        <CardActions className="justify-center">
          <Button variant="outline" asChild className="text-sm">
            <Link href={linkHref}>{linkText}</Link>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
}

export default NewsCard;
