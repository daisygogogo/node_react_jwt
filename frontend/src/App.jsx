
import './App.css'
import { RouterProvider, createBrowserRouter,Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login  from "./pages/Login"
import Register  from "./pages/Register"
import Home  from "./pages/Home"
import UserCenter from './pages/UserCenter';

function App() {

  const {currentUser} = useAuth();

  const ProtectedRoute = ({children}) =>{
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  }

  const router = createBrowserRouter([
    {
  
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/userCenter',
          element: <ProtectedRoute><UserCenter /></ProtectedRoute>
        },
      ],
    },
  ]);


  return <RouterProvider router={router} />;
}

export default App
