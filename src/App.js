import './App.scss';
import { createBrowserRouter, RouterProvider, Outlet, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contect from './components/Contect';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';

function App() {

  const Layout = () => {
    return(
      <div>
        <Navbar />
        <Outlet />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />
      ,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/skill",
          element: <Skill />
        },
        {
          path: "/Portfolio",
          element: <Portfolio />
        },
        {
          path: "/contect",
          element: <Contect />
        }
      ]
    }
])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
 
export default App;
 