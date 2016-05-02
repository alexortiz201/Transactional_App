import React from 'react';

export const Button = ({
	clazz = '',
	onClickFn = '',
	text = ''
}) => {
	return (
		<div
			className={`button ${clazz}`}
			onClick={onClickFn} >
			{text ? text : ''}
		</div>
	);
}
