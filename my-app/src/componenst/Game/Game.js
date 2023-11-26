import React, { useState } from 'react';
import GameLayout from './GameLayout';

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '']);
	const [winningCombinationIndex, setWinningCombinationIndex] = useState(null); // Новое состояние

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
				setWinningCombinationIndex(WIN_PATTERNS[i]); // Устанавливаем индекс победной комбинации

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
		setWinningCombinationIndex(null); // Сбрасываем индекс победной комбинации
	};

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
			winningCombinationIndex={winningCombinationIndex} // Передаем индекс победной комбинации
			onCellClick={handleCellClick}
			newGameClick={handleNewGameClick}
		/>
	);
};

export default Game;
