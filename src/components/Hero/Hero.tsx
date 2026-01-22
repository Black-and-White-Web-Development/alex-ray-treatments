import type { ReactNode } from "react";

import { faArrowRight } from "@awesome.me/kit-d5b9232d46/icons/classic/light";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Hero.scss";

interface HeroProps {
	heading: string;
	subheading?: string;
	image: string;
	ctas?: { href: string; label: string }[];
	children?: ReactNode;
}

const Hero = ({ heading, subheading, image, ctas, children }: HeroProps) => {
	const isFullHeight = !!children;

	return (
		<header
			className={clsx("hero fb-col-wrapper", {
				"hero--hero": ctas,
				"hero--banner": !ctas,
				"hero--full-height": isFullHeight,
			})}
		>
			<img className="hero__image" src={image} alt="" />
			<AnimatePresence mode="wait">
				<motion.div
					key={heading}
					className="hero__content"
					initial={{
						opacity: 0,
						x: -20,
						alignItems: isFullHeight ? "center" : "flex-start",
						maxWidth: isFullHeight ? "100%" : "auto",
					}}
					animate={{
						opacity: 1,
						x: 0,
						alignItems: isFullHeight ? "center" : "flex-start",
						maxWidth: isFullHeight ? "100%" : "auto",
					}}
					exit={{
						opacity: 0,
						x: 10,
						alignItems: isFullHeight ? "center" : "flex-start",
						maxWidth: isFullHeight ? "100%" : "auto",
					}}
					transition={{ duration: 0.4, ease: "easeInOut" }}
				>
					<h1 className="hero__heading">{heading}</h1>
					{subheading && <p className="hero__subheading">{subheading}</p>}
					{ctas && (
						<div className="hero__ctas">
							{ctas.map(cta => (
								<Link className="hero__cta" key={cta.href} to={cta.href}>
									{cta.label}
									<FontAwesomeIcon className="hero__cta-icon" icon={faArrowRight} />
								</Link>
							))}
						</div>
					)}
					{children}
				</motion.div>
			</AnimatePresence>
		</header>
	);
};

export default Hero;
