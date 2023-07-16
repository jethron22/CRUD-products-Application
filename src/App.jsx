import React, { useState, useEffect } from 'react'
import axios from 'axios'


function App() {

  const [data, setData] = useState([])



  useEffect(() => {
    loadProductsData();
  },[]);


const loadProductsData = async () => {
  return await axios.get('http://localhost:3000/products').then((response) => setData(response.data)).catch((err) => console.log(err));
}

console.log('data', data)

return (
  <div>App</div>
)
}

export default App