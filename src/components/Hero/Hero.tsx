import { Link } from "react-router-dom";
import "./Hero.scss";

interface HeroProps {
	heading: string;
	subheading: string;
	image: string;
	cta: { href: string; label: string };
}

const Hero = ({ heading, subheading, image, cta }: HeroProps) => {
	return (
		<header className="hero fb-col-wrapper">
			<img className="hero__image" src={image} alt="" />
			<div className="hero__content">
				<h1 className="hero__heading">{heading}</h1>
				<p className="hero__subheading">{subheading}</p>
				<Link className="hero__cta" to={cta.href}>
					{cta.label}
				</Link>
			</div>
		</header>
	);
};

export default Hero;
