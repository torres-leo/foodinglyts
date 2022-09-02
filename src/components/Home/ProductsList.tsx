import React, { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';
import Button from '../Button';
import Product from './Product';
import { ProductI } from '../../utils/map.typing';

const ProductsList = () => {
	const [productList, setProductList] = useState([]);
	const [{ data }, refetch] = useAxios('/products');
	const [active, setActive] = useState('');

	useEffect(() => {
		if (!data) return;
		setProductList(data);
	}, [data]);

	const filterProducts = async (category: string): Promise<void> => {
		await refetch({
			params: {
				category,
			},
		});
		setActive(category);
	};

	const renderProducts = () => productList.map((product: ProductI) => <Product product={product} key={product.id} />);

	return (
		<div className='Products'>
			<div className='Products-content'>
				<h3 className='Products-title'>Our Featured Items</h3>
				<h2 className='Products-text'>Our most popular items</h2>
				<div className='Products-filters'>
					<Button
						type='button'
						className={`button products ${active === '' ? 'filterActive' : ''}`}
						onClick={() => filterProducts('')}>
						All Categories
					</Button>
					<Button
						type='button'
						className={`button products ${active === 'NOODLES' ? 'filterActive' : ''}`}
						onClick={() => filterProducts('NOODLES')}>
						Noodles
					</Button>
					<Button
						type='button'
						className={`button products ${active === 'BURGER' ? 'filterActive' : ''} `}
						onClick={() => filterProducts('BURGER')}>
						Burger
					</Button>
					<Button
						type='button'
						className={`button products ${active === 'CHICKEN' ? 'filterActive' : ''}`}
						onClick={() => filterProducts('CHICKEN')}>
						Chicken
					</Button>
					<Button
						type='button'
						className={`button products ${active === 'ICE_CREAM' ? 'filterActive' : ''}`}
						onClick={() => filterProducts('ICE_CREAM')}>
						Ice Cream
					</Button>
					<Button
						type='button'
						className={`button products ${active === 'DRINKS' ? 'filterActive' : ''}`}
						onClick={() => filterProducts('DRINKS')}>
						Drinks
					</Button>
				</div>
				<div className='Products-list'>{renderProducts()}</div>
			</div>
		</div>
	);
};

export default ProductsList;
