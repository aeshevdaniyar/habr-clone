import React from 'react';
import { ComponentPreview, Previews } from '@react-buddy/ide-toolbox';
import App from 'app/App';
import { PaletteTree } from './palette';

const ComponentPreviews = () => (
    <Previews palette={<PaletteTree />}>
        <ComponentPreview path="/App">
            <App />
        </ComponentPreview>
    </Previews>
);

export default ComponentPreviews;
