import innerimage from "../../assets/image 53.png";

export const FooterBanner = () => {
	return (
		<div className="footer-banner-wrapper">
			<div className="white-bg" />
			<div className="dark-bg" />
			<div className="inner-banner-wrapper">
				<div className="inner-banner">
					<div className="inner-text">
						<span>Download for free Start saving Today</span>
						<button className="banner-btn">Download for free</button>
					</div>
					<div className="inner-img">
						<img src={innerimage} alt="Image of phone" />
					</div>
				</div>
			</div>
		</div>
	);
};
