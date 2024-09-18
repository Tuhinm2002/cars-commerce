
import ResponsiveAppBar from './components/NavBar';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import AddProduct from './components/AddProduct';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';


function App() {
  const route = createBrowserRouter([
    {
      path : "/",
      element : <Products/>
    },
    {
      path : "/products",
      element : <Products/>
    },
    {
      path : "/products/:prodId",
      element : <SingleProduct/>
    },
    {
      path : "/add_products",
      element : <AddProduct/>
    },
    {
      path : "/about",
      element : <About/>
    }
  ])

  return (
    <>
    <ResponsiveAppBar></ResponsiveAppBar>
    {/* <CardView></CardView> */}
    {/* <Products></Products> */}
    <RouterProvider router={route} />
    </>
  )
}

export default App
