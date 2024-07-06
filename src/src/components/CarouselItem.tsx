interface ICarouselItem {
	text: string;
	img: string;
	style?: string;
}
export const CarouselItem = ({ text, img, style }: ICarouselItem) => {
	return (
		<div className={`carousel-item ${style}`}>
			<p dangerouslySetInnerHTML={{ __html: text }} />
			<img src={img} alt={text} />
		</div>
	);
};
export const CarouselWithImage = ({ text, img, style }: ICarouselItem) => {
	return (
		<div
			className={`carousel-item ${style}`}
			style={{
				backgroundImage: `url('${img}')`,
			}}
		>
			<p dangerouslySetInnerHTML={{ __html: text }} />
		</div>
	);
};
