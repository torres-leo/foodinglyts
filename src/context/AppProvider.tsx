import React, { createContext, PropsWithChildren, useState } from 'react';
import useAxios from 'axios-hooks';
import { CartI } from '../utils/map.typing';
import { AxiosPromise } from 'axios';

interface AppContextProps {
	cart: CartI | null;
	setCart: (cart: CartI) => void;
	counter: number;
	createCart: () => AxiosPromise<CartI>;
	addItemToCart: (productId: string, cartId: string) => Promise<void>;
	showItemsCart: () => Promise<void>;
	deleteItemFromCart: (productId: string, cartId: string) => Promise<void>;
}

const AppContext = createContext<AppContextProps | null>(null);

const AppProvider = (props: PropsWithChildren<AppContextProps>) => {
	const [cart, setCart] = useState<CartI | null>(null);
	const [{ data }, refetch] = useAxios<CartI>('/cart');
	const [counter, setCounter] = useState<number>(0);

	const createCart = () => {
		return refetch({
			method: 'POST',
			data: {
				products: [],
			},
		});
	};

	const addItemToCart = async (productId: string, cartId: string): Promise<void> => {
		await refetch({
			url: '/cart/add-product',
			method: 'POST',
			data: {
				productId,
				cartId,
			},
		});
		setCounter(counter + 1);
	};

	const showItemsCart = async () => {
		const res = await refetch({
			url: `/cart/${cart?.id}`,
			method: 'GET',
		});
		setCart(res.data);
	};

	const deleteItemFromCart = async (productId: string, cartId: string): Promise<void> => {
		await refetch({
			url: '/cart/remove-product',
			method: 'POST',
			data: {
				productId,
				cartId,
			},
		});
		setCounter(counter - 1);
	};

	return (
		<AppContext.Provider
			value={{ cart, setCart, addItemToCart, showItemsCart, createCart, deleteItemFromCart, counter }}>
			{props.children}
		</AppContext.Provider>
	);
};

export { AppProvider };
export default AppContext;
