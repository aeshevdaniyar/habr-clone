import { render, screen } from '@testing-library/react';
import Button from 'shared/ui/Button/Button';

test('testing', () => {
    render(
        <Button>
            Button TEST
        </Button>,
    );

    expect(screen.getByText('Button TEST')).toBeInTheDocument();
});
