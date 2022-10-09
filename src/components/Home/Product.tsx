import React, { useContext } from 'react';
import Button from '../Button';
import AppContext from '../../context/AppProvider';
import { ProductI } from '../../utils/map.typing';

interface ProductProps {
	product: ProductI;
}

const Product = (props: ProductProps) => {
	const { product } = props;
	const { id, name, image, discount, price } = product;
	const context = useContext(AppContext);

	const showDiscount = () => {
		if (discount) return <div className='Products-cardDiscount'>{discount}%</div>;
	};

	const handleAdd = async () => {
		if (!context?.cart) {
			const cartCreated = await context?.createCart();
			if (!cartCreated) return;

			// console.log(cartCreated);
			context?.setCart(cartCreated?.data);
			return context?.addItemToCart(id, cartCreated.data.id);
		}
		return context?.addItemToCart(id, context?.cart.id);
	};

	return (
		<div className='Products-card'>
			<div className='Products-cardHeader'>
				<div className='Products-cardImage' style={{ backgroundImage: `url(${image})` }} />
				{showDiscount()}
			</div>
			<div className='Products-cardBody'>
				<p className='Products-cardName'>{name.toLowerCase()}</p>
				<p className='Products-cardInfo'>
					<span className='Products-cardRating'>4.8/5 Excellent</span>
					<span className='Products-cardReview'>(1214 reviews)</span>
				</p>
			</div>
			<div className='Products-cardAdd'>
				<p className='Products-cardPrice'>${price}</p>
				<div className='Products-cardButton'>
					<Button type='button' className='button outline' onClick={handleAdd}>
						Add To Cart
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Product;
