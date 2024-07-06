import { ChangeEvent, useState } from "react";
import { HeaderTwo } from "../layout/HeaderTwo";
import { PrimaryInput, PrimarySelect } from "./PrimaryInput";
import { TextTemplate } from "./TextTemplate";
import Naira from "../helper/Naira";
import graph from "../../../assets/Vector 166.png";
import calculateFraction from "../helper/CalculateFractionPercentage";

export const MainHero = () => {
	const [formData, setFormData] = useState({
		freq: "monthly",
		amount: "0",
		duration: "0",
	});
	const isError = {
		freq: !formData?.freq,
		amount: !formData?.amount,
		duration: !formData?.duration,
	};
	const errors = Object.entries(isError)
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		.filter(([_, value]) => value)
		.map(([key]) => key);

	console.log({ errors });

	const handleChange =
		(key: string) => (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			setFormData({ ...formData, [key]: e.target.value });
		};
	const totalAmount = Number(formData.amount) * Number(formData?.duration);
	const interest = calculateFraction(totalAmount, 2);
	const balance = totalAmount + interest;
	return (
		<div className="main-hero">
			<HeaderTwo />
			<div className="interest-form-section">
				<div className="left-interest">
					<div className="tops">Calculate Your Interests</div>
					<form>
						<div className="form-fields">
							<PrimarySelect
								errors={errors}
								label="How often are you saving?"
								onChange={handleChange("freq")}
								id={"freq"}
							>
								<option value={"monthly"}>Monthly</option>
							</PrimarySelect>
							<PrimaryInput
								errors={errors}
								label="How much are you saving?"
								onChange={handleChange("amount")}
								id={"amount"}
							/>
							<PrimaryInput
								errors={errors}
								label="How long are you saving for? (In months)"
								onChange={handleChange("duration")}
								id={"duration"}
								// type="number"
							/>
						</div>
					</form>
				</div>
				<div className="right-interest">
					<div className="right-box">
						<div className="right-inn">
							<TextTemplate title="Total Balance" sub={Naira(balance)} />
							<div className="note">
								Saving <span>{formData.amount}</span> monthly for{" "}
								{formData.duration} months will result in a balance of{" "}
								<span>{balance}</span>
							</div>
							<TextTemplate title="Interest" sub={Naira(interest)} int="2%" />
							<TextTemplate
								title="Total savings"
								sub={Naira(totalAmount)}
								int="2%"
							/>
							<div className="bottom">
								<div className="img-graph">
									<img src={graph} alt="Graph" />
								</div>
								<div className="dates">
									<span className="left">Jan, 2023</span>
									<span className="right">Mar, 2023</span>
								</div>
								<button className="rounded-btn">Start Saving Now</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
