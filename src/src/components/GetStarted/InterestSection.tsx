import { SingleInterest } from "./SingleInterest";

export const InterestSection = () => {
	return (
		<div className="interest-section">
			<div className="title-text">Interest you can count on</div>
			<div className="interest-group">
				<div className="interest-box">
					<div className="draw-line" />
					<SingleInterest
						title="More Interest"
						sub="Enjoy better interest rates than the average bank account when you save with any of the Ardilla savings plan."
					/>
					<SingleInterest
						title="Transparency"
						sub="No hidden charges and no vague deductions. Save with Ardilla and get your full interests."
					/>
				</div>
				<div className="interest-box">
					<div className="draw-line" />
					<SingleInterest
						title="Values"
						sub="Your values matter to us and we are 100% committed to upholding those. Whether it is with Halal or the Ardilla savings plans."
					/>
					<SingleInterest
						title="Complete Withdraws"
						sub="Withdraw your entire savings+ interest upon maturity. No minimum balance."
					/>
				</div>
			</div>
		</div>
	);
};
