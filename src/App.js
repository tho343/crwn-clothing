import { Routes, Route,Outlet } from 'react-router-dom';
import './App.css';
import './categories.styles.scss';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';
import Cart from './routes/cart/cart.component';
const Shop = ()=>{
  return(
    <div>
      <h1>I am the shop</h1>
    </div>
  )
}
const App = ()=> {
  return(
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={ <Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Route>
      
    </Routes>
  )
}

export default App;
