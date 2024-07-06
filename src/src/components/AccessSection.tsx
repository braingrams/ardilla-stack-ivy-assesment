import { Dib } from "./icons/Dib";
import { DreamsIcon } from "./icons/DreamsIcon";
import { Grits } from "./icons/Grits";
import { SendIcon } from "./icons/SendIcon";
import { VaultIcon } from "./icons/VaultIcon";
import { SingleAccess } from "./SingleAccess";

export const AccessSection = () => {
	return (
		<div className="access-section">
			<div>
				<div className="access-text">Access More With Your Money</div>
				<div className="access-sub">
					Earn, learn, parlay, and grow financially. With Ardilla, you have more
					opportunities than ever at your finger tips. Why not take advantage
					today?
				</div>
				<div className="access-btn">
					<span>Learn more about savings</span>
					<div className="btn-icon">
						<SendIcon width="14px" height="14px" />
					</div>
				</div>
			</div>
			<div className="access-inner">
				<div className="access-grid">
					<SingleAccess
						icon={<Dib />}
						sub="Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund."
						title="DIB"
						bgColor="#EAB308"
					/>
					<SingleAccess
						icon={<DreamsIcon />}
						sub="Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well."
						title="Dreams "
						bgColor="#E8356D"
					/>
					<SingleAccess
						icon={<VaultIcon />}
						sub="Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to."
						title="Vault "
						bgColor="#8807F7"
					/>
					<SingleAccess
						icon={<Grits />}
						sub="Become a VIP when you save more money with us. Enjoy better benefits."
						title="Grit "
						bgColor="#22C55E"
					/>
				</div>
			</div>
		</div>
	);
};
