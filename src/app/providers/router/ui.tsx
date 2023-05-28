import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { routerConfig } from 'shared/config/routerConfig/routerConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => (
    <Routes>
        {
            Object.values(routerConfig)
                .map(({ path, element }) => (
                    <Route
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader />}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))
        }
    </Routes>
);

export default AppRouter;
