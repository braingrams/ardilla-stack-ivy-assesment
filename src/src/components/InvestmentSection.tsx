import arrowImg from "../../assets/arrow-large.png";
import { SendIcon } from "./icons/SendIcon";
export const InvestmentSection = () => {
	return (
		<div className="invest-wrapper">
			<div className="invest-content">
				<div className="invest-text">
					Unlimited <span>Investment Opportunities</span>{" "}
				</div>
				<div className="invest-sub">
					Plan towards your future by investing with ardilla, Grow your money
					confidently and securely with the available investment oppurtuinities{" "}
				</div>
				<div className="invest-btn">
					<span>Invest with ardilla (Coming Soon)</span>
					<div className="btn-icon">
						<SendIcon width="14px" height="14px" />
					</div>
				</div>
			</div>
			<div className="invest-img">
				<img src={arrowImg} alt="arrow of growth" />
			</div>
		</div>
	);
};
