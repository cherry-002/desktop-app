import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import initGame from './experiment/initGame';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/err-page';
import GameUi from './experiment/gameUi';
import Dashboard from './routes/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
    ],
  },
  {
    path: 'experiment',
    element: <GameUi />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
