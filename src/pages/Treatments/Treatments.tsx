import TextWithImage from "@/components/TextWithImage";
// import Treatment from "@/components/Treatment/Treatment";

import type { Service as ServiceType } from "@/types/services.types";

import servicesData from "@/data/treatments.json" assert { type: "json" };

const services = servicesData as ServiceType[];

const Treatments = function () {
	return (
		<section className="treatments fb-col-wrapper">
			{services.map(service => (
				<TextWithImage
					key={service.id}
					position="right"
					image={{ url: service.image.url, alt: service.image.alt }}
					heading={service.heading}
					text={service.body}
				/>
			))}
		</section>
	);
};

export default Treatments;
