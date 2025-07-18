import { Outlet, useLocation } from "react-router-dom";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

import background from "@/assets/fields.webp";

interface HeroProps {
	heading: string;
	subheading?: string;
	image: string;
	cta?: { href: string; label: string };
}

const heroContent: Record<string, HeroProps> = {
	"/": {
		heading: "Alex Ray Treatments",
		subheading:
			"Wellness and beauty treatments from a cosy boutique salon in the Chichester countryside.",
		cta: { href: "/book", label: "Book now" },
		image: background,
	},
	"/about": {
		heading: "About",
		image: background,
	},
	"/treatments": {
		heading: "Treatments",
		image: background,
	},
	"/book": {
		heading: "Book your treatment",
		image: background,
	},
};

const App = () => {
	const location = useLocation();
	const content = heroContent[location.pathname] || heroContent["/"];

	return (
		<>
			<Header />
			<main>
				<Hero
					heading={content.heading}
					subheading={content.subheading}
					cta={content.cta}
					image={content.image}
				/>
				<Outlet />
			</main>
		</>
	);
};

export default App;
