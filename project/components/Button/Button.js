import React from 'react';

export const Button = ({
	clazz = '',
	onClickFn = '',
	text = ''
}) => {
	return (
		<div
			className={`waves-effect waves-light btn-large ${clazz}`}
			onClick={onClickFn} >
			{text ? text : ''}
		</div>
	);
}
