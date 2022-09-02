import React, { MouseEventHandler, PropsWithChildren } from 'react';

interface ButtonProps {
	type: 'button' | 'submit' | 'reset' | undefined;
	className: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
	const { type, className, onClick, children } = props;
	return (
		<button type={type} className={className} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
