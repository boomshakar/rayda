export const roundNumFormat = (num: number, decimals: number) =>
	num.toLocaleString("en-US", {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
