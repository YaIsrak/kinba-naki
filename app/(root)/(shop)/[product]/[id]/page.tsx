import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import Image from 'next/image';

export default function page({
	params,
}: {
	params: { product: string; id: string };
}) {
	return (
		<section className='py-28 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 '>
			{/* Products */}
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				<div className='relative h-[500px] w-full'>
					<Image
						src='https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4'
						alt='Image'
						fill
						className='overflow-hidden object-cover'
					/>
				</div>
				<div className='space-y-4'>
					{/* Title */}
					<h1 className='text-4xl font-semibold'>Black Hoodie</h1>
					{/* Price */}
					<h3 className='text-2xl'>900.00৳ </h3>
					{/* Chart Button */}
					<Dialog>
						<DialogTrigger asChild>
							<Button>Size Chart</Button>
						</DialogTrigger>

						<SizeChartContent />
					</Dialog>
					{/* Size */}
					<div className='space-y-2'>
						<h5 className='text-sm'>SIZE</h5>
						<Select>
							<SelectTrigger className='w-36'>
								<SelectValue placeholder='Select a size' />
							</SelectTrigger>
							<SelectContent>
								<SelectGroup>
									<SelectItem value='S'>S</SelectItem>
									<SelectItem value='L'>L</SelectItem>
									<SelectItem value='XL'>XL</SelectItem>
									<SelectItem value='XXL'>XXL</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
					</div>
					{/* Cart Option */}
					<div className='flex gap-3'>
						<div className='flex'>
							<Input type='number' className='w-20' defaultValue={1} />
						</div>
						<Button>Add To Cart</Button>
					</div>
					<br />
					{/* Buy now */}
					<Button className='w-full'>Buy now</Button>
				</div>
			</div>

			{/* PRoduct Description */}
			<ProductDescription />

			{/* Related Products */}
		</section>
	);
}
function SizeChartContent() {
	const sizeChart = [
		{
			size: 'M',
			Chest: '40',
			Length: '27',
			Sleeve: '21',
			Shoulder: '23',
		},
		{
			size: 'L',
			Chest: '42',
			Length: '28',
			Sleeve: '21',
			Shoulder: '24',
		},
		{
			size: 'XL',
			Chest: '40',
			Length: '27',
			Sleeve: '21',
			Shoulder: '23',
		},
		{
			size: 'XXL',
			Chest: '40',
			Length: '27',
			Sleeve: '21',
			Shoulder: '23',
		},
	];
	return (
		<DialogContent>
			<DialogHeader>Size Chart</DialogHeader>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Size</TableHead>
						<TableHead>Chest</TableHead>
						<TableHead>Length</TableHead>
						<TableHead>Sleeve</TableHead>
						<TableHead>Shoulder</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{sizeChart.map((chart) => (
						<TableRow key={chart.size}>
							<TableCell>{chart.size}</TableCell>
							<TableCell>{chart.Chest}</TableCell>
							<TableCell>{chart.Length}</TableCell>
							<TableCell>{chart.Sleeve}</TableCell>
							<TableCell>{chart.Shoulder}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</DialogContent>
	);
}

function ProductDescription() {
	return (
		<div className='py-28 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-20'>
			<h1 className='text-center text-xl'>Description</h1>
			<div className='my-5 space-y-10'>
				<h1 className='font-semibold'>Axaro Squad Black Hoodie</h1>
				<p className='font-light text-sm'>
					Introducing our “Axaro Squad Black Hoodie” which is made from 100% cotton
					fleece fabric one sided brush. High quality and comfortable long sleeve
					hoodie.
				</p>
				<h1 className='font-semibold'>INFO GUIDE</h1>
				<p className='font-light text-sm'>
					High quality and comfortable long sleeve hoodie. <br /> Material
					Composition : 100% polyester fleece fabric one sided brush <br /> GSM: 320
					to 360 <br /> Closure : Drawstring Kangaroo Pocket <br /> Style : Oversized{' '}
					<br /> Rib cuffs and hem <br /> Color may slightly vary due to photo shoot{' '}
					<br /> One layer single jersey fabric inside hood.
				</p>
				<h1 className='font-semibold'>SIZE & FIT</h1>
				<p className='font-light text-sm'>
					Available sizes- M, L, XL, 2XL <br />
					The male model (height 6′) is wearing a size XL and female model (height
					5’5”) is wearing a size M.
				</p>
			</div>
		</div>
	);
}
