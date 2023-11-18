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
			<NewArrivals />
		</div>
	);
}

function Info({ name }: Props) {
	return (
		<div className='grid grid-cols-2'>
			<div>
				<Image
					src='https://fastly.picsum.photos/id/37/2000/1333.jpg'
					alt='Image'
					width={100}
					height={100}
				/>
			</div>
			<div className='text-center space-y-7'>
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
	return <div>New Arriavals</div>;
}
