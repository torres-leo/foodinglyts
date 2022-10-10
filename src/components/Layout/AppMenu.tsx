import React, { useState, useContext, useEffect } from 'react';
import { Dock } from 'react-dock';
import Icon from '../Icon';
import Button from '../Button';
import Cart from '../Cart';
import AppContext from '../../context/AppProvider';

const AppMenu = () => {
	const context = useContext(AppContext);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	useEffect(() => {
		totalItemsCart();
	}, []);

	const handleChange = (): void => {
		setIsVisible(!isVisible);
	};

	const totalItemsCart = async (): Promise<void> => {
		if (!context?.cart) return;

		await context?.renderTotalItemsCart();
	};

	const renderModal = () => (
		<Dock position='right' isVisible={isVisible} onVisibleChange={handleChange} fluid={true} size={0.165}>
			<Cart isVisible={isVisible} handleChange={handleChange} />
		</Dock>
	);

	return (
		<div className='Appmenu sticky'>
			<div className='Appmenu-container'>
				<a href='#'>
					<div className='Appmenu-image' />
				</a>

				<div className='Appmenu-content'>
					<div className='Appmenu-hamburguer'>
						<nav className='Appmenu-nav'>
							<a href='#' className='Appmenu-item'>
								Home
							</a>
							<a href='#' className='Appmenu-item'>
								About us
							</a>
							<a href='#' className='Appmenu-item'>
								<span>Food Menu</span>
								<span className='Appmenu-dropIcon'>
									<Icon className='fa-solid fa-angle-down icon' />
								</span>
								<ul className='Appmenu-submenu'>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Food Grid</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Food Details</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Cart View</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Checkout View</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Order Success</span>
									</li>
								</ul>
							</a>
							<a href='#' className='Appmenu-item'>
								<span>Blog</span>
								<span className='Appmenu-dropIcon'>
									<Icon className='fa-solid fa-angle-down' />
								</span>
								<ul className='Appmenu-submenu'>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Blog</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Blog Details</span>
									</li>
								</ul>
							</a>
							<a href='#' className='Appmenu-item'>
								<span>Pages</span>
								<span className='Appmenu-dropIcon'>
									<Icon className='fa-solid fa-angle-down' />
								</span>

								<ul className='Appmenu-submenu'>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>About us</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Reservation</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Chefs</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Testimonials</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>FAQ</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>User Pages</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Customer Dashboard</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Privacy Policy</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>Terms Of Service</span>
									</li>
									<li className='Appmenu-submenuItem'>
										<span className='Appmenu-submenuLink'>404 Error</span>
									</li>
								</ul>
							</a>

							<a href='#' className='Appmenu-item'>
								Contact
							</a>
						</nav>
					</div>

					<ul className='Appmenu-buttons'>
						<li className='Appmenu-icon'>
							<Icon className='fa-solid fa-bag-shopping' onClick={handleChange}>
								<div className='counter'>
									<span className='counter-text'>{context?.quantity}</span>
								</div>
							</Icon>
						</li>
						<li className='Appmenu-icon'>
							<Icon className='fa-solid fa-magnifying-glass' />
						</li>

						<li className='Appmenu-icon'>
							<Button type='button' className='button primary'>
								Reservation
							</Button>
						</li>
					</ul>
					{renderModal()}
				</div>
			</div>
		</div>
	);
};

export default AppMenu;
