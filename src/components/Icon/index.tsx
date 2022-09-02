import React, { MouseEventHandler, PropsWithChildren } from 'react';

interface IconProps {
	className: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Icon = (props: PropsWithChildren<IconProps>) => {
	const { className, onClick, children } = props;
	return (
		<i className={className} onClick={onClick}>
			{children}
		</i>
	);
};

export default Icon;
