import { motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";

function WaveComponent({
  text = "DDOROCARE",
  waveColor = "rgba(12,66,145,255)",
  textColor = "white",
}) {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    // Set isVisible to true after a delay (adjust the delay as needed)
    const delay = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    // Adjust top position based on the number of lines
    const textElement = textRef.current;
    if (textElement) {
      const numberOfLines = textElement.clientHeight / parseInt(getComputedStyle(textElement).lineHeight);
      textElement.style.top = numberOfLines > 2 ? "12%" : "25%";
    }
  }, [text]);

  return (
    <>
      <style jsx>{`
        body {
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .wave-container {
          position: relative;
          height: 400px; /* Adjusted height for better visibility */
          width: 100%;
          overflow: hidden;
        }

        .wave {
          display: block;
          position: relative;
          height: 350px; /* Increased height for a larger wave */
          width: 100%;
          background: ${waveColor};
          transform: scale(1, 1);
        }

        .wave:before {
          content: "";
          display: block;
          position: absolute;
          border-radius: 100%;
          width: 100%;
          height: 600px; /* Increased height for a larger wave */
          background-color: white;
          left: -25%; /* Adjusted left position to switch direction */
          top: 310px; /* Adjusted top position for larger wave */
        }

        .wave:after {
          content: "";
          display: block;
          position: absolute;
          border-radius: 100%;
          width: 100%;
          height: 600px; /* Increased height for a larger wave */
          background-color: ${waveColor};
          right: -24.8%; /* Adjusted right position to switch direction */
          top: -210.5px; /* Adjusted top position for larger wave */
          clip-path: ellipse(
            100% 15% at 115% 100%
          ); /* Adjusted clip-path for the switched direction */
        }

        .text {
          color: ${textColor};
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
        transition={{ duration: 0.8 }}
      >
        <div className="wave-container">
          <div className="wave"></div>
          <div ref={textRef} className="text absolute font-bold left-[7%] md:left-[10%] max-w-[90%] text-[40px] xl:text-[65px] md:text-[50px]">
            {text}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default WaveComponent;
