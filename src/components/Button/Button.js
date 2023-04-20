function Button({ ltr, clickButton, guessedLetters }) {
	console.log('Button guessedLetters()', guessedLetters);
	console.log('Button clickButton()', clickButton);
	console.log('Button ltr', ltr);
	return (
		<div className="Button">
			<button
				className="Button-btn"
				value={ltr}
				onClick={clickButton}>
				{ltr}
			</button>
		</div>
	);
}

export default Button;
