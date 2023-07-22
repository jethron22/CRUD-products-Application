import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import "./Products.css"
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';







function ProductsComponent() {

    const [data, setData] = useState([])
    const [value, setValue] = useState()



    const handleSearch = async (e) => {
        e.preventDefault();

        return await axios.get(`http://localhost:3000/products?q=${value}`).then((response) => {
            setData(response.data.sort().reverse())
            setValue("")
        }).catch((err) => console.log(err))

    }

    const navigate = useNavigate()

    const handleDelete = (id) => {
        const confirmation = window.confirm("Voulez vous vraiment supprimer ce produit ?");

        if (confirmation) {
            axios.delete("http://localhost:3000/products/" + id)
                .then(res => {
                    window.location.reload();
                    alert("Vous venez de supprimer l'item avec succès !!")

                }).catch((err) => console.log(err))
        }
    }


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
                    <form onSubmit={handleSearch} className='search_container' >
                        <div>
                            <span className="search_input_item">
                                <input value={value} className='search__input' type='text' placeholder='tapez le nom du produit ici..' onChange={(e) => setValue(e.target.value)} /></span>
                            <span className='button_submit_search'>
                                <button type='submit' className='search__button'>Rechercher</button>
                            </span>
                        </div>
                    </form>

                    <div>Produits disponibles : 234 </div>

                    <Link to="/create"><button className='button' >Ajouter +</button> </Link>
                </div>
            </div>
            <div>

                <div className='products-container'>
                    <div className='noProduct'>
                        <p>
                            {data.length === 0 && <p>Veuillez ajouter un produit !</p>}
                        </p>

                    </div>

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
                                        <button onClick={() => handleDelete(item.id)} className='delete-button'>Supprimer</button>
                                        <button onClick={() => navigate(`/update/${item.id}`)} className='edit-button'><AiOutlineEdit size={12} /><span className='text-delete'>Modifier</span></button>
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

