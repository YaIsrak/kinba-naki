import HeroSection from '@/components/shared/Home/HeroSection';
import ProductHeroSection from '@/components/shared/Home/ProductHeroSection';

export default function Home() {
	return (
		<>
			<HeroSection />
			<ProductHeroSection name='hoodie' />
			<ProductHeroSection name='sweatshirt' />
			<ProductHeroSection name='tshirt' />
			<ProductHeroSection name='panjabi' />
		</>
	);
}
