import React from 'react';

type InputProps = {
	type: string;
	placeholder: string;
	className: string;
	value: string;
};

const index = ({ type, placeholder, className, value }: InputProps) => {
	return <input type={type} placeholder={placeholder} className={className} value={value} />;
};

export default index;
