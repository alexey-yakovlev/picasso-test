import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store'
import App from '@/app';

const container = document.getElementById('root');
const root = createRoot(container as HTMLElement); 

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
