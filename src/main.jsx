import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './Pages/SignUp/Register.jsx';
import Provider from './Provider/Provider.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Profile from './Pages/Profile/Profile.jsx';
import LookFor from './Pages/LookFor/LookFor.jsx';
import Home from './Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register></Register>,
  },
  {
    path: "/userProfile",
    element: <Profile></Profile>
  },
  {
    path: "/lookFor",
    element: <LookFor></LookFor>
  },
  {
    path: "/homepage",
    element: <Home></Home>
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
     <Provider>
      <RouterProvider router={router} />
    </Provider>
    </QueryClientProvider>
   

  </React.StrictMode>,
)
