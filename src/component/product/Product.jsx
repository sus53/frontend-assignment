import React, { useEffect, useState } from 'react'
import './product.scss'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetail from '../productDetail/ProductDetail';
import { useNavigate } from 'react-router-dom';
import { addCurrentProduct } from '../../reducer/Product';

function Product() {

    const Product = useSelector(state => state.Product.list);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const DetailHandler = (e, product) => {
        dispatch(addCurrentProduct({ currentProduct: product }))
        navigate('/productDetail');
    }

    return (
        <div className='product'>
            {Product && Product.map(product =>
                <div className='item' key={product.id} onClick={(e) => DetailHandler(e, product)} >
                    <img src={product.image} ></img>
                    <div>
                        <div className='title'>{product.title}</div>
                        <div className='price'><span>Rs. </span>{product.price}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Product