import React, { createContext, PropsWithChildren, useCallback, useState } from 'react';
import useAxios from 'axios-hooks';
import { CartI } from '../utils/map.typing';
import { AxiosPromise } from 'axios';

interface AppContextProps {
	cart: CartI | null;
	setCart: (cart: CartI) => void;
	quantity: number;
	createCart: () => AxiosPromise<CartI>;
	addItemToCart: (productId: string, cartId: string) => Promise<void>;
	showItemsCart: () => Promise<void>;
	deleteItemFromCart: (productId: string, cartId: string) => Promise<void>;
	renderTotalItemsCart: () => Promise<void>;
}

const AppContext = createContext<AppContextProps | null>(null);

const AppProvider = (props: PropsWithChildren<AppContextProps>) => {
	const [cart, setCart] = useState<CartI | null>(null);
	const [{ data }, refetch] = useAxios<CartI>('/');
	const [quantity, setQuantity] = useState<number>(0);

	const createCart = () => {
		return refetch({
			url: '/',
			method: 'POST',
			data: {
				// products: [],
			},
		});
	};

	const addItemToCart = async (productId: string, cartId: string): Promise<void> => {
		await refetch({
			url: '/add-product',
			method: 'POST',
			data: {
				cartId,
				productId,
			},
		});
		// setQuantity(quantity + 1);
		setTimeout(() => {
			renderTotalItemsCart();
		}, 100);
		// showItemsCart();
	};

	const showItemsCart = async () => {
		const res = await refetch({
			url: `/${cart?.id}`,
			method: 'GET',
		});

		setCart(res.data);
	};

	const renderTotalItemsCart = useCallback(async () => {
		if (!cart) return;
		const { data } = await refetch({
			url: `/${cart?.id}`,
			method: 'GET',
		});
		console.log(data?.products?.length);
		setQuantity(data.products.length);
	}, [cart, data]);

	const deleteItemFromCart = async (productId: string, cartId: string): Promise<void> => {
		await refetch({
			url: '/remove-product',
			method: 'POST',
			data: {
				productId,
				cartId,
			},
		});
		// setQuantity(quantity - 1);
		await renderTotalItemsCart();
		// showItemsCart();
	};

	return (
		<AppContext.Provider
			value={{
				cart,
				setCart,
				addItemToCart,
				showItemsCart,
				createCart,
				deleteItemFromCart,
				renderTotalItemsCart,
				quantity,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export { AppProvider };
export default AppContext;
