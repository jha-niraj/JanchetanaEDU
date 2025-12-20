import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers/providers";
import Head from "next/head";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});
const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700'],
	display: 'swap',
	variable: '--font-space-grotesk',
})
const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Janchetana EDU",
	description: "Education comes first",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Head>
				<link rel="icon" href="https://www.janchetanaschool.edu.np/mainlogo.ico" />

				<meta property="og:title" content="Janchetana EDU - Education comes first" />
				<meta property="og:description" content="Education comes first" />
				<meta property="og:image" content="https://www.janchetanaschool.edu.np/mainlogo.png" />
				<meta property="og:url" content="https://www.janchetanaschool.edu.np" />
				<meta property="og:type" content="website" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="Janchetana EDU" />
				<meta name="twitter:description" content="Education comes first" />
				<meta name="twitter:image" content="https://www.janchetanaschool.edu.np/mainlogo.png" />
			</Head>
			<body
				className={`${spaceGrotesk.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Providers>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Toaster />
						{children}
					</ThemeProvider>
				</Providers>
			</body>
		</html>
	);
}