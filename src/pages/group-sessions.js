import Image from "next/image";
import Header from "@/Components/Header";
import Sidebar from "./sidebar";
import FindAMentor from "./findamentor";
import Link from "next/link";

const Groupsession = () => {
	return (
		<>
			<Sidebar />
			<div className="flex flex-col item-center relative ml-72 mt-12">
				<p className="text-black text-2xl font-semibold">Group sessions</p>
				<Image
					src="/images/Illustration.png"
					width={200}
					height={100}
					alt="illustration"
					className="w.48 h-48 mt-10"></Image>
				<p className="w-52 h-9 mt-7 text-black text-base font-semibold">
					No group Sessions
				</p>
				<Link href='/findamentor'>
					<button className="w-64 mt-5 h-12 px-4 py-3.5 cursor-pointer bg-sky-600 rounded-lg justify-center items-center gap-2.5 inline-flex">
						<div className="text-white text-xl font-bold">
							Browse more mentor
						</div>
					</button>
				</Link>
			</div>
		</>
	);
};

export default Groupsession;
