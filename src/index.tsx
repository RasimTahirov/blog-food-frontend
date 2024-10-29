import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Main from './components/Main/Main';

import '../styles/index.scss';
import '../styles/styles.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <Main  />
    </div>
  </StrictMode>
);
