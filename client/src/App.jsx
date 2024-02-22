import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home';
import AddCardPage from './pages/addCard';

const router = createBrowserRouter([
  {
    path : "/",
    element :  <Home />
  },
  {
    path : "/add-card",
    element : <AddCardPage />
  },
  {
    path : "/all-cards",
    element : <AddCardPage />
  }
])

function App() {
  return ( 
    <RouterProvider router={router} />
   );
}

export default App;

