import React from 'react';
import Button from '../Button/Button';

function Buttons({ letters, guessedLetters, clickButton }) {
	return (
		<div className="Buttons">
			{letters.map(letter => (
				<Button
					key={letter}
					value={letter}
					onClick={clickButton}
					disabled={guessedLetters.has(letter)}
				/>
			))}
		</div>
	);
}

export default Buttons;
