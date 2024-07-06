import { SingleWorks } from "./SingleWorks";
import mobileA from "../../../assets/mobile.png";
import mobileB from "../../../assets/mobile (1).png";
import mobileC from "../../../assets/mobile (2).png";

export const HowItWorks = () => {
	const worksItem = [
		{ color: "#E8356D", img: mobileA, desc: "Create a plan", num: "1" },
		{
			color: "#8807F7",
			img: mobileB,
			desc: "Set your target amount",
			num: "2",
		},
		{ color: "#2563EB", img: mobileC, desc: "Get Your interest", num: "3" },
	];
	return (
		<div className="works-wrapper">
			<div className="title-text">How It Works</div>
			<div className="works-grid">
				{worksItem?.map((item) => (
					<SingleWorks
						color={item.color}
						desc={item.desc}
						img={item.img}
						num={item.num}
						key={item.num}
					/>
				))}
			</div>
		</div>
	);
};
