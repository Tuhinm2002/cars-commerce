import { useState } from 'react'
import ResponsiveAppBar from './components/NavBar';
// import CardView from './components/CardView';
import Products from './components/Products';
import Home from './components/Home';
import CardView from './components/CardView';
import SingleProduct from './components/SingleProduct';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


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
