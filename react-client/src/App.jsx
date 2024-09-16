import { useState } from 'react'
import ResponsiveAppBar from './components/NavBar';
// import CardView from './components/CardView';
import Products from './components/Products';
import Home from './components/Home';
import CardView from './components/CardView';
import SingleProduct from './components/SingleProduct';
import AddProduct from './components/AddProduct';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';


function App() {
  const route = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/products",
      element : <Products/>
    },
    {
      path : "/cards",
      element : <CardView/>
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
