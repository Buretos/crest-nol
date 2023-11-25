import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({ field, onCellClick, winningCombinationIndex }) => {
	const handleClick = (index) => {
		onCellClick(index); // Вызываем функцию обработки клика, переданную из Game.js
	};

	return (
		<>
			<div className={styles.field}>
				{field.map((cell, i) => (
					<button
						key={i}
						className={`${styles.cell} ${
							winningCombinationIndex !== null &&
							winningCombinationIndex.includes(i)
								? styles.winningCell
								: ''
						}`} // Применяем класс winningCell к кнопкам победной комбинации
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
	winningCombinationIndex: PropTypes.array, // Добавляем пропс winningCombinationIndex
};

export default FieldLayout;
