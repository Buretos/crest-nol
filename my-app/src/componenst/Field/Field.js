import React from 'react';
import FieldLayout from './FieldLayout';

const Field = ({ field, onCellClick }) => {
	return (
		<div>
			<FieldLayout field={field} onCellClick={onCellClick} />
		</div>
	);
};

export default Field;
