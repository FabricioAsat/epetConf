import { useRemainingTime } from "../../hooks/useRemainingTime";

const startDate = new Date("November 23, 2022 09:00");

const Counter = () => {
	const { days, hours, minutes, seconds } = useRemainingTime(startDate);

	return (
		<section>
			<h2 className="text-xl">
				<b>EPET.conf</b> comienza en:
			</h2>
			<div className="flex gap-x-4 justify-center text-3xl mt-4 text-primary-color">
				<div className="flex flex-col w-16">
					<p className="font-semibold">{days}</p>
					<span className="text-sm">Dias</span>
				</div>
				<div className="flex flex-col w-16">
					<p className="font-semibold">{hours}</p>
					<span className="text-sm">Horas</span>
				</div>
				<div className="flex flex-col w-16">
					<p className="font-semibold">{minutes}</p>
					<span className="text-sm">Minutos</span>
				</div>
				<div className="flex flex-col w-16">
					<p className="font-semibold">{seconds}</p>
					<span className="text-sm">Segundos</span>
				</div>
			</div>
		</section>
	);
};

export default Counter;
