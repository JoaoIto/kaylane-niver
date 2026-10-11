import React from "react";
import { motion } from "framer-motion";

/**
 * WavyRibbon creates the signature delicate continuous ribbon line
 * seen in the Canva invitation design, featuring smooth flowing curves
 * and playful loops in wine color (#5B0616).
 */
export function WavyRibbon({ variant = "top", className = "" }) {
  if (variant === "bottom") {
    return (
      <div className={`relative w-full overflow-hidden pointer-events-none py-2 ${className}`}>
        <svg
          viewBox="0 0 1000 70"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-10 sm:h-14 md:h-16"
          preserveAspectRatio="none"
        >
          {/* Bottom continuous ribbon curve with loops */}
          <motion.path
            d="M -10,35 C 100,28 170,48 230,52 C 260,54 280,30 255,20 C 230,10 220,38 250,55 C 320,62 450,42 590,32 C 690,25 730,58 780,50 C 810,45 830,15 805,12 C 780,10 775,38 805,52 C 870,62 940,42 1010,30"
            stroke="#5B0616"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </svg>
      </div>
    );
  }

  // Top variant
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none py-2 ${className}`}>
      <svg
        viewBox="0 0 1000 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10 sm:h-14 md:h-16"
        preserveAspectRatio="none"
      >
        {/* Top continuous ribbon curve with loops as seen in Canva design */}
        <motion.path
          d="M -10,25 C 120,15 280,22 360,28 C 395,30 420,52 400,60 C 375,68 360,42 390,28 C 470,12 630,22 720,28 C 760,30 790,55 765,60 C 740,65 730,38 760,25 C 830,12 920,20 1010,26"
          stroke="#5B0616"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.9 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
}
