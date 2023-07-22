import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "../App"
import AddProduct from '../products/AddProduct'
import EditProduct from '../products/EditProduct'

export const AppRoutes =() => {
  return (
    
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<App />} />
   <Route path='/create' element={<AddProduct />} />
   <Route path="/update/:id" element={<EditProduct />} />
   </Routes>
   </BrowserRouter>
  )
}

