import ThemeProvider from '@/components/ThemeProvider';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
const inter = Inter({ subsets: ['latin'] });

const { TWITTER_SITE, SITE_NAME, TWITTER_CREATOR } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
	? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
	: 'http://localhost:3000';

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: {
		default: SITE_NAME!,
		template: `%s | ${SITE_NAME}`,
	},
	description: 'A T-shirt E-Commarce website located in Bangladesh',
	robots: {
		follow: true,
		index: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
