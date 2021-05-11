import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import Theme from './Theme';

describe('Theme', () => {
    test('renders Theme component', () => {
        render(<Theme />)
    })
    test('renders a toggle button', () => {
        render(<Theme />)
        expect(screen.getByRole('button')).toBeInTheDocument()
    })
    test('renders correct accessability text for theme toggle', () => {
        localStorage.setItem('theme', 'dark');
        render(<Theme />)
        expect(screen.getByText(/switch to light theme/i)).toBeInTheDocument()

        localStorage.setItem('theme', 'light')
        render(<Theme />)
        expect(screen.getByText(/switch to dark theme/i)).toBeInTheDocument()
    })
    test('renders correct accessability text after button clicked', () => {
        localStorage.setItem('theme', 'dark')
        render(<Theme />)
        expect(screen.getByText(/switch to light theme/i)).toBeInTheDocument()
        fireEvent.click(screen.getByRole('button'))
        expect(screen.getByText(/switch to dark theme/i)).toBeInTheDocument()
    })
})