import React, { useState } from 'react'
import './AddProduct.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {

    const [inputData, setInputData] = useState({
        name: "", img: "", description: "", price: ""
    })


    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3000/products", inputData).then(response => {
            alert("Product created successfully");
            navigate("/")

        }).catch((err) => console.log(err))
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='form-create-container'>
                    <div className='form-create-product'>
                        <h3 className='title-add-products'>Ajouter un nouveau produit</h3>
                        <span>Nom du produit</span>
                        <input className='input-name' type="text" placeholder='  ajouter un nom' onChange={(e) => setInputData({ ...inputData, name: e.target.value })} />
                        <span className="desctext">Description</span>
                        <input className='input-desc' type="text" placeholder='  ajouter une description' onChange={(e) => setInputData({ ...inputData, description: e.target.value })} />
                        <span className="price-text">Prix</span>
                        <input className='input-price' type="number" placeholder='  ajouter un prix' onChange={(e) => setInputData({ ...inputData, price: e.target.value })} />
                        <div className='form-add-button-container'>
                            <div className='container-button'>
                                <span><button className='form-add-button'>Ajouter</button></span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct