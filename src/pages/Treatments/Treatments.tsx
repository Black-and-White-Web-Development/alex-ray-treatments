import { usePageTitle } from "@/hooks/usePageTitle";

import Service from "@/components/Service";

import type { Service as ServiceType } from "@/types/services.types";

import servicesData from "@/data/treatments.json" assert { type: "json" };
import { strToKebabCase } from "@/util/strToKebabCase";

import "./Treatments.scss";

const services = servicesData as ServiceType[];

const Treatments = function () {
	usePageTitle("Treatments");

	return (
		<section className="treatments">
			<ul className="treatments__list">
				{services.map(service => (
					<li
						key={service.id}
						id={strToKebabCase(String(service.heading))}
						className="treatments__list-item"
					>
						<Service service={service} />
					</li>
				))}
			</ul>
		</section>
	);
};

export default Treatments;
