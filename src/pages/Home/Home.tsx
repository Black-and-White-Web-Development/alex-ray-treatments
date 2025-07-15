import Hero from "@/components/Hero";

import heroBackground from "@/assets/fields.webp";

const Home = function () {
	return (
		<Hero
			heading="Alex Ray Treatments"
			subheading="Find your calm"
			cta={{ href: "/contact", label: "Book now" }}
			image={heroBackground}
		/>
	);
};

export default Home;
