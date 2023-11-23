import React from 'react';
import { useState } from 'react';
import './Game.css';
import Board from './Board';
import { calculateWinner } from './helper';

const Game = () => {
	const [board, setBoard] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNet] = useState(true);
	const winner = calculateWinner(board);

	const handleClick = (index) => {
		const boardCopy = [...board];
		// Определяем был ли клик по ячейке, или игра закончена. Нужно для блокирования клетки
		if (winner || boardCopy[index]) return;
		// Определить X ? 0
		boardCopy[index] = xIsNext ? 'X' : 'O';
		// Обновить наш стейт
		setBoard(boardCopy);
		setXIsNet(!xIsNext);
	}

	const startNewGame = () => {
		return(
			<button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле</button>
		)
	}

	return (
		<div className='wrapper'>
			{startNewGame()}
			<Board squares={board} click={handleClick}/>
			<p className='game_info'>
				{winner ? 'Победитель ' + winner : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
			</p>
		</div>
	)
}

export default Game;
