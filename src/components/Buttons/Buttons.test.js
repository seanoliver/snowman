import Buttons from './Buttons';
import React from 'react';
import { render, debug, fireEvent } from '@testing-library/react';

const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split('');

it('renders the component (smoke test)', () => {
	const { container, debug } = render(
		<Buttons
			letters={ALPHA}
      guessedLetters={() => new Set()}
			clickButton={jest.fn()}
		/>
	);

  debug(container);
});
