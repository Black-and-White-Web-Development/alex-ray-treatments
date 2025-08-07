import TextWithImage from "@/components/TextWithImage";

import backMassage from "@/assets/back-massage.webp";
import facialMask from "@/assets/facial-mask.webp";
import footMassage from "@/assets/foot-massage.webp";

const Blog = function () {
	return (
		<>
			<TextWithImage
				position="right"
				image={{ url: backMassage, alt: "Alex Ray" }}
				heading="Body Treatments"
				text={[
					"I offer a menu of body treatments designed to help you relax and revive your skin, your body and your wellbeing. From full-body exfoliation to targeted sports massage, each treatment is tailored to you and your needs. If you're feeling sluggish, stressed or you need to recover after intense exercise - this to your space to pause and reset.",
				]}
			/>
			<TextWithImage
				position="right"
				image={{ url: footMassage, alt: "Alex Ray" }}
				heading="Hands and feet"
				text={[
					"Your hands and feet work hard every day, and they deserve attention and care. I offer classic and gel manicures and pedicures with a focus on nail health, skin smoothing and perfectly neat finishes. Cuticle care, shaping, and massage are all included. I also offer reflexology sessions, using this ancient process to tap into your body's energy and restore balance. Whether it's regular upkeep or a special occasion treatment, your hands and feet leave our salon looking and feeling their best.",
				]}
			/>
			<TextWithImage
				position="right"
				image={{ url: facialMask, alt: "Alex Ray" }}
				heading="Around the eyes"
				text={[
					"I offer brow shaping, tinting and lash lifts to enhance your eyes and add natural-looking definition. It's ideal if you want to feel more polished with less makeup, and every treatment is tailored to your features, so the result feels effortless and flattering.",
				]}
			/>
		</>
	);
};

export default Blog;
