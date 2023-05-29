import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getCounterValue } from './getCounterValue';

describe('get counter selector', () => {
    test('get counter state', () => {
        const state: DeepPartial<StateSchema> = {
            counter: { value: 10 },
        };
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
