export const Product = {
	name: 'product',
	type: 'document',
	title: 'Product',
	fields: [
		{
			name: 'cateogory',
			title: 'Category',
			type: 'reference',
			to: [{ type: 'categories' }],
		},
		{
			name: 'name',
			type: 'string',
			title: 'Product Name',
		},
		{
			name: 'price',
			type: 'number',
			title: 'Price',
		},
		{
			name: 'descriptiom',
			type: 'string',
			title: 'Description',
		},
	],
};
