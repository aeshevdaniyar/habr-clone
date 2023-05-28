import { screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent';
import Sidebar from './Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        renderComponent(<Sidebar />, {});
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
