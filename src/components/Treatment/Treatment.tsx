import "./Treatment.scss";

import type { Treatment as TreatmentType } from "@/types/treatment.types";

interface TreatmentProps {
	treatment: TreatmentType;
}

const formatMoney = (value: number): string => {
	const number = typeof value === "string" ? parseFloat(value) : value;

	if (isNaN(number)) return "£0.00";

	return new Intl.NumberFormat("en-GB", {
		style: "currency",
		currency: "GBP",
	}).format(number);
};

const formatTime = (minutes: number): string => {
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

const Treatment = ({ treatment }: TreatmentProps) => {
	return (
		<article className="treatment">
			<header className="treatment__header">
				<h4 className="treatment__heading">{treatment.name}</h4>
			</header>
			<dl className="treatment__description-list">
				<div className="treatment__description-list-item">
					<dt className="treatment__term">Duration</dt>
					<dd className="treatment__details">{formatTime(treatment.duration)}</dd>
				</div>
				<div className="treatment__description-list-item">
					<dt className="treatment__term">Price</dt>
					<dd className="treatment__details">{formatMoney(treatment.price)}</dd>
				</div>
			</dl>
			{treatment.description && (
				<div className="treatment__description">
					{treatment.description.map(paragraph => (
						<p key={paragraph} className="treatment__paragraph">
							{paragraph}
						</p>
					))}
				</div>
			)}
		</article>
	);
};

export default Treatment;
