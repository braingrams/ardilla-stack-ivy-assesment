import { useState } from "react";

interface AccordionItem {
	title: string;
	content: string;
}

export const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleIndex = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="accordion">
			{items.map((item, index) => (
				<div key={index} className="accordion-item">
					<div className="accordion-title" onClick={() => toggleIndex(index)}>
						{item.title}
						<span className="accordion-icon">
							{openIndex === index ? "-" : "+"}
						</span>
					</div>
					{openIndex === index && (
						<div className="accordion-content">{item.content}</div>
					)}
				</div>
			))}
		</div>
	);
};
