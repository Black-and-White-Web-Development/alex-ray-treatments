import Hero from "@/components/Hero";
import TextWithImage from "@/components/TextWithImage";

import portrait from "@/assets/alex-ray.webp";
import heroBackground from "@/assets/fields.webp";

const Home = function () {
	return (
		<>
			<Hero
				heading="Alex Ray Treatments"
				subheading="Wellness and beauty treatments from a cosy boutique salon in the Chichester countryside."
				cta={{ href: "/contact", label: "Book now" }}
				image={heroBackground}
			/>
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
		</>
	);
};

export default Home;
