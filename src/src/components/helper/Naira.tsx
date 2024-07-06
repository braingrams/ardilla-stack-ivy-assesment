export default function Naira(value: string | null | undefined | number) {
	return `N${value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
}
