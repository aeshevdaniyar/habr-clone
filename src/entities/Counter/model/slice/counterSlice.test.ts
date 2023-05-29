import { CounterSchema } from '../types/counterSchema';
import { counterReducer, counterActions } from '../slice/counterSlice';

describe('Counter Slice', () => {
    test('check increment', () => {
        const initialState:CounterSchema = {
            value: 10,
        };

        expect(counterReducer(initialState, counterActions.increment())).toEqual({
            value: 11,
        });
    });

    test('check decrement', () => {
        const initialState:CounterSchema = {
            value: 10,
        };

        expect(counterReducer(initialState, counterActions.decrement())).toEqual({
            value: 9,
        });
    });
});
