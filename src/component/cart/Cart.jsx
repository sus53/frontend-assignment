import React, { useEffect, useState } from 'react'
import './cart.scss'
import { AddOutlined, DeleteOutlined, RemoveOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../reducer/Cart'


function Cart() {

    const Cart = useSelector(state => state.Cart.list)
    const dispatch = useDispatch();

    const [cart, setCart] = useState(Cart);
    const [itemTotal, setItemTotal] = useState();
    const [total, setTotal] = useState(0);

    const QuantityHandler = (operation, id) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.id === id) {
                    const newQuantity = operation === 's' ? item.quantity - 1 : item.quantity + 1;
                    if (newQuantity < 1) return { ...item, quantity: 0 };;
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
        dispatch(addCart({ list: cart }));
    }

    const DeleteHandler = (id) => {
        let lists = cart.filter(item => item.id != id)
        dispatch(addCart({ list: lists }));
        setCart(lists);
    }

    useEffect(() => {
        const AddTotal = () => {
            let tot = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
            setItemTotal(tot.toFixed(2));
            setTotal((tot + 200).toFixed(2));
        }
        AddTotal();
    }, [cart])


    useEffect(() => {
        const FetchCart = () => {
            let cart = JSON.parse(window.localStorage.getItem("cart"));
            setCart(cart);
        }
        FetchCart();
    }, [])


    return (
        <div className='cart'>
            <div className='table'>
                <div className='head row'>
                    <div>S.N.</div>
                    <div>Product</div>
                    <div>Quantity</div>
                    <div>Unit Price</div>
                    <div>Total Price</div>
                    <div>Option</div>
                </div>
                {cart.length > 0 ? cart.map((item, i) =>
                    <div className='row' key={item.id}>
                        <div>{i + 1}</div>
                        <div>{item.title}</div>
                        <div><button onClick={() => QuantityHandler("s", item.id)} ><RemoveOutlined></RemoveOutlined></button> {item.quantity} <button onClick={() => QuantityHandler("a", item.id)}><AddOutlined></AddOutlined></button></div>
                        <div>{item.price}</div>
                        <div>{item.price * item.quantity}</div>
                        <div><button onClick={() => DeleteHandler(item.id)} ><DeleteOutlined></DeleteOutlined></button></div>
                    </div>) : <div className='not'>"Nothing Added to Cart"</div>}
            </div>
            <div className='final-cart'>
                <div className='heading'>
                    Summary
                </div>
                <div>
                    Items Total : <span>{itemTotal}</span>
                </div>
                <div>
                    Delivery Charge : <span>200</span>
                </div>
                <div>
                    Total Charge : <span>{total}</span>
                </div>
                <div>
                    <button>
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Cart