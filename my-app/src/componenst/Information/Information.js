import React from 'react';
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

export default Information;
