import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from "../App"
import AddProduct from '../products/AddProduct'
import EditProduct from '../products/EditProduct'
import DeleteProduct from '../products/DeleteProduct'

function AppRoutes() {
  return (
   <BrowserRouter>

    
   <Routes>
   <Route path='/' element={<App />} />
   <Route path='/create' element={<AddProduct />} />
   <Route path='/edit' element={<EditProduct />} />
   <Route path='/delete' element={<DeleteProduct />} />
   </Routes>
 

  

   </BrowserRouter>
  )
}

export default AppRoutes