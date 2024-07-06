export const TextTemplate = ({
	title,
	sub,
	int,
}: {
	title: string;
	sub: string;
	int?: string;
}) => {
	return (
		<div>
			<div className="top">{title}</div>
			<div className="buts">
				{sub}
				{int && <div className="int">( {int} )</div>}
			</div>
		</div>
	);
};
