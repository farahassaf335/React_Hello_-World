import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import reportWebVitals from './reportWebVitals';
import { loadUserFromStorage } from './store/authSlice';

const queryClient = new QueryClient();

store.dispatch(loadUserFromStorage());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
