import React from 'react';
import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout';

const Field = ({ field, onCellClick, winningCombinationIndex }) => {
	return (
		<div>
			<FieldLayout
				field={field}
				onCellClick={onCellClick}
				winningCombinationIndex={winningCombinationIndex}
			/>
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
	winningCombinationIndex: PropTypes.array, // Добавляем пропс winningCombinationIndex
};

export default Field;
