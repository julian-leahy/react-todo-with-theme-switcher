import React from 'react';
import { render, screen, fireEvent, getByTestId } from '@testing-library/react';

import App from './App';

/**
 * helper to add todo items
 * @param {form input} input 
 * @param {submit button} btn 
 * @param {num} numItems
 * @returns xnum todo items
 */
const addItems = (input, btn, numItems) => {
    for (let index = 0; index < numItems; index++) {
        fireEvent.change(input, { target: { value: 'Run some tests.' } });
        fireEvent.click(btn);
    }
}

describe('Todos', () => {
    test('renders App component', () => {
        render(<App />);
    })
    test('adding a single todo item', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Create a new todo.../i);
        const addBtn = screen.getByText(/Add/);
        // 0 todo items to begin
        // use queryBy as initially there wont be any to find 
        expect(screen.queryAllByTestId('todo').length).toBe(0);
        addItems(input, addBtn, 1);
        expect(screen.getAllByTestId('todo').length).toBe(1);
    })
    test('delete a todo item', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Create a new todo.../i);
        const addBtn = screen.getByText(/Add/);
        // 0 todo items to begin
        expect(screen.queryAllByTestId('todo').length).toBe(0);
        // add item
        addItems(input, addBtn, 1);
        expect(screen.getAllByTestId('todo').length).toBe(1);

        // delete item
        const deleteBtn = screen.getByTestId('delete');
        fireEvent.click(deleteBtn);

        expect(screen.queryAllByTestId('todo').length).toBe(0);
    })
    test('hide list footer when we have 0 todos', () => {
        render(<App />);
        // check if there are no todos
        expect(screen.queryAllByTestId('todo').length).toBe(0);
        expect(screen.queryByTestId('list-footer')).toBeNull();
    })

    test('show list footer when we have todos', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Create a new todo.../i);
        const addBtn = screen.getByText(/Add/);
        // 0 todo items to begin
        expect(screen.queryAllByTestId('todo').length).toBe(0);

        // add item
        addItems(input, addBtn, 1);

        expect(screen.getAllByTestId('todo').length).toBe(1);
        expect(screen.queryByTestId('list-footer')).toBeInTheDocument();
    })
    test('hide filter buttons when we have 0 todos', () => {
        render(<App />);
        // check if there are no todos
        expect(screen.queryAllByTestId('todo').length).toBe(0);
        expect(screen.queryByTestId('filters')).toHaveClass('hidden');
    })
    test('show filter buttons when we have todos', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Create a new todo.../i);
        const addBtn = screen.getByText(/Add/);
        // 0 todo items to begin
        expect(screen.queryAllByTestId('todo').length).toBe(0);

        // add item
        addItems(input, addBtn, 1);

        expect(screen.getAllByTestId('todo').length).toBe(1);
        expect(screen.queryByTestId('filters')).toBeInTheDocument();
    })
    test('completed status is toggled', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Create a new todo.../i);
        const addBtn = screen.getByText(/Add/);
        // 0 todo items to begin
        expect(screen.queryAllByTestId('todo').length).toBe(0);

        // add item
        addItems(input, addBtn, 1);

        const cbox = screen.getByTestId('cbox');
        expect(cbox).not.toBeChecked();
        fireEvent.click(cbox);
        expect(cbox).toBeChecked();
    })
    test('items are being filtered', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Create a new todo.../i);
        const addBtn = screen.getByText(/Add/);
        // 0 todo items to begin
        expect(screen.queryAllByTestId('todo').length).toBe(0);

        // add 3 items
        addItems(input, addBtn, 3);

        // confirm
        expect(screen.getAllByTestId('todo').length).toBe(3);

        // check first item to complete
        const cbox = screen.getAllByTestId('cbox');
        fireEvent.click(cbox[0]);

        // click the active filter btn
        const activeBtn = screen.getByTestId(/active/i);
        fireEvent.click(activeBtn);

        expect(screen.getAllByTestId('todo').length).toBe(2);

        // click the completed filter btn
        const completedBtn = screen.getByTestId(/completed/i);
        fireEvent.click(completedBtn);

        expect(screen.getAllByTestId('todo').length).toBe(1);

        // click the all filter btn
        const allBtn = screen.getByTestId(/all/i);
        fireEvent.click(allBtn);

        expect(screen.getAllByTestId('todo').length).toBe(3);
    })
    test('correct number of remaining items', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Create a new todo.../i);
        const addBtn = screen.getByText(/Add/);
        // 0 todo items to begin
        expect(screen.queryAllByTestId('todo').length).toBe(0);

        // add item
        addItems(input, addBtn, 1);

        expect(screen.getAllByTestId('todo').length).toBe(1);

        expect(screen.getByText(/1 item left/i)).toBeInTheDocument();

        // add anoter item
        addItems(input, addBtn, 1);

        expect(screen.getAllByTestId('todo').length).toBe(2);

        expect(screen.getByText(/2 items left/i)).toBeInTheDocument();
    })
    test('clear completed items', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Create a new todo.../i);
        const addBtn = screen.getByText(/Add/);
        // 0 todo items to begin
        expect(screen.queryAllByTestId('todo').length).toBe(0);

        // add 2 items
        addItems(input, addBtn, 2);

        // confirm
        expect(screen.getAllByTestId('todo').length).toBe(2);

        // check both items
        const cbox = screen.getAllByTestId('cbox');
        fireEvent.click(cbox[0]);
        fireEvent.click(cbox[1]);

        // click the active filter btn
        const activeBtn = screen.getByTestId(/active/i);
        fireEvent.click(activeBtn);

        // there shouldn't be any showing
        expect(screen.queryAllByTestId('todo').length).toBe(0);

        fireEvent.click(screen.getByText(/Clear Completed/i));

        expect(screen.getAllByTestId('todo').length).toBe(2);
    })

})