
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export default Routes;