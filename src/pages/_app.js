import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google';
import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-mont',
});

export default function App({ Component, pageProps }) {
	const router = useRouter();
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main
				className={`${montserrat.variable} bg-light w-full min-h-screen font-mont dark:bg-dark`}
			>
				<NavBar />
				<AnimatePresence mode="wait">
					<Component key={router.asPath} {...pageProps} />
				</AnimatePresence>
				<Footer />
			</main>
		</>
	);
}
