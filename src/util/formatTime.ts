export const formatTime = (minutes: number): string => {
	const parts = [
		{ value: Math.floor(minutes / 60), unit: "hour" },
		{ value: minutes % 60, unit: "minute" },
	];

	return (
		parts.reduce((result, part, index) => {
			if (part.value > 0) {
				if (result) {
					result += index === 1 ? " and " : " ";
				}
				result += part.value === 1 ? `1 ${part.unit}` : `${part.value} ${part.unit}s`;
			}
			return result;
		}, "") || "0 minutes"
	);
};
