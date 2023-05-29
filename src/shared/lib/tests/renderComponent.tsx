import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18nForTest from 'shared/config/i18n/i18nForTest';
import { ReactNode } from 'react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from 'app/providers/StoreProvider';

export interface RenderComponentOptions {
    route?:string
    initialState?:DeepPartial<StateSchema>
}
export const renderComponent = (component:ReactNode, options:RenderComponentOptions = {}) => {
    const { route = '/', initialState } = options;
    return (
        <StoreProvider initialState={initialState}>
            <MemoryRouter initialEntries={[route]}>
                <I18nextProvider i18n={i18nForTest}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    );
};
