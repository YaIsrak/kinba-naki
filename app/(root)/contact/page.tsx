import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function page() {
	return (
		<section className='py-36 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12'>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
				<div className='grid grid-cols-2 gap-5'>
					<Card className='text-center'>
						<CardHeader>
							<CardTitle className='txl font-semibold uppercase'>Address</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-light text-sm'>
								241/2, South Pirerbag, Amtola Bazar, 60 Feet, Mirpur, Dhaka 1216
							</p>
						</CardContent>
					</Card>
					<Card className='text-center'>
						<CardHeader>
							<CardTitle className='txl font-semibold uppercase'>
								Phone Number
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-light text-sm'>+8801683065524</p>
						</CardContent>
					</Card>
					<Card className='text-center'>
						<CardHeader>
							<CardTitle className='txl font-semibold uppercase'>Email</CardTitle>
						</CardHeader>
						<CardContent>
							<p className='text-light text-sm'>sdhsds@gmail.com</p>
						</CardContent>
					</Card>
					<Card className='text-center'>
						<CardHeader>
							<CardTitle className='txl font-semibold uppercase'>Website</CardTitle>
						</CardHeader>
						<CardContent>
							<Link
								href={'https://yaserisrak.vercel.app'}
								className='text-light text-sm'
							>
								yaserisrak.vercel.app
							</Link>
						</CardContent>
					</Card>
				</div>

				{/* right side */}
				<div className='space-y-5'>
					<h2 className='text-3xl font-semibold uppercase'>Send Message</h2>
					<p>
						Fusce molestie ultrices ipsum, ut pretium orci molestie et. Praesent sed
						risus pharetra, laoreet ipsum id, porta nisl.{' '}
					</p>
					<Input type='text' placeholder='Name' />
					<Input type='email' placeholder='Email' />
					<Input type='text' placeholder='Subject' />
				</div>
			</div>
		</section>
	);
}
