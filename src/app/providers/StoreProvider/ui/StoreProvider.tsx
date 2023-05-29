import { Provider } from 'react-redux';
import { FC } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

export interface StoreProviderProps {
    initialState?:DeepPartial<StateSchema>
}
const StoreProvider:FC<StoreProviderProps> = (props) => {
    const { children, initialState } = props;
    const store = createReduxStore(initialState);
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;
