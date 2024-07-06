import { CarouselWithImage } from "./CarouselItem";
import finTool from "../../assets/Image with back.png";
import invest from "../../assets/image with back (1).png";
import save from "../../assets/image with back (2).png";
import join from "../../assets/image with back (3).png";
import coach from "../../assets/image with back (4).png";
import build from "../../assets/Image with back (5).png";
import guide from "../../assets/image with back (6).png";
import sans from "../../assets/image with back (7).png";
import { useEffect, useRef, useState } from "react";
import { AngleLeft } from "./icons/AngleLeft";
import { AngleRight } from "./icons/AngleRight";

export const ExpectSection = () => {
	const expectArray = [
		{ id: 1, title: "Access to more <br/> financial tools", img: finTool },
		{ id: 1, title: "More investment <br/> opportunities", img: invest },
		{ id: 1, title: "More <br/> Savings", img: save },
		{
			id: 1,
			title: "Join a passionate <br/> wealth building <br/> community",
			img: join,
		},
		{
			id: 1,
			title: "Free financial advice <br/> from vetted financial <br/> coaches",
			img: coach,
		},
		{
			id: 1,
			title: "Build wealth without <br/> compromising your <br/> belief",
			img: build,
		},
		{ id: 1, title: "Pro budgeting <br/> guide", img: guide },
		{ id: 1, title: "Get your <br/> unique San ID", img: sans },
	];
	const scrollRef = useRef<HTMLDivElement>(null);
	const [showLeftArrow, setShowLeftArrow] = useState(false);
	const [showRightArrow, setShowRightArrow] = useState(false);
	const handleScroll = () => {
		if (scrollRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
			setShowLeftArrow(scrollLeft > 0);
			setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
		}
	};
	const scrollAmount = 200;
	const scrollCarousel = (dir: "left" | "right") => {
		if (dir == "left") {
			scrollRef?.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
		}
		if (dir == "right") {
			scrollRef?.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
		}
	};

	useEffect(() => {
		const container = scrollRef.current;
		if (container) {
			container.addEventListener("scroll", handleScroll);
			handleScroll();
			return () => {
				container.removeEventListener("scroll", handleScroll);
			};
		}
	}, []);
	return (
		<div className="expect-section">
			<div className="expect-wrapper">
				<div className="what-to-expect">
					<p>What you can expect</p>
					<div className="circle sm"></div>
					<div className="circle md"></div>
				</div>
				<div className="expect-carousel" ref={scrollRef}>
					{expectArray?.map((item) => (
						<CarouselWithImage
							img={item.img}
							text={item.title}
							key={item.id}
							style={item.img == build ? "green" : ""}
						/>
					))}
				</div>
				<div className="dir-arrows">
					<div>
						{showLeftArrow && (
							<div
								className="left-arrow"
								onClick={() => scrollCarousel("left")}
							>
								<AngleLeft height="24px" width="24px" />
							</div>
						)}
					</div>
					<div>
						{showRightArrow && (
							<div
								className="right-arrow"
								onClick={() => scrollCarousel("right")}
							>
								<AngleRight height="24px" width="24px" />
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
