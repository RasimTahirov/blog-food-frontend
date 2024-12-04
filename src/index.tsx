import { createRoot } from 'react-dom/client';

import '../styles/index.scss';
import '../styles/styles.scss';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRoutes from './app/routes/Routes';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="layout">
        <AppRoutes />
      </div>
    </BrowserRouter>
  </Provider>
);
