import React from 'react';
import HomePage from '../../pages/Home';
import AppMenu from './AppMenu';
import Footer from './Footer';

const LayoutApp = () => (
	<>
		<AppMenu />
		<HomePage />
		<Footer />
	</>
);

export default LayoutApp;
