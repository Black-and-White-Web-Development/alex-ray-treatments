import "./Treatment.scss";

import type { Treatment as TreatmentType } from "@/types/treatment.types";

interface TreatmentProps {
	treatment: TreatmentType;
}

const Treatment = ({ treatment }: TreatmentProps) => {
	return (
		<article className="treatment">
			<header className="treatment__header">
				<h3 className="treatment__heading">{treatment.name}</h3>
			</header>
			<dl className="treatment__details">
				<div className="treatment__description-item">
					<dt className="treatment__term">Duration</dt>
					<dd className="treatment__details">{treatment.duration}</dd>
				</div>
				<div className="treatment__description-item">
					<dt className="treatment__term">Price</dt>
					<dd className="treatment__details">{treatment.price}</dd>
				</div>
			</dl>
		</article>
	);
};

export default Treatment;
