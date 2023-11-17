import Link from 'next/link';
import { Input } from '../ui/input';

export default function Footer() {
	return (
		<footer className=''>
			<div className='bg-foreground text-background mx-auto px-4 md:px-8 lg:px-28 py-16'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
					{/* Row 1 */}
					<div className='space-y-3'>
						<Link href={'/'}>
							<h1 className='text-4xl font-bold uppercase'>Kinba naki🛍️</h1>
						</Link>
						<p>241/2, South Pirerbag, Amtola Bazar, 60 Feet, Mirpur, Dhaka 1216</p>
						<p>+8801683065524</p>
						<p>axaro.service@gmail.com</p>
						{/* TODO: socail media Icon */}
					</div>

					{/* Row 2 */}
					<div className='space-y-3'>
						<h2 className='font-bold text-xl'>INFORMATION</h2>
						<div>
							<Link href={'/account'} className='font-semibold'>
								My Account
							</Link>
						</div>
						<div>
							<Link href={'/about'} className='font-semibold'>
								About Us
							</Link>
						</div>
						<div>
							<Link href={'/contact'} className='font-semibold'>
								Contact Us
							</Link>
						</div>
						<div>
							<Link href={'/shop'} className='font-semibold'>
								Shopping Page
							</Link>
						</div>
					</div>

					{/* Row 3 */}
					<div className='space-y-3'>
						<h2 className='font-bold text-xl'>NEWSLETTER</h2>
						<p>
							If you don’t want to miss any news from us, please fill to register into
							our newsletter system.
						</p>
						<Input placeholder='Your Email' name='email' />
					</div>
				</div>
				<hr className='my-10' />

				{/* Info */}
				<div className='grid grid-cols-1 md:grid-cols-2 justify-between'>
					<p>© 2023 Israk. All Rights Reserved.</p>
					<div className='flex gap-3 justify-normal md:justify-end'>
						<p className='font-semibold text-sm'>Terms of Use</p>
						<p className='font-semibold text-sm'>Privacy Policy</p>
						<p className='font-semibold text-sm'>Security</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
