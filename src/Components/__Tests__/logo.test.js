import { render, screen } from '@testing-library/react';
import CreateLogo from '../HomeLogo/HomeLogo';

describe('Logo', () => {
	test('Logo must have alt=samurai logo', () => {
		render(<CreateLogo />);
		const siteLogo = screen.getByAltText('samurai logo');
		expect(siteLogo).toBeInTheDocument();
	});
});

describe('SiteLogo', () => {
	test('Logo is being rendered', () => {
		render(<CreateLogo />);
	});
});
