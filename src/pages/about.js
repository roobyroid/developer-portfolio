import React, { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head';
import Layout from '@/components/Layout';
import TransitionEffect from '@/components/TransitionEffect';
import AnimatedText from '@/components/AnimatedText';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Image from 'next/image';

import profilePic from '../../public/images/profile/developer-pic-2.jpg';

const AnimatedNumbers = ({ value }) => {
	const ref = useRef(null);

	const motionValue = useMotionValue(0);
	const springValue = useSpring(motionValue, { duration: 3000 });
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(value);
		}
	}, [isInView, value, motionValue]);

	useEffect(() => {
		springValue.on('change', (latest) => {
			if (ref.current && latest.toFixed(0) <= value) {
				ref.current.textContent = latest.toFixed(0);
			}
		});
	}, [springValue, value, motionValue]);

	return <span ref={ref}></span>;
};

const about = () => {
	return (
		<>
			<Head>
				<title>CodeBucks | About Page</title>
				<meta name="description" content="any description" />
			</Head>
			<TransitionEffect />
			<main className="w-full flex flex-col items-center justify-center dark:text-light">
				<Layout className="pt-16">
					<AnimatedText
						text="Passion Fuels Purpose!"
						className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
					/>
					<div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
						<div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
							<h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
								Biography
							</h2>
							<p className="my-4 font-medium">
								Hi, I&rsquo;m CodeBucks, a&nbsp;web developer and UI/UX designer
								with a passion for creating beautiful, functional, and
								user-centered digital experiences. With 4&nbsp;years
								of&nbsp;experience in&nbsp;the field. I am&nbsp;always looking
								for new and innovative ways to&nbsp;bring my clients&rsquo;
								visions to&nbsp;life.
							</p>

							<p className="my-4 font-medium">
								I&nbsp;believe that design is&nbsp;about more than just making
								things look pretty&nbsp;&mdash; it&rsquo;s about solving
								problems and creating intuitive, enjoyable experiences for
								users.
							</p>

							<p className="my-4 font-medium">
								Whether I&rsquo;m working on&nbsp;a&nbsp;website, mobile app,
								or&nbsp;other digital product, I&nbsp;bring my&nbsp;commitment
								to&nbsp;design excellence and user-centered thinking
								to&nbsp;every project&nbsp;I work&nbsp;on. I&nbsp;look forward
								to&nbsp;the opportunity to&nbsp;bring my&nbsp;skills and passion
								to your next project.
							</p>
						</div>

						<div
							className="col-span-3 relative 0 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light 
						xl:col-span-4 xs:flex-row md:order-1 md:col-span-8"
						>
							<div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
							<Image
								src={profilePic}
								alt="Codebucks"
								className="w-full h-auto rounded-2xl"
								priority
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw,33vw"
							/>
						</div>

						<div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
							<div className="flex flex-col items-end justify-center xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumbers value={50} />+
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xs:text-center md:text-lg sm:text-base xs:text-sm">
									satisfied clients
								</h2>
							</div>
							<div className="flex flex-col items-end justify-center  xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumbers value={40} />+
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xs:text-center md:text-lg sm:text-base xs:text-sm">
									project completed
								</h2>
							</div>
							<div className="flex flex-col items-end justify-center  xl:items-center">
								<span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
									<AnimatedNumbers value={4} />+
								</span>
								<h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xs:text-center md:text-lg sm:text-base xs:text-sm">
									years of experience
								</h2>
							</div>
						</div>
					</div>

					<Skills />
					<Experience />
					<Education />
				</Layout>
			</main>
		</>
	);
};

export default about;
