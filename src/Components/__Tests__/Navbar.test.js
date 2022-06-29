import { render, test, expect } from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@testing-library/react';
import { Link } from 'react-dom';
import Navbar from '../Navbar/Navbar';
import { createMemoryHistory } from 'history';

test('Navbar is rendered on screen as expected and named correctly', () => {
	expect(Navbar).toBe(Navbar);
	expect('nav-links').toBe('nav-links');
});

it('routes to a new route', async () => {
	const history = createMemoryHistory();

	history.push = jest.fn();

	const { getByText } = render(<MemoryRouter history={history}></MemoryRouter>);
	fireEvent.click();
	expect(history.push).toHaveBeenCalledWith('/submit');
});
