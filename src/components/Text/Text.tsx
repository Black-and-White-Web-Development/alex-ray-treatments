import "./Text.scss";

interface TextProps {
	text: string[];
	heading?: string;
}

const Text = ({ text, heading }: TextProps) => {
	return (
		<section className="fb-col-wrapper">
			<article className="text__text">
				{heading && <h2>{heading}</h2>}
				{text.map(paragraph => (
					<p key={paragraph} className="text__paragraph">
						{paragraph}
					</p>
				))}
			</article>
		</section>
	);
};

export default Text;
