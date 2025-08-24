import { faQuoteLeft } from "@awesome.me/kit-d5b9232d46/icons/classic/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TextWithImage from "@/components/TextWithImage";

import type { Review as ReviewType } from "@/types/review.types";
import type { Service as ServiceType } from "@/types/services.types";

import sign from "@/assets/alex-ray-wellbeing-sign.webp";
import reviewsData from "@/data/reviews.json" assert { type: "json" };
import servicesData from "@/data/treatments.json" assert { type: "json" };
import { strToKebabCase } from "@/util/strToKebabCase";

import "./Home.scss";

const services = servicesData as ServiceType[];
const reviews = reviewsData as ReviewType[];

const Home = function () {
	return (
		<>
			<TextWithImage
				position="right"
				image={{ url: sign, alt: "Alex Ray" }}
				heading="Welcome to Alex Ray Treatments"
				text={[
					"Tucked away in a quiet corner of West Sussex, Alex Ray Treatments offers a haven of calm, comfort, and expert care.",
					"Alex has an attentive, personal approach and loves nothing better than watching her clients switch off from the world and truly relax during their appointments.",
					"Alex is passionate about championing natural, cruelty-free products. She holds a Level 4 diploma in Beauty Therapy and Salon Management.",
					"The salon is open six days a week, with flexible opening hours including some evenings. Alex also provides her specialist massage treatments to guests at The Pig Hotel near Arundel.",
				]}
				cta={{ href: "about", label: "Find out more about Alex" }}
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
									<p className="summary__body">{service.body[0]}</p>
								</article>
							</a>
						</li>
					))}
				</ul>
			</section>
			<section className="reviews fb-col-wrapper">
				<h2 className="reviews__heading">What Alex's clients say</h2>
				<ul className="reviews__list">
					{reviews.map(review => (
						<li key={review.id} className="reviews__list-item">
							<article className="review">
								<FontAwesomeIcon className="review__icon" icon={faQuoteLeft} />
								<div className="review__content">
									<p className="review__body">{review.body}</p>
									<p className="review__author">{review.author}</p>
								</div>
							</article>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default Home;
