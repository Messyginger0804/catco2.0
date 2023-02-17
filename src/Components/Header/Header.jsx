import React from 'react'
import './Header.css'
import logo from '../../assets/catco-logo.jpg'
import { AiOutlineFileSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateManage';
// import { auth } from '../../firebase';
import { signOut } from '@firebase/auth';
import { auth } from '../../firebase';


function Header() {
    const [{ cart, user }, setCart] = useStateValue();

    const handleAuth = () => {
        if (user) {
            signOut(auth);
        }
    }

    return (
        <div className='header'>
            <Link to='/'>
                <img className='header-logo' src={logo} alt='catco logo' />
            </Link>

            <div className="header-search">
                <input className='header-searchInput'
                /> <AiOutlineFileSearch className='header-search-icon' />
            </div>

            <div className="header-nav">
                <Link to='/login'>
                    <div onClick={handleAuth} className="header-option">
                        <span className='header-optionLine1'>{user ? 'welcome back' : 'welcome guest'}
                        </span>
                        <span className='header-optionLine2'>{user ? 'sign out' : 'sign in'}
                        </span>
                    </div>
                </Link>


                <div className="header-option">
                    <span className='header-optionLine1'>
                        returns
                    </span>
                    <span className='header-optionLine2'>
                        & orders
                    </span>
                </div>


                <div className="header-option">
                    <span className='header-optionLine1'>
                        your
                    </span>
                    <span className='header-optionLine2'>
                        acount
                    </span>
                </div>

                <div className="header-optioncart">
                    <Link to='/checkout'>
                        <AiOutlineShoppingCart className='header-search-icon' />
                    </Link>
                    <span className='header-optionLine2 header-cartCount'>{cart?.length}</span>

                </div >


            </div >
        </div >
    )
}

export default Header