import React, { useEffect, useState } from 'react'
import './cart.scss'
import { AddOutlined, DeleteOutlined, RemoveOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../reducer/Cart'


function Cart() {

    const Cart = useSelector(state => state.Cart.list)
    const dispatch = useDispatch();

    const [cart, setCart] = useState(Cart);
    const [currentID, setCurrentID] = useState('');
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(500);

    const QuantityHandler = (operation, id) => {
        setCurrentID(id);
        if (operation == "s") {
            if (quantity == 0) return;
            setQuantity(quantity - 1);
            setPrice(price - cart.price)
        }
        else {
            setQuantity(quantity + 1);
        }
    }

    const DeleteHandler = (id) => {
        let lists = cart.filter(item => item.id != id)
        dispatch(addCart({ list: lists }));
        setCart(lists);
    }

    useEffect(() => {

        const ModifyArray = () => {
            const updatedArr = cart.map(item => {
                return { ...item, quantity: 1 };
            });
            setCart(updatedArr);
        };

        const FetchCart = () => {
            let cart = JSON.parse(window.sessionStorage.getItem("cart"));
            setCart(cart);
        }
        FetchCart();
        ModifyArray();

    }, [])


    return (
        <div className='cart'>
            <div className='table'>
                <div className='head row'>
                    <div>S.N.</div>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Price</div>
                    <div>Option</div>
                </div>
                {cart.length > 0 ? cart.map((item, i) =>
                    <div className='row' key={item.id}>
                        <div>{i + 1}</div>
                        <div>{item.title}</div>
                        <div><button onClick={() => QuantityHandler("s", item.id)} ><RemoveOutlined></RemoveOutlined></button> {cart.quantity} <button onClick={() => QuantityHandler("a", item.id)}><AddOutlined></AddOutlined></button></div>
                        <div>{item.price * quantity}</div>
                        <div><button onClick={() => DeleteHandler(item.id)} ><DeleteOutlined></DeleteOutlined></button></div>
                    </div>) : <div className='not'>"Nothing Added to Cart"</div>}
            </div>
        </div>
    )
}

export default Cart