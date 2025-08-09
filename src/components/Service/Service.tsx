import Treatment from "../Treatment/Treatment";

import type { Service as ServiceType } from "@/types/services.types";

import "./Service.scss";

interface ServiceProps {
	service: ServiceType;
}

const Service = ({ service }: ServiceProps) => {
	return (
		<article className="service">
			<img className="service__image" src={service.image.url} alt={service.image.alt} />
			<header className="service__header">
				<h2>{service.heading}</h2>
				{service.body.map(paragraph => (
					<p key={paragraph} className="text-with-image__paragraph">
						{paragraph}
					</p>
				))}
			</header>
			<ul className="service__treatments">
				{service.treatments.map(treatment => (
					<li key={treatment.id} className="service__treatment-item">
						<Treatment treatment={treatment} />
					</li>
				))}
			</ul>
		</article>
	);
};

export default Service;
