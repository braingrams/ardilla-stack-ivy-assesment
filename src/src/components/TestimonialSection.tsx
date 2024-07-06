import { PlayIcon } from "./icons/PlayIcon";
import firstImg from "../../assets/pexels-nappy-936054 1.png";
import secondImg from "../../assets/pexels-andrea-piacquadio-3769021 1.png";
import thirdImg from "../../assets/pexels-spencer-selover-428333 1.png";

export const TestimonialSection = () => {
	const testimonialItem = [
		{
			id: 1,
			name: "MD - Miss Oyinye Dallas",
			sub: "What is Ardila and it benefits?",
			img: firstImg,
		},
		{
			id: 2,
			name: "SM - Olu John",
			sub: "What is Ardila and it benefits?",
			img: secondImg,
		},
		{
			id: 3,
			name: "MD - Azeez Taiwo",
			sub: "What is Ardila and it benefits?",
			img: thirdImg,
		},
	];
	return (
		<div className="test-section">
			<div className="test-head">
				<div className="invest-text">
					Don’t Take Our <span style={{ color: "#E8356D" }}>Word</span> For It
				</div>
				<div className="test-sub">
					Listen to testimonials from Ardilla users building wealth
				</div>
			</div>
			<div className="test-item-wrapper">
				{testimonialItem?.map((item) => (
					<div
						className="test-box"
						style={{ backgroundImage: `url('${item.img}')` }}
						key={item.id}
					>
						<PlayIcon className="icon" />
						<div className="test-item">
							<p>{item.name}</p>
							<span>{item.sub}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
