import React from 'react'
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css'
import { useStateValue } from '../../StateManage';
import { getCartTotal } from '../../reducer'
import image from '../../assets/cat-shopping.jpg'
// import { AiOutlineShoppingCart } from 'react-icons/ai';

function Subtotal() {
    const [{ cart }, setCart] = useStateValue();



    return (
        <div className="subtotal">
            <img className='cart-image' src={image} alt="cat shopping image" />
            <p>
                YOUR SUBTOTAL
            </p>
            <CurrencyFormat
                text={(value) => (
                    <strong>{value}</strong>)}

                decimalScale={2}
                value={getCartTotal(cart)}
                displayType={true}
                thousandSeperator={true}
                prefix={'$'}
            />

            {/* <p>sub totale goes here</p> */}

            <button>Proceed to Checkout</button>

        </div >
    )
}

export default Subtotal;