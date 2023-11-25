import React from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';

const Information = ({ currentPlayer, isGameEnded, isDraw, newGameClick }) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			newGameClick={newGameClick}
		/>
	);
};

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	newGameClick: PropTypes.func,
};

export default Information;
