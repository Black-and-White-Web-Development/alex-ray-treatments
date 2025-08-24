export const formatMoney = (value: number): string => {
	const number = typeof value === "string" ? parseFloat(value) : value;

	if (isNaN(number)) return "£0.00";

	return new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(number);
};
