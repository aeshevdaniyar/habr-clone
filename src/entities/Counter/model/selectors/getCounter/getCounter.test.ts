import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounter } from './getCounter';

describe('get counter selector', () => {
    test('get counter state', () => {
        const state:DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounter(state as StateSchema)).toEqual({ value: 10 });
    });
});
