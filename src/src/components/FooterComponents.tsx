export const FooterHeader = ({ text }: { text: string }) => {
	return <div className="foot-head-text">{text}</div>;
};
export const FooterLink = ({ text, url }: { text: string; url?: string }) => {
	return (
		<div className="foot-head-link">
			<a href={url}>{text}</a>
		</div>
	);
};
export const FooterLinkWithIcon = ({ text }: { text: string }) => {
	return (
		<div className="foot-head-link-with-btn">
			<span>{text}</span> <div className="soon">Coming soon</div>
		</div>
	);
};
export const FooterSocialIcon = ({
	url,
	img,
}: {
	url: string;
	img: string;
}) => {
	return (
		<div className="foot-head-text">
			<a href={url}>
				<img src={img} alt={img} />
			</a>
		</div>
	);
};
