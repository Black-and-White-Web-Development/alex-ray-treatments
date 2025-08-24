import "./Treatment.scss";

import type { Treatment as TreatmentType } from "@/types/treatment.types";

import { formatMoney } from "@/util/formatMoney";
import { formatTime } from "@/util/formatTime";

interface TreatmentProps {
	treatment: TreatmentType;
}

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
