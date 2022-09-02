import React, { useEffect, useContext, useMemo } from 'react';
import Icon from '../Icon';
import Button from '../Button';
import AppContext from '../../context/AppProvider';

interface CartProps {
	handleChange: () => void;
	isVisible: boolean;
}

const Cart = (props: CartProps) => {
	const { handleChange, isVisible } = props;
	const context = useContext(AppContext);

	useEffect(() => {
		fetchCart();
	}, [isVisible]);

	const fetchCart = async (): Promise<void> => {
		if (!isVisible) return;
		await context?.showItemsCart();
	};

	const handleRemoveItem = async (productId: string, cartId: string): Promise<void> => {
		await context?.deleteItemFromCart(productId, cartId);
		await context?.showItemsCart();
	};

	const subtotal = useMemo(() => {
		let sum = 0;
		context?.cart?.products.forEach((product) => {
			sum += product.price;
		});
		return sum;
	}, [context?.cart?.products]);

	const renderItem = () => {
		if (!context?.cart?.products) return <p>No Products in Cart</p>;
		return context?.cart?.products?.map((element) => (
			<div className='Cart-item' key={element.id}>
				<div className='Cart-itemImage' style={{ backgroundImage: `url(${element.image})` }} />
				<div className='Cart-itemInfo'>
					<p className='Cart-itemName'>{element.name.toLowerCase()}</p>
					<p className='Cart-itemPrice'>1 x ${element.price}</p>
				</div>
				<Icon
					className='fa-solid fa-trash-can Cart-delete'
					onClick={() => handleRemoveItem(element.id, context?.cart?.id as string)}
				/>
			</div>
		));
	};

	return (
		<div className='Cart'>
			<div className='Cart-header'>
				<span className='Cart-counter'>My Cart ({!context?.cart?.products ? 0 : context?.cart.products.length})</span>
				<Icon className='fa-solid fa-xmark Cart-close' onClick={handleChange} />
			</div>
			{renderItem()}

			<div className='Cart-total'>
				<p>SUBTOTAL</p>
				<p>$ {subtotal}</p>
			</div>
			<Button type='button' className='button cart'>
				Checkout
			</Button>
		</div>
	);
};

export default Cart;
