// import React from "react";
// import Image from "next/image";
// import { twMerge } from "tailwind-merge";

// export const Skills = () => {
//   const stack = [
//     {
//       title: "Next.js",
//       src: "/images/logos/next.png",

//       className: "h-10 w-14",
//     },
//     {
//       title: "AWS",
//       src: "/images/logos/aws.webp",

//       className: "h-10 w-10",
//     },
//     {
//       title: "Figma",
//       src: "/images/logos/figma.png",

//       className: "h-10 w-8",
//     },
//     {
//       title: "Framer Motion",
//       src: "/images/logos/framer.webp",

//       className: "h-10 w-10",
//     },
//     {
//       title: "Node",
//       src: "/images/logos/node.png",

//       className: "h-10 w-12",
//     },
//     {
//       title: "Tailwind",
//       src: "/images/logos/tailwind.png",

//       className: "h-10 w-24",
//     },
//     {
//       title: "Vercel",
//       src: "/images/logos/vercel.png",

//       className: "h-10 w-24",
//     },
//   ];
//   return (
//     <section className="w-full min-h-screen relative">
//       <div className="relative flex flex-col items-start justify-start py-24 w-full min-h-screen text-black px-[20px]">
//         <div className="max-w-5xl mx-auto w-full">
//           <h1 className="text-5xl md:text-7xl font-sans font-extralight text-gray-700 mb-4 tracking-[-0.02em]">
//             Skills
//           </h1>
//           <p className="text-lg font-sans font-light leading-snug pb-12 text-gray-700">
//             Everything I have worked on.
//           </p>
//           <div className="flex flex-wrap">
//             {stack.map((item) => (
//               <Image
//                 src={item.src}
//                 key={item.src}
//                 width={200}
//                 height={200}
//                 alt={item.title}
//                 className={twMerge("object-contain mr-4 mb-4", item.className)}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
"use client"; // Required for framer-motion hooks

import React from "react";
import { motion } from "framer-motion"; // Import motion
import SkillItem from "../ui/SkillItem"; // Import the new component

// Import necessary icons from react-icons
import { FaNodeJs, FaFigma, FaAws } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVercel } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export const Skills = () => {
  // Update the stack to use Icon components
  const stack = [
    {
      id: 1,
      title: "Next.js",
      Icon: SiNextdotjs,
    },
    {
      id: 2,
      title: "AWS",
      Icon: FaAws,
    },
    {
      id: 3,
      title: "Figma",
      Icon: FaFigma,
    },
    {
      id: 4,
      title: "Framer Motion",
      Icon: TbBrandFramerMotion,
    },
    {
      id: 5,
      title: "Node",
      Icon: FaNodeJs,
    },
    {
      id: 6,
      title: "Tailwind",
      Icon: SiTailwindcss,
    },
    {
      id: 7,
      title: "Vercel",
      Icon: SiVercel,
    },
    // Add more skills as needed
  ];

  return (
    // Keep your outer section structure if desired
    <section className="w-full min-h-screen relative">
      <div className="relative flex flex-col items-start justify-start py-24 w-full min-h-screen text-black px-[20px]">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-sans font-extralight text-gray-700 mb-4 tracking-[-0.02em]">
            MY SKILLS
          </h1>
          <p className="text-lg font-sans font-light leading-snug pb-12 text-gray-700">
            Everything I have worked on.
          </p>

          {/* Grid layout for skills */}
          <div className="w-full">
            {/* Adjust grid-cols-* for responsiveness and desired layout */}
            <div className="w-full border-t border-l border-black/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {stack.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }} // Initial animation state
                  whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
                  viewport={{ once: true }} // Animate only once
                  className="w-full border-b border-r border-black/10" // Add borders to each cell
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.05, // Stagger animation
                  }}
                >
                  {/* Render the SkillItem component */}
                  <SkillItem Icon={item.Icon} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};