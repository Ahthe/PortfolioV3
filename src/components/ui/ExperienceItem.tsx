// "use client";
// import { useState } from "react";
// import TextHover from "./TextHover";
// import { experienceItems } from "../Sections/Experience";
// import { motion, AnimatePresence } from "framer-motion";

// // Define the structure of the 'item' prop
// interface ExperienceItemData {
// 	id: string;
// 	title: string;
// 	subTitle: string;
// 	location: string; // Assuming location is part of the data
// 	details: string[]; // Assuming details is part of the data
// 	para?: string; // Add para if it's part of the data structure
// }

// export default function Process() {
// 	const [activeAccordion, setActiveAccordion] = useState<string | null>(
// 		experienceItems[0]?.id || null,
// 	);

// 	const toggleAccordion = (itemId: string) => {
// 		if (activeAccordion === itemId) {
// 			setActiveAccordion(null);
// 		} else {
// 			setActiveAccordion(itemId);
// 		}
// 	};

// 	return (
// 		<section
// 			className="w-full my-[100px]"
// 			id="process">
// 			<div className="flex sm:flex-col lg:items-center gap-x-[20px] border-b border-[#8D8D8D] px-[50px]">
// 				<h1 className="text-[#202020] uppercase leading-none sm:text-[80px] md:text-[100px] text-[100px] font-bold tracking-tight overflow-hidden">
// 					{"process".split("").map((item: string, i: number) => (
// 						<motion.span
// 							initial={{ y: "100%" }}
// 							whileInView={{ y: 0 }}
// 							viewport={{ once: true }}
// 							transition={{
// 								delay: i * 0.1,
// 								duration: 0.5,
// 								ease: [0.4, 0, 0.2, 1],
// 							}}
// 							className="inline-block"
// 							key={i}>
// 							{item}
// 						</motion.span>
// 					))}
// 				</h1>
// 			</div>
// 			<div className="w-full items-end flex py-[50px] flex-col px-[50px]">
// 				{experienceItems.map((item) => (
// 					<div
// 						key={item.id}
// 						className="sm:w-full w-[60%] flex-col flex py-[15px] border-b border-black">
// 						<div
// 							className="flex items-center justify-between transition-all duration-500 ease-in-out cursor-pointer"
// 							onClick={() => toggleAccordion(item.id)}>
// 							<div className="flex gap-x-[40px] items-center">
// 								<TextHover
// 									titile1="0"
// 									subTitle1={item.id}
// 									titile2={item.title}
// 									subTitle2={item.subTitle}
// 								/>
// 							</div>
// 							<button className="text-[50px]">
// 								{activeAccordion === item.id ? "-" : "+"}
// 							</button>
// 						</div>
// 						<AnimatePresence>
// 							{activeAccordion === item.id && (
// 								<motion.div
// 									initial={{ opacity: 0, height: 0 }}
// 									animate={{ opacity: 1, height: "auto" }}
// 									exit={{ opacity: 0, height: 0 }}
// 									transition={{
// 										ease: "anticipate",
// 										duration: 1,
// 										type: "tween",
// 									}}>
// 									<p className="text-[22px] mb-[10px]">{item.para}</p>
// 								</motion.div>
// 							)}
// 						</AnimatePresence>
// 					</div>
// 				))}
// 			</div>
// 		</section>
// 	);
// }
