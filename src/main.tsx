import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import { configure } from 'axios-hooks';
import LRU from 'lru-cache';
import './assets/scss/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import { AppProvider } from './context/AppProvider';

const instance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: { authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}` },
});

const cache = new LRU({ max: 10 });
configure({ axios: instance, cache });

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<AppProvider>
			<App />
		</AppProvider>
	</React.StrictMode>
);
