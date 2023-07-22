import React, { useEffect, useState } from 'react'
import './navbar.scss';
import Logo from '../../assets/img/logo.png'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../reducer/Product';
import { GetProduct } from '../../function/Product';


function Navbar() {

    const Product = useSelector((state) => state.Product.list);
    const dispatch = useDispatch();

    const fetchProduct = async () => {
        let fetched = await GetProduct();
        dispatch(addProduct({ list: fetched }))
    }

    const SearchProduct = (search, product) => {
        console.log(search.length)
        let lists = product.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase())
        );
        if (search.length === 0)
            fetchProduct()
        else
            dispatch(addProduct({ list: lists }));
    }


    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/' className='link' ><img src={Logo} ></img></Link>
            </div>
            <div className='searchbar'>
                <input type='text' placeholder='Search products' onChange={(e) => { SearchProduct(e.target.value, Product) }} />
                <button><SearchOutlined></SearchOutlined></button>
            </div>
            <Link className='link' to={'/cart'}><button><ShoppingCartOutlined /></button></Link>
        </div >
    )
}

export default Navbar