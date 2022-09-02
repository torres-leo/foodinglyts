export interface CartI {
	id: string;
	products: ProductI[];
}

export enum Category {
	BURGER = 'BURGER',
	NOODLES = 'NOODLES',
	CHICKEN = 'CHICKEN',
	ICE_CREAM = 'ICE_CREAM',
	DRINKS = 'DRINKS',
}

export interface ProductI {
	id: string;
	name: string;
	price: number;
	image: string;
	category: Category;
	discount: number;
}
