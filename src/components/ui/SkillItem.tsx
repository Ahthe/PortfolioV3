// "use client";

// import { IconType } from "react-icons";
// import React, { MouseEvent } from "react";
// import { useAnimate } from "framer-motion";

// // Constants for clip-path animations
// const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
// const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)"; // Initial state (mostly hidden)
// const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
// const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
// const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";

// type Side = "top" | "left" | "bottom" | "right";
// type KeyframeMap = {
// 	[key in Side]: string[];
// };

// // Animation keyframes for mouse entering from different sides
// const ENTRANCE_KEYFRAMES: KeyframeMap = {
// 	left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
// 	bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
// 	top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
// 	right: [TOP_LEFT_CLIP, NO_CLIP],
// };

// // Animation keyframes for mouse leaving towards different sides
// const EXIT_KEYFRAMES: KeyframeMap = {
// 	left: [NO_CLIP, TOP_RIGHT_CLIP],
// 	bottom: [NO_CLIP, TOP_RIGHT_CLIP],
// 	top: [NO_CLIP, TOP_RIGHT_CLIP],
// 	right: [NO_CLIP, BOTTOM_LEFT_CLIP],
// };

// // The actual Skill Item component
// export default function SkillItem({ Icon }: { Icon: IconType }) {
// 	const [scope, animate] = useAnimate(); // Hook for animation

// 	// Calculates the nearest side of the box to the mouse cursor
// 	const getNearestSide = (e: MouseEvent) => {
// 		const box = (e.target as HTMLElement).getBoundingClientRect();

// 		const proximityToLeft = {
// 			proximity: Math.abs(box.left - e.clientX),
// 			side: "left" as Side,
// 		};
// 		const proximityToRight = {
// 			proximity: Math.abs(box.right - e.clientX),
// 			side: "right" as Side,
// 		};
// 		const proximityToTop = {
// 			proximity: Math.abs(box.top - e.clientY),
// 			side: "top" as Side,
// 		};
// 		const proximityToBottom = {
// 			proximity: Math.abs(box.bottom - e.clientY),
// 			side: "bottom" as Side,
// 		};

// 		// Sort sides by proximity to find the nearest one
// 		const sortedProximity = [
// 			proximityToLeft,
// 			proximityToRight,
// 			proximityToTop,
// 			proximityToBottom,
// 		].sort((a, b) => a.proximity - b.proximity);

// 		return sortedProximity[0].side;
// 	};

// 	// Handles mouse enter event
// 	const handleMouseEnter = (e: MouseEvent) => {
// 		const side = getNearestSide(e);
// 		// Animate the clipPath to reveal the colored background
// 		animate(scope.current, {
// 			clipPath: ENTRANCE_KEYFRAMES[side],
// 		});
// 	};

// 	// Handles mouse leave event
// 	const handleMouseLeave = (e: MouseEvent) => {
// 		const side = getNearestSide(e);
// 		// Animate the clipPath to hide the colored background
// 		animate(scope.current, {
// 			clipPath: EXIT_KEYFRAMES[side],
// 		});
// 	};

// 	return (
// 		<div
// 			onMouseEnter={handleMouseEnter}
// 			onMouseLeave={handleMouseLeave}
// 			// Container for the skill item - adjust size (h- and w-) as needed
// 			className="relative flex items-center justify-center h-[200px] w-full bg-white group">
// 			{/* Default visible icon - adjust size (text-) as needed */}
// 			<Icon className="text-[60px] text-gray-400 transition-colors duration-300 group-hover:text-gray-700" />

// 			{/* Absolutely positioned div for the hover effect */}
// 			<div
// 				ref={scope}
// 				style={{
// 					clipPath: BOTTOM_RIGHT_CLIP, // Start clipped
// 				}}
// 				// Background color and text color for the hover state
// 				className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-white">
// 				{/* Icon inside the hover effect div - adjust size (text-) as needed */}
// 				<Icon className="text-[60px]" />
// 			</div>
// 		</div>
// 	);
// }

"use client";

import { IconType } from "react-icons";
import React, { MouseEvent } from "react";
import { useAnimate } from "framer-motion";
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";

type Side = "top" | "left" | "bottom" | "right";
type KeyframeMap = {
	[key in Side]: string[];
};

const ENTRANCE_KEYFRAMES: KeyframeMap = {
	left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
	right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES: KeyframeMap = {
	left: [NO_CLIP, TOP_RIGHT_CLIP],
	bottom: [NO_CLIP, TOP_RIGHT_CLIP],
	top: [NO_CLIP, TOP_RIGHT_CLIP],
	right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

export default function LinkBox({ Icon }: { Icon: IconType }) {
	const [scope, animate] = useAnimate();

	const getNearestSide = (e: MouseEvent) => {
		const box = (e.target as HTMLElement).getBoundingClientRect();

		const proximityToLeft = {
			proximity: Math.abs(box.left - e.clientX),
			side: "left" as Side,
		};
		const proximityToRight = {
			proximity: Math.abs(box.right - e.clientX),
			side: "right" as Side,
		};
		const proximityToTop = {
			proximity: Math.abs(box.top - e.clientY),
			side: "top" as Side,
		};
		const proximityToBottom = {
			proximity: Math.abs(box.bottom - e.clientY),
			side: "bottom" as Side,
		};

		const sortedProximity = [
			proximityToLeft,
			proximityToRight,
			proximityToTop,
			proximityToBottom,
		].sort((a, b) => a.proximity - b.proximity);

		return sortedProximity[0].side;
	};

	const handleMouseEnter = (e: MouseEvent) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: ENTRANCE_KEYFRAMES[side],
		});
	};

	const handleMouseLeave = (e: MouseEvent) => {
		const side = getNearestSide(e);

		animate(scope.current, {
			clipPath: EXIT_KEYFRAMES[side],
		});
	};

	return (
		<div
			onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
				handleMouseEnter(e);
			}}
			onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
				handleMouseLeave(e);
			}}
			className="relative flex items-center justify-center h-[300px] w-full">
			<Icon className="text-[80px]" />
			<div
				ref={scope}
				style={{
					clipPath: BOTTOM_RIGHT_CLIP,
				}}
				className="absolute inset-0 flex items-center justify-center bg-neutral-900 text-white">
				<Icon className="text-[80px]" />
			</div>
		</div>
	);
}
