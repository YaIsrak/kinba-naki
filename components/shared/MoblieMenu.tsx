import { NavItems } from '@/ConstantData';
import { ChevronDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import Search from './Search';

export default function MoblieMenu() {
	return (
		<>
			<Sheet>
				<SheetTrigger asChild>
					<HamburgerMenuIcon className='h-7 w-7 block md:hidden' />
				</SheetTrigger>
				<SheetContent side='left'>
					<SheetHeader>
						<Search />
					</SheetHeader>
					<div className='pt-10 flex flex-col gap-5'>
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
				</SheetContent>
			</Sheet>
		</>
	);
}
