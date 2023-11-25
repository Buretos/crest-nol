import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({ field, onCellClick }) => {
	const handleClick = (index) => {
		onCellClick(index); // Вызываем функцию обработки клика, переданную из Game.js
	};

	return (
		<>
			<div className={styles.field}>
				{field.map((cell, i) => (
					<button
						key={i}
						className={styles.cell}
						onClick={() => handleClick(i)}
					>
						{cell}
					</button>
				))}
			</div>
		</>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};

export default FieldLayout;
