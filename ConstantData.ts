export const NavItems = [
	{ title: 'Home', url: '/', dropdown: false },
	{ title: 'About', url: '/about', dropdown: false },
	{
		title: 'Categories',
		url: '/categories',
		dropdown: true,
		dropdownItem: [
			{ title: 'Sweatshirt', url: '/sweatshirt', dropdown: false },
			{ title: 'Hoodie', url: '/hoodie', dropdown: false },
			{ title: 'T-shirt', url: '/tshirt', dropdown: false },
			{ title: 'Panjabi', url: '/panjabi', dropdown: false },
		],
	},
	{ title: 'Contact', url: '/contact', dropdown: false },
];
