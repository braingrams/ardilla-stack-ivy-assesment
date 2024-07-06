export const SingleInterest = ({
	title,
	sub,
}: {
	title: string;
	sub: string;
}) => {
	return (
		<div className="single-interest">
			<p>{title}</p>
			<span>{sub}</span>
		</div>
	);
};
