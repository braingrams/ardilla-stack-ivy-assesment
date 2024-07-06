import { ReactNode } from "react";

interface IPageComp {
	icon: ReactNode;
	title: string;
	sub: string;
	btnText?: string;
	bgColor: string;
}
export const SingleAccess = ({
	icon,
	title,
	sub,
	btnText = "Learn More",
	bgColor,
}: IPageComp) => {
	return (
		<div className="single-access">
			<div
				className="imgs"
				style={{
					backgroundColor: bgColor,
					filter: `drop-shadow(0 20px 1.5em ${bgColor}aa)`,
				}}
			>
				{icon}
			</div>
			<div className="single-access-text">
				<div className="title">{title}</div>
				<div className="sub">{sub}</div>
				<div className="btn-text">{btnText}</div>
			</div>
		</div>
	);
};
