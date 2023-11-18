import { NavItems } from '@/ConstantData';
import CartIcon from '@/components/Icon/CartIcon';
import { AvatarIcon, ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import MoblieMenu from './MoblieMenu';

export default function Navbar() {
	return (
		<nav className='w-full py-3 backdrop-blur-sm bg-background/10 fixed'>
			<div className='max-w-screen-xl flex flex-warp item-center justify-between mx-auto px-4 md:px-8 lg:px-12'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-2xl font-semibold'>Kinba naki🛍️</h1>
				</Link>

				{/* Nav item */}
				<div className='hidden md:block'>
					<div className='flex gap-5'>
						{NavItems.map((navitem) =>
							!navitem.dropdown ? (
								<Button key={navitem.title} variant='ghost'>
									<Link href={navitem.url}>{navitem.title}</Link>
								</Button>
							) : (
								<DropdownMenu key={navitem.title}>
									<DropdownMenuTrigger asChild className='cursor-pointer'>
										<Button variant='ghost' className='flex gap-2'>
											{navitem.title} <ChevronDownIcon className='w-6 h-6' />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										{navitem.dropdownItem?.map((item) => (
											<DropdownMenuItem key={item.title}>
												<Link href={`shop${item.url}`}>{item.title}</Link>
											</DropdownMenuItem>
										))}
									</DropdownMenuContent>
								</DropdownMenu>
							)
						)}
					</div>
				</div>

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
