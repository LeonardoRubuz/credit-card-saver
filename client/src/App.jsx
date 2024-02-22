import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/home';
import AddCardPage from './pages/addCard';
import CardsList from './pages/cardsList';

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
    element : <CardsList />
  }
])

function App() {
  return ( 
    <RouterProvider router={router} />
   );
}

export default App;

