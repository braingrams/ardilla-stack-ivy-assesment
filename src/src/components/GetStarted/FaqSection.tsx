import { Accordion } from "./Accordion";

interface AccordionItem {
	title: string;
	content: string;
}
export const FaqSection = () => {
	const accordionItems: AccordionItem[] = [
		{
			title: "What are your interest rates?",
			content: "Content for section 1.",
		},
		{
			title: "What happens to my interest when i switch to Halal?",
			content: "Content for section 2.",
		},
		{
			title: "What is the minimum interest rate I am entitled to?",
			content: "Content for section 3.",
		},
		{ title: "What is Ardilla", content: "Content for section 4." },
		{ title: "What is Ardilla", content: "Content for section 5." },
	];
	return (
		<div className="faq-box">
			<div className="faq-title">Questions We Have been Asked</div>
			<Accordion items={accordionItems} />
		</div>
	);
};
