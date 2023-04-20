import React from 'react';
import Button from '../Button/Button';

function Buttons({ letters, guessedLetters, clickButton }) {
	return (
		<div className="Buttons">
			{letters.map(letter => (
				<Button
					ltr={letter}
					clickButton={clickButton}
					disabled={guessedLetters}
				/>
			))}
		</div>
	);
}

export default Buttons;
