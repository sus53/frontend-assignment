import React from 'react'
import './navbar.scss';
import Logo from '../../assets/img/logo.png'
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/' className='link' ><img src={Logo} ></img></Link>
            </div>
            <div className='searchbar'>
                <input type='text' placeholder='Search products' />
                <button><SearchOutlined></SearchOutlined></button>
            </div>
            <Link className='link' to={'/cart'}><button><ShoppingCartOutlined /></button></Link>
        </div >
    )
}

export default Navbar