import { screen } from '@testing-library/react';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
