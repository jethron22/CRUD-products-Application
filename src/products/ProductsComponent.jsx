import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import "./Products.css"
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';





function ProductsComponent() {

    const [data, setData] = useState([])

    const navigate = useNavigate()


    useEffect(() => {
        axios.get("http://localhost:3000/products/").then((response) => {

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
                        data.map((item, index) => {
                            return (
                                <div className='product-cards' key={index}>
                                    <div className="items">
                                        <div className='product-title'>{item.name}</div>
                                        <img className='product-img' />
                                        <div className='product-decription'>{item.description}</div>
                                        <div>
                                        </div>
                                    </div>
                                    <div className='product-price-section'>
                                        <div className='product-price'><strong>Prix : {item.price} Euro</strong></div>
                                    </div>
                                    <div className='item-actions-buttons'>
                                        <Link to="/delete" className='delete-button'>Supprimer</Link>
                                        <button onClick={()=> navigate(`/update/${item.id}`)} className='edit-button'><AiOutlineEdit size={12} /><span className='text-delete'>Modifier</span></button>
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

export default ProductsComponent;