import './styles/index.scss';
import classnames from 'shared/lib/classnames/classnames';
import { Navbar } from 'widgets/Navbar';

import { Suspense } from 'react';
import { Sidebar } from 'widgets/Sidebar';
import AppRouter from './providers/router/ui';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classnames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
