import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.scss";

interface HeroProps {
	heading: string;
	subheading?: string;
	image: string;
	cta?: { href: string; label: string };
}

const Hero = ({ heading, subheading, image, cta }: HeroProps) => {
	return (
		<header className={clsx("hero fb-col-wrapper", { "hero--hero": cta, "hero--banner": !cta })}>
			<img className="hero__image" src={image} alt="" />
			<AnimatePresence mode="wait">
				<motion.div
					key={heading}
					className="hero__content"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: 10 }}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				>
					<h1 className="hero__heading">{heading}</h1>
					{subheading && <p className="hero__subheading">{subheading}</p>}
					{cta && (
						<Link className="hero__cta" to={cta.href}>
							{cta.label}
						</Link>
					)}
				</motion.div>
			</AnimatePresence>
		</header>
	);
};

export default Hero;
