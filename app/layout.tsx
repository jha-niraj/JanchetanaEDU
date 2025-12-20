import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-providers";
import { Toaster } from "@/components/ui/sonner";
import { Providers } from "./providers/providers";

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
	title: {
		default: "Janchetana EDU",
		template: "%s | Janchetana EDU"
	},
	description: "Education comes first - Janchetana School of Excellence",
	keywords: ["Janchetana", "School", "Education", "Nepal", "School of Excellence"],
	authors: [{ name: "Janchetana School" }],
	creator: "Janchetana School",
	publisher: "Janchetana School",
	metadataBase: new URL("https://www.janchetanaschool.edu.np"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://www.janchetanaschool.edu.np",
		siteName: "Janchetana EDU",
		title: "Janchetana EDU - Education comes first",
		description: "Education comes first - Janchetana School of Excellence",
		images: [
			{
				url: "/mainlogo.png",
				width: 1024,
				height: 1024,
				alt: "Janchetana EDU - School of Excellence",
			},
		],
	},
	twitter: {
		card: "summary",
		title: "Janchetana EDU - Education comes first",
		description: "Education comes first - Janchetana School of Excellence",
		images: ["/mainlogo.png"],
		creator: "@janchetana",
	},
	icons: {
		icon: [
			{ url: "/mainlogo.ico", sizes: "any" },
			{ url: "/mainlogo.png", type: "image/png", sizes: "512x512" },
		],
		apple: [
			{ url: "/mainlogo.png", sizes: "180x180", type: "image/png" },
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		// Add your verification codes here when you have them
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/mainlogo.ico" />
				<link rel="apple-touch-icon" href="/mainlogo.png" />
			</head>
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