import ProductCard from '@/components/Card/ProductCard';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
	name?: 'hoodie' | 'sweatshirt' | 'tshirt' | 'panjabi';
}

export default function ProductHeroSection({ name }: Props) {
	return (
		<div className='max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 py-20 space-y-10'>
			<Info name={name} />
			<NewArrivals name={name} />
		</div>
	);
}

function Info({ name }: Props) {
	return (
		<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
			<div className='relative h-[500px] w-full'>
				<Image
					src='https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4'
					alt='Image'
					fill
					className='overflow-hidden object-cover'
				/>
			</div>
			<div className='text-center space-y-7 my-auto'>
				<h3 className='font-semibold text-xl'>
					<span className='bg-foreground text-background px-3 py-2'>
						{process.env.SITE_NAME?.toUpperCase()}
					</span>
				</h3>
				<h1 className='font-bold text-4xl'>{name?.toUpperCase()}</h1>
				<p>
					Introducing our “Axaro Squad Sweatshirt” which is made from 100% cotton
					fleece fabric one sided brush. Comfortable and oversized.
				</p>
				<div>
					<Link href={`shop/${name}`}>
						<Button variant='outline'>View Collection</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}

function NewArrivals({ name }: Props) {
	return (
		<div>
			<h2 className='text-center text-3xl uppercase font-semibold'>
				New Arrivals
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-5'>
				<ProductCard name={name} id={'1'} />
				<ProductCard name={name} id={'2'} />
				<ProductCard name={name} id={'3'} />
			</div>
		</div>
	);
}
