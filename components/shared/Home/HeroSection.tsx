'use client';

import Image from 'next/image';
import { useState } from 'react';

import ReactSimplyCarousel from 'react-simply-carousel';

export default function HeroSection() {
	const [activeSlideIndex, setActiveSlideIndex] = useState(0);

	return (
		<div>
			<ReactSimplyCarousel
				activeSlideIndex={activeSlideIndex}
				onRequestChange={setActiveSlideIndex}
				itemsToShow={1}
				itemsToScroll={1}
				forwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						alignSelf: 'center',
						background: 'black',
						border: 'none',
						borderRadius: '50%',
						color: 'white',
						cursor: 'pointer',
						fontSize: '20px',
						height: 30,
						lineHeight: 1,
						textAlign: 'center',
						width: 30,
					},
					children: <span>{`>`}</span>,
				}}
				backwardBtnProps={{
					//here you can also pass className, or any other button element attributes
					style: {
						alignSelf: 'center',
						background: 'black',
						border: 'none',
						borderRadius: '50%',
						color: 'white',
						cursor: 'pointer',
						fontSize: '20px',
						height: 30,
						lineHeight: 1,
						textAlign: 'center',
						width: 30,
					},
					children: <span>{`<`}</span>,
				}}
				responsiveProps={[
					{
						itemsToShow: 1,
						itemsToScroll: 1,
						minWidth: 768,
					},
				]}
				speed={400}
				easing='linear'
			>
				{/* here you can also pass any other element attributes. Also, you can use your custom components as slides */}
				<div style={{ width: 300, height: 300, background: '#ff80ed' }}>
					slide 0
				</div>
				<div style={{ width: 300, height: 300, background: '#065535' }}>
					slide 1
				</div>
				<div className='relative h-[500] w-full'>
					<Image
						src='https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4'
						alt='Image'
						fill
						className='overflow-hidden object-cover'
					/>
				</div>
			</ReactSimplyCarousel>
		</div>
	);
}
