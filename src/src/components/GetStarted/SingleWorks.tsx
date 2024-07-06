import ColorShade from "../helper/ColorShade";

interface ISingleWorks {
	color: string;
	img: string;
	desc: string;
	num: string;
}

export const SingleWorks = ({ color, img, desc, num }: ISingleWorks) => {
	return (
		<div
			className="single-works"
			style={{ backgroundColor: ColorShade(color, 0.06) }}
		>
			<div className="top">
				<div className="num" style={{ backgroundColor: `${color}` }}>
					{num}
				</div>
				<div className="desc">{desc}</div>
			</div>
			<div className="img" style={{ border: `5px solid ${color}` }}>
				<img src={img} alt={desc} />
			</div>
		</div>
	);
};
