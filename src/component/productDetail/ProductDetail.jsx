import React, { useEffect, useState } from 'react'
import './productDetail.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addCart } from '../../reducer/Cart'

function ProductDetail() {

    const Product = useSelector(state => state.Product.currentProduct)
    const Cart = useSelector(state => state.Cart.list);
    const [product, setProduct] = useState(Product);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const CartHandler = (id) => {
        if (Cart.some(item => item.id == id)) return;
        dispatch(addCart({ list: [...Cart, product] }))
    }

    useEffect(() => {
        const FetchProduct = async () => {
            let product = JSON.parse(window.localStorage.getItem("product"));
            if (!product) {
                navigate('/');
            }
            setProduct(product);
        }

        FetchProduct();

    }, [])

    return (
        <div className='productDetail'>
            <div className='popup'>
                <img src={product.image}></img>
                <div>
                    <div className='title'>
                        {product.title}
                        <p>
                            {product.description}
                        </p>
                    </div>
                    <div className='price'>
                        Rs. {product.price}
                    </div>
                    <button onClick={() => CartHandler(product.id)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail