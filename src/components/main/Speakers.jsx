import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import speakers from "../../db/speakers.json";
import Subtitle from "../Subtitle";

console.log(speakers);
const Speakers = () => {
	return (
		<section id="oradores">
			<Subtitle>Oradores</Subtitle>
			<div className="flex flex-wrap items-center justify-center gap-5 max-w-6xl mx-auto">
				{speakers.map((speaker) => (
					<div className="flex flex-col gap-y-4 border-2 border-gray-color/50 rounded-lg brightness-75 hover:brightness-125 pb-5 bg-gradient-to-bl from-transparent via-transparent to-op-primary-color backdrop-blur transition-all duration-300 w-full max-w-[250px] lg:max-w-xs">
						<picture>
							<img
								src={speaker.src}
								alt={speaker.name}
								className="w-[250px] lg:w-80 max-h-52 object-cover"
							/>
						</picture>

						<span className="flex flex-col">
							<h2 className="text-2xl font-bold text-primary-color">{speaker.name}</h2>
							<small className="text-xs font-medium italic">{speaker.ocupation}</small>
						</span>

						<nav className="flex items-center justify-center gap-x-5 text-primary-color text-3xl">
							<a target="_blank" rel="noopener noreferrer" href={speaker.twitter}>
								<AiOutlineTwitter />
							</a>
							<a target="_blank" rel="noopener noreferrer" href={speaker.instagram}>
								<AiOutlineInstagram />
							</a>
						</nav>
					</div>
				))}
			</div>
		</section>
	);
};

export default Speakers;
