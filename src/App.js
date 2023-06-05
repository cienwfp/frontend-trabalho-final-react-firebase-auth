import React from 'react';
import ResponseChat from './page/responseChat';
import Login from './page/login';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PrivateRoute from './routes/privateRoutes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
      children: [
        {
          path: '/responseChat',
          element: <PrivateRoute><ResponseChat /></PrivateRoute>
        },
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;