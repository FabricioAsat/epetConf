import Subtitle from "../Subtitle";
import sponsors from "../../db/sponsors.json";

const Sponsors = () => {
	return (
		<section id="patrocinadores">
			<Subtitle>Sponsors</Subtitle>
			<small className="text-lg font-semibold italic">
				Esto se logró gracias a la confianza de
			</small>
			<nav className="flex flex-wrap gap-y-5 items-center justify-center gap-x-5 py-5">
				{sponsors.map((sponsor) => (
					<a
						href={sponsor.href}
						className="cursor-pointer"
						target="_blank"
						rel="noopener noreferrer">
						<img className="w-full h-16 block" src={sponsor.src} alt={sponsor.name} />
					</a>
				))}
			</nav>
		</section>
	);
};

export default Sponsors;
