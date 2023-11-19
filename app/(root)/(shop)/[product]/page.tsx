import ProductCard from '@/components/Card/ProductCard';

export default function page({ params }: { params: { product: string } }) {
	const routeLink = params.product;

	return (
		<section className='py-28 max-w-screen-xl mx-auto px-4 md:px-8 lg:px-12 '>
			<h1 className='text-6xl font-semibold uppercase text-center'>
				{routeLink} Collection
			</h1>
			<hr className='my-5' />
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<ProductCard name='hoodie' id='1' />
				<ProductCard name='hoodie' id='1' />
				<ProductCard name='hoodie' id='1' />
			</div>
		</section>
	);
}
