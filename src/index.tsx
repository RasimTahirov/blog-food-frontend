import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Main from './components/Main/Main';

import '../styles/index.scss';
import '../styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <div className="layout">
        <Main />
      </div>
    </BrowserRouter>
  </StrictMode>
);
