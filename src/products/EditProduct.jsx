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

            <h3 className='title-add-products'>Modifier le produit "{data.name}"</h3>

            <span className='id-product'>Produit No : 
            <input disabled value={data.id} required type="text" />
            </span>

            <span className=''>Modifier le nom du produit</span>
            
            <input value={data.name} maxlength="35" pattern="^.{0,35}$"  className='input-name' type="text" placeholder='nom du produit'onChange={(e)=> setData({...data, name: e.target.value})}  />
  
            <span className="desctext">Modifier la Description</span>
            <textarea value={data.description} maxlength="78" pattern="^.{0,78}$" className='input-desc' type="text" placeholder='Modifier la description' onChange={(e)=> setData({...data, description: e.target.value})}  />

            <span className="price-text">Modifier le Prix</span>
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



