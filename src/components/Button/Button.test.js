import Button from './Button';
import React from 'react';
import { render, debug, fireEvent } from '@testing-library/react';

it('renders the component (smoke test)', () => {
	const letter = 'a';

	const { container, debug } = render(
		<Button
			letter={letter}
			clickButton={jest.fn()}
      disabled={jest.fn()}
		/>
	);

  debug(container);
});
