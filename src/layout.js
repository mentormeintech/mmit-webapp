'use client';
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
	weight: ["400", "500", "600", "700", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "MentorMeInTech",
	description: "MentorMeInTech Web App",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
