import TextWithImage from "@/components/TextWithImage";

import alexRayWorking from "@/assets/alex-ray.webp";

const About = function () {
	return (
		<>
			<TextWithImage
				position="right"
				image={{ url: alexRayWorking, alt: "Alex Ray" }}
				heading="About Alex"
				text={[
					"Alex wanted to work in the beauty industry for as long as she can remember, and from a young age she believed that a healthy, glowing body nurtures a happy soul. It became her mission to create a warm, welcoming destination for specialist beauty and wellness treatments and in 2021 she opened her own salon in the Chichester countryside.",
					"Alex Ray Treatments is a calm, friendly space offering luxurious yet affordable self-care treatments, from massages, facials and body treatments to nails, eyebrows and waxing. Alex encourages clients to switch off from the world and truly relax during their appointments and she tailors each treatment to the individual. Alex is the sole therapist in her salon and has an attentive, personal approach which keeps clients returning time and again – and many become her good friends!",
					"Before launching her own business Alex spent five years working at the luxurious Champneys city spa in Chichester as well as offering exclusive at-home treatments to her local clients. Always expanding her knowledge and exploring new opportunities, Alex achieved a Level 4 diploma in Beauty Therapy and Salon Management and this qualification – along with her clients’ encouragement – inspired Alex to become her own boss and open her independent salon.",
					"Alex is passionate about using natural, cruelty-free products and her salon adheres to the highest standards of hygiene and safety. She can take special requests such as home visits, block bookings and wedding beauty sessions, and she loves meeting new clients in her local community and beyond. ",
					"Outside of the salon, Alex loves to exercise and she can be found cycling and paddleboarding with her family and enjoying the many beautiful beaches near her home. Alex Ray Treatments is open six days a week with flexible opening hours including some evenings, and Alex also provides her specialist massage treatments to guests at The Pig Hotel near Arundel.",
				]}
			/>
		</>
	);
};

export default About;
