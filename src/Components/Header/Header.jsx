import React from 'react'
import './Header.css'
import logo from '../../assets/catco-logo.jpg'
import { AiOutlineFileSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateManage';


function Header() {

    const [{ cart }, setCart] = useStateValue();

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
                <div className="header-option">
                    <span className='header-optionLine1'>
                        welcome guest
                    </span>
                    <span className='header-optionLine2'>
                        sign in
                    </span>
                </div>


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

                </div>


            </div>
        </div>
    )
}

export default Header