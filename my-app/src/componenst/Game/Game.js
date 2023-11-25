// import React from 'react';
// import { useState } from 'react';
// import GameLayout from './GameLayout';

// const Game = () => {
// 	const [currentPlayer, setCurrentPlayer] = useState('X');
// 	const [isGameEnded, setIsGameEnded] = useState(false);
// 	const [isDraw, setIsDraw] = useState(false);
// 	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

// 	// Функция для обработки клика на кнопке ячейки
// 	const handleCellClick = (index) => {
// 		const newField = [...field];
// 		if (isGameEnded || newField[index] !== '') return;
// 		newField[index] = currentPlayer;
// 		console.log(newField[index]);
// 		console.log(newField);
// 		setField(newField);
// 		// if (currentPlayer === 'X') {
// 		// 	setCurrentPlayer('O');
// 		// } else {
// 		// 	setCurrentPlayer('X');
// 		// }
// 		// isWinner(field);
// 		console.log(field);
// 	};

// 	function isWinner(field) {
// 		const WIN_PATTERNS = [
// 			[0, 1, 2],
// 			[3, 4, 5],
// 			[6, 7, 8],
// 			[1, 4, 7],
// 			[2, 5, 8],
// 			[0, 4, 8],
// 			[2, 4, 6],
// 		];
// 		for (let i = 0; i < WIN_PATTERNS.length; i++) {
// 			const [a, b, c] = WIN_PATTERNS[i];
// 			if (field[a] !== '' && field[a] === field[b] && field[a] === field[c]) {
// 				setIsGameEnded(true);
// 				console.log(isGameEnded);
// 			}
// 		}
// 	}

// 	return (
// 		<GameLayout
// 			currentPlayer={currentPlayer}
// 			isGameEnded={isGameEnded}
// 			isDraw={isDraw}
// 			field={field}
// 			onCellClick={handleCellClick}
// 		/>
// 	);
// };

// export default Game;

import React, { useState } from 'react';
import GameLayout from './GameLayout';

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);

	const handleCellClick = (index) => {
		if (isGameEnded || field[index] !== '') return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);
		isWrap(newField);
		isWinner(newField);
		if (currentPlayer === 'X') {
			setCurrentPlayer('O');
		} else {
			setCurrentPlayer('X');
		}
	};

	function isWinner(updatedField) {
		const WIN_PATTERNS = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < WIN_PATTERNS.length; i++) {
			const [a, b, c] = WIN_PATTERNS[i];
			if (
				updatedField[a] !== '' &&
				updatedField[a] === updatedField[b] &&
				updatedField[a] === updatedField[c]
			) {
				setIsGameEnded(true);
				break;
			}
		}
	}

	function isWrap(updatedField) {
		setIsDraw(!updatedField.includes(''));
	}

	const handleNewGameClick = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(['', '', '', '', '', '', '', '', '']);
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			onCellClick={handleCellClick}
			newGameClick={handleNewGameClick}
		/>
	);
};

export default Game;
