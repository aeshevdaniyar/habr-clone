import { render, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/tests/renderComponent';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        render(renderComponent(<Sidebar />));
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
});
