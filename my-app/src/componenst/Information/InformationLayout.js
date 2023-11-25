import React from 'react';
import PropTypes from 'prop-types';
import styles from './Information.module.css';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw, newGameClick }) => {
	return (
		<>
			<div className={styles.status}>
				{isDraw
					? 'Ничья'
					: isGameEnded
					? `Победа: ${currentPlayer === 'X' ? 'O' : 'X'}`
					: `Ходит: ${currentPlayer}`}
			</div>
			;
			<button className={styles.button} onClick={() => newGameClick()}>
				Начать заново
			</button>
		</>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	newGameClick: PropTypes.func,
};

export default InformationLayout;
