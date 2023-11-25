import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.module.css';
import Information from '../Information/Information';
import Field from '../Field/Field';

const GameLayout = ({
	currentPlayer,
	isGameEnded,
	isDraw,
	field,
	onCellClick,
	newGameClick,
}) => {
	return (
		<>
			<div className={styles.game}>
				<Information
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
					newGameClick={newGameClick}
				/>
				<Field field={field} onCellClick={onCellClick} />
			</div>
		</>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	onCellClick: PropTypes.func,
	newGameClick: PropTypes.func,
};

export default GameLayout;
