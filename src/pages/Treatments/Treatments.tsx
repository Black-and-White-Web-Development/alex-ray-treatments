import Service from "@/components/Service";

import type { Service as ServiceType } from "@/types/services.types";

import servicesData from "@/data/treatments.json" assert { type: "json" };

import "./Treatments.scss";

const services = servicesData as ServiceType[];

const Treatments = function () {
	return (
		<section className="treatments fb-col-wrapper">
			<ul className="treatments__list">
				{services.map(service => (
					<li key={service.id} className="treatments__list-item">
						<Service service={service} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Treatments;
