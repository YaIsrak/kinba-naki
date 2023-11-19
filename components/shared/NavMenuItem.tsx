'use client';

import { NavItems } from '@/ConstantData';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export default function NavMenuItem() {
	const pathname = usePathname();

	return (
		<div className='hidden md:block'>
			<div className='flex gap-5'>
				{NavItems.map((navitem) =>
					!navitem.dropdown ? (
						<Button
							key={navitem.title}
							variant={navitem.url === pathname ? 'default' : 'ghost'}
						>
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
									<DropdownMenuItem
										key={item.title}
										className={
											item.url === pathname ? 'bg-foreground text-background' : ''
										}
									>
										<Link href={`${item.url}`}>{item.title}</Link>
									</DropdownMenuItem>
								))}
							</DropdownMenuContent>
						</DropdownMenu>
					)
				)}
			</div>
		</div>
	);
}
