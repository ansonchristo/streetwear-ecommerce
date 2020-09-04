import React from 'react';
import './header.styles.scss';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../components/assets/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden} from '../../redux/cart /cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';


const Header = ({currentUser, hidden}) => (
    <div className = 'header'>
        <Link classname = 'logo-container' to= "/">
            <Logo className= 'logo' />
        </Link>
    <div className = 'options'>
        <Link className = 'option' to = '/shop' >
            SHOP
        </Link>
        <Link className = 'option' to = '/shop' >
            CONTACT
        </Link>
        {
            currentUser ? 
            (<div className = 'option' onClick = {() => auth.signOut()}> SIGN OUT </div>)
            :
            (<Link className = 'option' to ='./signin'> SIGN IN</Link>)
        }
        <CartIcon/>
    </div>
    {hidden ? null : <CartDropdown/>}

    </div>
);

//state is the root reducer
//createstructuredselector allows us to not repeat code 
//e.g currentUser: selectCurrentUser(state); 
//we need the state to pass it to the selector 
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);