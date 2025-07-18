import clsx from "clsx";
import "./TextWithImage.scss";

interface TextWithImageProps {
	image: { url: string; alt: string };
	text: string[];
	heading?: string;
	position?: "left" | "right";
}

const TextWithImage = ({ image, text, heading, position = "left" }: TextWithImageProps) => {
	return (
		<section className="fb-col-wrapper">
			<div
				className={clsx("block text-with-image", {
					"text-with-image--left": position === "left",
					"text-with-image--right": position === "right",
				})}
			>
				<img className="text-with-image__image" src={image.url} alt={image.alt} />
				<article className="text-with-image__text">
					{heading && <h2>{heading}</h2>}
					{text.map(paragraph => (
						<p key={paragraph} className="text-with-image__paragraph">
							{paragraph}
						</p>
					))}
				</article>
			</div>
		</section>
	);
};

export default TextWithImage;
