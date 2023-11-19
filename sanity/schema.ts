import { type SchemaTypeDefinition } from 'sanity';
import { Categories } from './schemas/category';
import { Product } from './schemas/product';
export const schema: { types: SchemaTypeDefinition[] } = {
	types: [Product, Categories],
};
