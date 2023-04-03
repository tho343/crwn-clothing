import { Routes, Route,Outlet } from 'react-router-dom';

import './App.css';
import './categories.styles.scss';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication';
import Cart from './routes/cart/cart.component';
import Shop from './routes/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

const App = ()=> {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={ <Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="authentication" element={<Authentication/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="checkout" element={<Checkout/>}/>
      </Route>
      
    </Routes>
  )
}

export default App;
