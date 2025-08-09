import clsx from "clsx";

import { useBreakpoint } from "@/hooks/useBreakpoint";

import Treatment from "@/components/Treatment";

import type { Service as ServiceType } from "@/types/services.types";

import "./Service.scss";

interface ServiceProps {
	service: ServiceType;
}

const Service = ({ service }: ServiceProps) => {
	const isTablet = useBreakpoint();

	const image = (
		<div
			className={clsx("service__image-container fb-col-wrapper__image", {
				"fb-col-wrapper__image--reverse": service.id % 2 === 0 && !isTablet,
			})}
		>
			<img className="service__image" src={service.image.url} alt={service.image.alt} />
			<div className="service__body">
				{service.body.map(paragraph => (
					<p key={paragraph} className="service__paragraph">
						{paragraph}
					</p>
				))}
			</div>
		</div>
	);

	return (
		<article className="service fb-col-wrapper">
			<header className="service__header">
				<h2 className="service__heading">{service.heading}</h2>
			</header>
			{(service.id % 2 === 0 || isTablet) && image}
			<div
				className={clsx("fb-col-wrapper__content", {
					"fb-col-wrapper__content--reverse": service.id % 2 === 0 && !isTablet,
				})}
			>
				<ul className="service__treatments-list">
					{service.treatments.map(treatment => (
						<li key={treatment.id} className="service__treatment-item">
							<Treatment treatment={treatment} />
						</li>
					))}
				</ul>
			</div>
			{service.id % 2 !== 0 && !isTablet && image}
		</article>
	);
};

export default Service;
