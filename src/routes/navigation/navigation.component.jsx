import { Outlet, Link } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';
import { ReactComponent as Logo } from "../../assets/logo.svg"
import CartDropdown from '../../components/cart-dropdown/cart-dropdown';
import CartIcon from '../../components/cart-icon/cart-icon.component';
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  const signOutHandler = async () => {
    await signOutUser();
  }

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to="/">
          {/* <Logo className="logo"/> */}
          <h1>Logo</h1>
        </Link>
        <div className='nav-links-container' >
          <Link className='nav-link' to="/shop">shop</Link>
          {
            (currentUser ?
              <Link className='nav-link' to="/authentication" onClick={signOutHandler}>sign out</Link> :
              <Link className='nav-link' to="/authentication">sign in</Link>
            )
          }

          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}

      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation;