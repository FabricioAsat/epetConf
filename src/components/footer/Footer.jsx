import { BsInstagram, BsYoutube } from "react-icons/bs";

const Footer = () => {
	return (
		<>
			<div className="py-8 bg-gradient-to-b from-bg-color via-bg-from-bg-color to-bg-color-2"></div>
			<footer className="p-8 bg-bg-color-2">
				<h2 className="text-start text-lg md:text-xl font-bold">Conocenos más en</h2>

				<div className="border-t-2 tablet:w-3/5 mx-auto border-fourth-color mb-4"></div>

				<div className="flex justify-center gap-x-8 text-primary-color">
					<BsInstagram className="scale-150" />
					<BsYoutube className="scale-150" />
				</div>
			</footer>
		</>
	);
};

export default Footer;
