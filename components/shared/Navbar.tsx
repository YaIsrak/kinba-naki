import CartIcon from '@/components/Icon/CartIcon';
import { AvatarIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import MoblieMenu from './MoblieMenu';
import NavMenuItem from './NavMenuItem';

export default function Navbar() {
	return (
		<nav className='w-full py-3 backdrop-blur-lg bg-background/50 fixed z-50'>
			<div className='max-w-screen-xl flex flex-warp item-center justify-between mx-auto px-4 md:px-8 lg:px-12'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-2xl font-semibold'>Kinba naki🛍️</h1>
				</Link>

				{/* Nav item */}
				<NavMenuItem />

				{/* Extra */}
				<div className='flex gap-3'>
					<Link href={'/avater'} className='hidden md:block'>
						<AvatarIcon className='h-7 w-7' />
					</Link>
					<Link href={'/cart'}>
						<CartIcon />
					</Link>
					<MoblieMenu />
				</div>
			</div>
		</nav>
	);
}
