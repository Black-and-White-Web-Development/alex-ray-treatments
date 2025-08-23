import TextWithImage from "@/components/TextWithImage";

import type { Service as ServiceType } from "@/types/services.types";

import portrait from "@/assets/alex-ray-working.webp";
import servicesData from "@/data/treatments.json" assert { type: "json" };
import { strToKebabCase } from "@/util/strToKebabCase";

import "./Home.scss";

const services = servicesData as ServiceType[];

const Home = function () {
	return (
		<>
			<TextWithImage
				position="right"
				image={{ url: portrait, alt: "Alex Ray" }}
				heading="Welcome to Alex Ray Treatments"
				text={[
					"Tucked away in a quiet corner of West Sussex, Alex Ray Treatments offers a haven of calm, comfort, and expert care.",
					"Alex has an attentive, personal approach and loves nothing better than watching her clients switch off from the world and truly relax during their appointments.",
					"Alex is passionate about championing natural, cruelty-free products. She holds a Level 4 diploma in Beauty Therapy and Salon Management.",
					"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga molestiae recusandae nam laudantium pariatur fugiat repudiandae reprehenderit! Officia, ut.",
					"Porro dolorum reiciendis fugit! Deserunt corporis ipsa doloremque accusamus optio, neque aperiam similique nostrum error.",
				]}
			/>
			<section className="treatments-summary fb-col-wrapper">
				<h2 className="treatments-summary__heading">Alex's wellbeing treatments</h2>
				<ul className="treatments-summary__list">
					{services.map(service => (
						<li key={service.id} className="treatments-summary__list-item">
							<a className="summary__link" href={`/treatments#${strToKebabCase(service.heading)}`}>
								<article className="summary">
									<header className="summary__header">
										<div className="summary__heading-container">
											<h3 className="summary__heading">{service.heading}</h3>
											<p className="summary__subheading">View treatments ⭢</p>
										</div>
										<img
											className="summary__image"
											src={service.image.url}
											alt={service.image.alt}
										/>
									</header>
									<p className="summary__body">{service.body[1]}</p>
								</article>
							</a>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default Home;
