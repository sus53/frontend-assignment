import './App.scss';
import Navbar from './component/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './component/product/Product';
import { useEffect } from 'react';
import { GetProduct } from './function/Product';
import { useDispatch } from 'react-redux';
import { addProduct } from './reducer/Product';
import ProductDetail from './component/productDetail/ProductDetail';
import Cart from './component/cart/Cart';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {

    const getProduct = async () => {
      const product = await GetProduct();
      dispatch(addProduct({ list: product }));
    }
    getProduct();
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/productDetail' element={<ProductDetail />} />
          <Route path='/cart' element={<Cart />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
