import CartIcon from '@/components/Icon/CartIcon';
import {
	AvatarIcon,
	ChevronDownIcon,
	HamburgerMenuIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function Navbar() {
	return (
		<nav className='py-3 bg-background'>
			<div className='max-w-screen-xl flex flex-warp item-center justify-between mx-auto px-4 md:px-8 lg:px-12'>
				{/* Logo */}
				<Link href={'/'}>
					<h1 className='text-2xl font-semibold'>Kinba naki🛍️</h1>
				</Link>

				{/* Nav item */}
				<div className='hidden md:block'>
					<div className='flex gap-5'>
						<Button variant='ghost'>
							<Link href='/'>Home</Link>
						</Button>
						{/* Category Drop down manu */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild className='cursor-pointer'>
								<Button variant='ghost' className='flex gap-2'>
									Categories <ChevronDownIcon className='w-6 h-6' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem>
									<Link href='/SweatShirt'>SweatShirt</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href='/Hoodie'>Hoodie</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href='/tshirt'>T-shirt</Link>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<Link href='/Panjabi'>Panjabi</Link>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
						<Button variant='ghost'>
							<Link href='/shop'>Shop</Link>
						</Button>
						<Button variant='ghost'>
							<Link href='/about'>About</Link>
						</Button>
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
					<HamburgerMenuIcon className='h-7 w-7 block md:hidden' />
				</div>
			</div>
		</nav>
	);
}
