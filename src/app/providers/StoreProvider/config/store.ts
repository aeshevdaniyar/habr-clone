import { configureStore, DeepPartial } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?:DeepPartial<StateSchema>) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState as StateSchema,
    });
}
