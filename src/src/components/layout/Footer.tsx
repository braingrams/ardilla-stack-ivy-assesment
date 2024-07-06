import fb from "../../../assets/Facebook logo.svg";
import tw from "../../../assets/twitter logo.png";
import ln from "../../../assets/linkedin logo.png";
import ig from "../../../assets/Group 646.svg";
import {
	FooterHeader,
	FooterLink,
	FooterLinkWithIcon,
	FooterSocialIcon,
} from "../FooterComponents";

export const Footer = () => {
	const year = new Date().getFullYear();
	const socialIcon = [
		{ id: 1, url: "", img: ig },
		{ id: 2, url: "", img: fb },
		{ id: 3, url: "", img: ln },
		{ id: 4, url: "", img: tw },
	];
	return (
		<div className="footer-box">
			<div className="footer-menu">
				<div className="foot-item">
					<FooterHeader text="Products" />
					<FooterLink text="Savings" />
					<FooterLink text="Dilla" />
					<FooterLink text="Financial Coach" />
					<FooterLink text="Halal" />
					<FooterLinkWithIcon text="Budgetting" />
					<FooterLinkWithIcon text="Investment" />
					<FooterLinkWithIcon text="Insurance" />
				</div>
				<div className="foot-item">
					<FooterHeader text="Company" />
					<FooterLink text="About us" />
					<FooterLink text="Careers" />
					<FooterLink text="FAQS" />
					<FooterLink text="Press" />
				</div>
				<div className="foot-item">
					<FooterHeader text="Transparency" />
					<FooterLink text="Terms & conditions" />
					<FooterLink text="Information security policy" />
					<FooterLink text="Privacy policy" />
					<FooterLink text="Interest Tool" />
				</div>
				<div className="foot-item">
					<FooterHeader text="Developer" />
					<FooterLinkWithIcon text="Connect API" />
				</div>
				<div>
					<div className="foot-item">
						<FooterHeader text="Address" />
						<FooterLink text="33B, Ogundana street, Allen, Ikeja." />
					</div>
					<div className="foot-item">
						<FooterHeader text="Contact" />
						<FooterLink text="support@ardilla.africa" />
						<FooterLink text="(234)801 000 1234" />
					</div>
				</div>
			</div>
			<div className="copyright">
				<div className="copy-flex">
					<div className="copy-left">
						<p>© {year} Ardilla. All right reserved</p>
						<span>
							Ardilla operates under the coorperative license of Ardilla
							Multipurpose Cooperative Society, LSC 18245, We provide Savings
							and Fixed deposit services to our users
						</span>
					</div>
					<div className="copy-right">
						{socialIcon.map((item) => (
							<FooterSocialIcon img={item.img} url={item.url} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
