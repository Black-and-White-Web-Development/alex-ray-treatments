import type { ReactNode } from "react";

import { Outlet, useLocation } from "react-router-dom";

import BookingWidget from "@/components/BookingWidget";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { ScrollToTop } from "./util/ScrollToTop";

import background from "@/assets/fields.webp";

interface HeroProps {
	heading: string;
	subheading?: string;
	image: string;
	ctas?: { href: string; label: string }[];
	children?: ReactNode;
}

const heroContent: Record<string, HeroProps> = {
	"/": {
		heading: "Alex Ray Wellbeing",
		subheading:
			"Wellness and beauty treatments from a cosy boutique salon in the Chichester countryside.",
		ctas: [
			{ href: "/book", label: "Book now" },
			{ href: "/vouchers", label: "Purchase gift voucher" },
		],
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
		children: <BookingWidget src="https://bookings.gettimely.com/alexraytreatments1/bb/book" />,
	},
	"/vouchers": {
		heading: "Gift vouchers",
		image: background,
		children: <BookingWidget src="https://bookings.gettimely.com/alexraytreatments1/bb/purchase" />,
	},
	"/accessibility-statement": {
		heading: "Accessibility Statement",
		image: background,
	},
	"/cookie-policy": {
		heading: "Cookie Policy",
		image: background,
	},
	"/privacy-policy": {
		heading: "Privacy Policy",
		image: background,
	},
	"/terms-of-use": {
		heading: "Terms of Use",
		image: background,
	},
};

const App = () => {
	const location = useLocation();
	const content = heroContent[location.pathname] || heroContent["/"];
  const slug = location.pathname.replace("/", "") || "home";

	return (
		<>
			<ScrollToTop />
			<Header />
			<main id={slug}>
				<Hero
					heading={content.heading}
					subheading={content.subheading}
					ctas={content.ctas}
					image={content.image}
					children={content.children}
				/>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default App;
