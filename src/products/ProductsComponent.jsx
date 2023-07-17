import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { Axios } from 'axios';
import "./Products.css"
import { Link } from 'react-router-dom';
import {AiOutlineEdit} from "react-icons/ai"
BsFillTrash3Fill
import { BsFillTrash3Fill } from "react-icons/bs";




function ProductsComponent() {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("http://localhost:3000/products").then((response) => {

            setData(response.data.reverse())

        }).catch((error) => console.log(error))
    }, [])
    console.log(data)
    return (
        <div className='body'>
            <div className='add-buttons'>
                <div className='button-container'>
                <Link to="/create"><button className='button' >Ajouter +</button> </Link>
                </div>
            </div>
            <div>
                <div className='products-container'>

                    {
                        data.map((item) => {
                            return (
                                <div className='product-cards' key={item.id}>
                                    <div className="items">
                                        <div className='product-title'>{item.name}</div>
                                        <img  className='product-img' />
                                        <div  className='product-decription'>{item.description}</div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className='product-price-section'>
                                        <div className='product-price'><strong>Prix : {item.price} Euro</strong></div>
                                    </div>
                                    <div className='item-actions-buttons'>
                                        <Link to={`/edit/${item.id}`}><button className='edit-button'> <AiOutlineEdit size={13}  />Modifier</button></Link>
                                        <Link to="/delete"><button className='delete-button'><BsFillTrash3Fill  size={12} /> <span className='text-delete'>Supprimer</span></button></Link>
                                        
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductsComponent