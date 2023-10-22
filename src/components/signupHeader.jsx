import Image from "next/image";
import Link from "next/link";

const SignupHeader = () => {
	return (
		<div className="flex flex-row items-center relative">
			<div className="absolute flex items-center left-20">
				<Link href="/">
					<Image
						src="/images/logo.png"
						alt="Logo"
						width={90}
						height={10}
						className="cursor-pointer -ml-5"
					/>
				</Link>
			</div>
			<Image
				src="/images/background.png"
				alt="Background"
				width={2000}
				height={50}
				className="h-40"
			/>
			<h1 className="absolute z-10 text-4xl font-semibold text-white ml-6 flex text-center left-1/2 transform -translate-x-1/2">
				Join Us
			</h1>
		</div>
	)
}

export default SignupHeader