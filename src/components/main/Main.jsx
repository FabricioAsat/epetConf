import { IoCalendar } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { useTiping } from "../../hooks/useTiping";
import Counter from "./Counter";
import Diary from "./Diary";
import Speakers from "./Speakers";
import Sponsors from "./Sponsors";

const Main = () => {
	const keywords = useTiping(
		[
			"INNOVACIÓN",
			"TECNOLOGÍA",
			"EXPERIENCIAS",
			"HABILIDADES BLANDAS",
			"AUTOMATIZACIÓN",
			"IA",
			"ENERGIA RENOVABLES",
		],
		400
	);

	return (
		<main className="text-center bg-bg-color">
			<section className="flex flex-col items-center justify-center gap-y-4 min-h-screen h-full">
				<h1 className="text-center select-none py-4 text-7xl sm:text-8xl md:text-9xl font-cursive title-gradient">
					EPET.conf
				</h1>

				<p className="select-none font-bold text-sm sm:text-base md:text-lg">
					<span className="border-r-2 border-fourth-color pr-1">
						CONFERENCIA DE <b className="text-primary-color italic">{keywords}</b>
					</span>
				</p>

				<section className="mt-8 grid grid-cols-2 justify-items-center max-w-md mx-auto">
					<div className="py-4 px-4">
						<h2 className="text-5xl flex justify-center text-primary-color">
							<IoCalendar />
						</h2>
						<div>
							<h3 className="text-lg desktop:text-2xl font-bold">23 Noviembre</h3>
							<p className="text-lg font-normal">9:00 p.m.</p>
						</div>
					</div>
					<div className="py-4 px-4">
						<h2 className="text-5xl flex justify-center text-primary-color">
							<IoLocationOutline />
						</h2>
						<div>
							<h3 className="text-lg desktop:text-2xl font-bold">Realicó, La Pampa</h3>
							<p className="text-lg font-normal">Centro cultural</p>
						</div>
					</div>
				</section>
				<Counter />
			</section>

			{/* <div
				className=" h-32 relative"
				style="clip-path: polygon(0 79%, 100% 34%, 100% 100%, 0 100%)"></div> */}

			<div className="flex flex-col gap-y-16">
				<Diary />
				<Speakers />
				<Sponsors />
			</div>
			{/* <article className="mt-8 text-3xl font-poppins">
        <h2 className="text-[var(--primary-color)]">Patrocinadores</h2>
      </article> */}
		</main>
	);
};

export default Main;
