import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter } from '../ui/card';

interface Props {
	name?: 'hoodie' | 'sweatshirt' | 'tshirt' | 'panjabi';
	id: string;
}

export default function ProductCard({ name, id }: Props) {
	return (
		<Link href={`${name}/${id}`}>
			<Card className='border-none'>
				<CardContent>
					<div className='relative h-96 w-full'>
						<Image
							src='https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4'
							alt='Image'
							fill
							className='overflow-hidden object-cover'
						/>
					</div>
				</CardContent>
				<CardFooter className='text-center'>
					<div className='w-full'>
						<h3 className=' text-xl'>Polo Mint</h3>
						<h5 className='text-sm font-light'>600.00৳</h5>
						<h5 className='hover:text-primary'>Add to wishlist</h5>
					</div>
				</CardFooter>
			</Card>
		</Link>
	);
}
