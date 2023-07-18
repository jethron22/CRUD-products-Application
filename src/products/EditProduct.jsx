import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import "./EditProduct.css"

function EditProduct() {

  const {id} = useParams()

  const [data, setData] = useState([])

  useEffect(()=> {
         axios.get("http://localhost:3000/products/"+id).then((response)=> {
               
         setData(response.data)
         .catch((err)=> console.log(err))
         })
  },[])

  const navigate = useNavigate()

  const handleSubmit =(e)=> {

    e.preventDefault();

    axios.put("http://localhost:3000/products/"+id, data ).then((response)=> {

    setData(response.data)

    alert("Le produit a été modifié avec succès !!")
       navigate("/")
    })

  }

  return (
    
    <div>

      <form onSubmit={handleSubmit} >

        <div className='form-create-container'>

          <div className='form-create-product'>

            <h3 className='title-add-products'>Modifier {data.name}</h3>

            <span>Produit No : 
            <input disabled value={data.id} className='input-name' required type="text" />
            </span>

            <span className="desctext">Nom du produit</span>
            <input value={data.name} className='input-desc' type="text" placeholder='nom du produit'onChange={(e)=> setData({...data, name: e.target.value})}  />

            <span className="desctext">Description</span>
            <input value={data.description} className='input-desc' type="text" placeholder='Modifier la description' onChange={(e)=> setData({...data, description: e.target.value})}  />

            <span className="price-text">Prix</span>
            <input value={data.price} className='input-price' type="number" placeholder='Modifier le prix' onChange={(e)=> setData({...data, price: e.target.value})} />

            <div className='form-add-button-container'>
              <div className='container-button'>
                <span><Link to="/"><button className='form-reset-button'>Annuler</button></Link></span>
                <span><button className='form-add-button'>Modifier</button></span>
              </div>

            </div>

          </div>

        </div>

      </form>
    </div>
  )
}

export default EditProduct



