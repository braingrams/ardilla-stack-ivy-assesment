export default function ColorShade(hex: string, alpha: number) {
	// Remove the hash at the start if it's there
	hex = hex.replace(/^#/, "");

	// Parse r, g, b values
	const r = parseInt(hex.substring(0, 2), 16);
	const g = parseInt(hex.substring(2, 4), 16);
	const b = parseInt(hex.substring(4, 6), 16);

	// Ensure alpha is between 0 and 1
	if (alpha < 0) alpha = 0;
	if (alpha > 1) alpha = 1;

	return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
