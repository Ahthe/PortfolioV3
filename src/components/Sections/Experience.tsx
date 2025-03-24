import React, { useMemo } from "react";
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export default function Experience() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className="text-black text-sm md:text-base font-medium mb-2">
            Software Engineer - American Muslim Center Dearborn
          </p>
          <p className="text-gray-700 text-xs md:text-sm font-normal mb-4">
            Dearborn, MI, Hybrid
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm mb-2">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Expanded community reach from 800+ to potentially 1000+ members by developing an event booking website using NextJS, MongoDB, Clerk, and StripeAPI, streamlining registration and addressing social health concerns</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Created an interactive Quiz app with NextJS, Sanity.io, and MongoDB for summer school children and implemented engaging features such as leaderboards, increasing student engagement through gamified education</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-black text-sm md:text-base font-medium mb-2">
            Software Engineering Fellow - Headstarter AI
          </p>
          <p className="text-gray-700 text-xs md:text-sm font-normal mb-4">
            NY, Hybrid
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm mb-2">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Built 5+ AI apps and APIs using Python, NextJS, OpenAI, Pinecone, StripeAPI with as seen by 8000+ users</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm mb-2">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Develop projects from design to deployment leading 4+ engineering fellows using MVC design patterns</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git, and microservice patterns</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="text-black text-sm md:text-base font-medium mb-2">
            Software Engineer and Math Tutor - University of Mount Union
          </p>
          <p className="text-gray-700 text-xs md:text-sm font-normal mb-4">
            Alliance, OH
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm mb-2">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Improved grades of 90% of tutored students from failing grades of 55% to high achievers 85-90% within a semester by tutoring in Systems Programming, Data Structures, Algorithms, and Mathematics</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Analyzed and debugged code in JavaScript, Python, C#, and SQL using IDE tools and debugging techniques, while teaching key math concepts such as calculus, linear algebra, and statistics resulting in a 35% grade increase</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022 - Early 2023",
      content: (
        <div>
          <p className="text-black text-sm md:text-base font-medium mb-2">
            Software Engineer - ACBSP in VR Technologies
          </p>
          <p className="text-gray-700 text-xs md:text-sm font-normal mb-4">
            Alliance, OH - Startup
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm mb-2">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Tasked with creating a VR action game in Unity to study psychological behavior, improving research studies</span>
            </div>
            <div className="flex gap-2 items-start text-gray-700 text-xs md:text-sm">
              <span className="min-w-[12px] mt-1">•</span>
              <span>Constructed a VR action game in Unity using C# and Oculus SDK, targeting the prefrontal cortex to reduce user stress and anxiety by 30%, through strategic object dismemberment scenarios</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Education",
      content: (
        <div>
          <p className="text-black text-sm md:text-base font-medium mb-2">
            University Of Mount Union
          </p>
          <p className="text-gray-700 text-xs md:text-sm font-normal mb-4">
            Alliance, OH
          </p>
          <p className="text-gray-700 text-xs md:text-sm">
            Bachelor of Science in Computer Science &apos;— Dean&apos;s List
          </p>
          <p className="text-gray-700 text-xs md:text-sm mb-4">
            Graduated May 2024
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="max-w-5xl mx-auto w-full pt-48 pb-24 px-[20px] bg-white">
      <h1 className="text-5xl md:text-7xl font-sans font-extralight text-black mb-4 tracking-[-0.02em]">
        Experience
      </h1>
      <p className="text-lg font-sans font-light leading-snug text-black max-w-[640px] text-wrap-pretty">
        My professional journey as a software engineer
      </p>
      
      <div className="w-full mt-12">
        <Timeline data={data} />
      </div>
    </div>
  );
}
