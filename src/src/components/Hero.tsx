import "../../App.css";
import { Header } from "../components/layout/Header";
import heroImg from "../../assets/phone.svg";

export const Hero = () => {
	return (
		<div className="hero">
			<Header />
			<div className="hero-text">
				<div className="main-text">Your Access To More</div>
				<div className="sub-text">
					Ardilla helps you save and invest in achieving your financial goals,
					we have the most flexible and seamless way to grow your funds.
				</div>
				<button className="rounded-btn white">Get Started</button>
			</div>
			<div className="hero-img">
				<img src={heroImg} alt="images of phone that represent what we do" />
			</div>
		</div>
	);
};
