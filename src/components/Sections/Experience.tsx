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
    <section className="w-full min-h-screen relative">
      <div className="relative flex flex-col items-start justify-start py-24 w-full min-h-screen text-black px-[20px]">
        <div className="max-w-5xl mx-auto w-full">
          <h1 className="text-5xl md:text-7xl font-sans font-extralight text-gray-700 mb-4 tracking-[-0.02em]">
            Experience
          </h1>
          <p className="text-lg font-sans font-light leading-snug text-gray-700">
            My professional journey as a software engineer.
          </p>
          <div className="w-full mt-12">
            <Timeline data={data} />
          </div>
        </div>
      </div>
    </section>
  );
}


// "use client";

// import React, { useState } from "react";
// import ExperienceItem from "../ui/ExperienceItem"; // Import the new component

// export default function Experience() {
// 	// Keep your data definition here
// 	const experienceItems = [
// 		{
// 			id: "0",
// 			title: "2024 - Present",
// 			subTitle: "Software Engineer - American Muslim Center Dearborn",
// 			location: "Dearborn, MI, Hybrid",
// 			details: [
// 				"Expanded community reach from 800+ to potentially 1000+ members by developing an event booking website using NextJS, MongoDB, Clerk, and StripeAPI, streamlining registration and addressing social health concerns",
// 				"Created an interactive Quiz app with NextJS, Sanity.io, and MongoDB for summer school children and implemented engaging features such as leaderboards, increasing student engagement through gamified education",
// 			],
// 		},
// 		{
// 			id: "1",
// 			title: "2024",
// 			subTitle: "Software Engineering Fellow - Headstarter AI",
// 			location: "NY, Hybrid",
// 			details: [
// 				"Built 5+ AI apps and APIs using Python, NextJS, OpenAI, Pinecone, StripeAPI with as seen by 8000+ users",
// 				"Develop projects from design to deployment leading 4+ engineering fellows using MVC design patterns",
// 				"Coached by Amazon, Bloomberg and Capital One engineers on Agile, CI/CD, Git, and microservice patterns",
// 			],
// 		},
// 		{
// 			id: "2",
// 			title: "2023",
// 			subTitle: "Software Engineer and Math Tutor - University of Mount Union",
// 			location: "Alliance, OH",
// 			details: [
// 				"Improved grades of 90% of tutored students from failing grades of 55% to high achievers 85-90% within a semester by tutoring in Systems Programming, Data Structures, Algorithms, and Mathematics",
// 				"Analyzed and debugged code in JavaScript, Python, C#, and SQL using IDE tools and debugging techniques, while teaching key math concepts such as calculus, linear algebra, and statistics resulting in a 35% grade increase",
// 			],
// 		},
// 		{
// 			id: "3",
// 			title: "2022 - Early 2023",
// 			subTitle: "Software Engineer - ACBSP in VR Technologies",
// 			location: "Alliance, OH - Startup",
// 			details: [
// 				"Tasked with creating a VR action game in Unity to study psychological behavior, improving research studies",
// 				"Constructed a VR action game in Unity using C# and Oculus SDK, targeting the prefrontal cortex to reduce user stress and anxiety by 30%, through strategic object dismemberment scenarios",
// 			],
// 		},
// 		{
// 			id: "4",
// 			title: "Education",
// 			subTitle: "University Of Mount Union",
// 			location: "Alliance, OH",
// 			details: [
// 				"Bachelor of Science in Computer Science '— Dean's List",
// 				"Graduated May 2024",
// 			],
// 		},
// 	];

// 	return (
// 		<section className="w-full min-h-screen relative bg-gray-100">
// 			<div className="relative flex flex-col items-start justify-start py-24 w-full min-h-screen text-black px-[20px]">
// 				<div className="max-w-5xl mx-auto w-full">
// 					{/* Heading and Paragraph remain */}
// 					<h1 className="text-5xl md:text-7xl font-sans font-extralight text-gray-700 mb-4 tracking-[-0.02em]">
// 						Experience
// 					</h1>
// 					<p className="text-lg font-sans font-light leading-snug pb-12 text-gray-700">
// 						My professional journey as a software engineer.
// 					</p>

// 					{/* Accordion Container */}
// 					<div className="w-full flex flex-col border-t border-black/20">
// 						{/* Map over data and render ExperienceItem */}
// 						{experienceItems.map((item) => (
// 							<ExperienceItem
// 								key={item.id}
// 								// item={item}
// 								// isActive={activeAccordion === item.id}
// 								// onToggle={toggleAccordion}
// 							/>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }