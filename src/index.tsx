import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Suspense } from 'react';

import '../styles/index.scss';
import '../styles/styles.scss';

import AppRoutes from './app/routes/Routes';
import SpinLoading from './shared/ui/Spin/Spin';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<SpinLoading />}>
        <div className="layout">
          <AppRoutes />
        </div>
      </Suspense>
    </BrowserRouter>
  </Provider>
);
