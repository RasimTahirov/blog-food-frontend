import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Main from './components/Main/Main';

import '../styles/index.scss';
import '../styles/styles.scss';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
    <BrowserRouter>
      <div className="layout">
        <Main />
      </div>
    </BrowserRouter>
  </Provider>
  // </StrictMode>
);
