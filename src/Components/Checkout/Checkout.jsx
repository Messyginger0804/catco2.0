import React from 'react'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

const banner = 'https://www.petlandiowacity.com/wp-content/uploads/2022/06/kittensuphero.jpg'

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className='checkout-banner' src={banner} alt="checkout banner" />
                <h2 className='checkout-title'>
                    your shopping cart
                </h2>
            </div>
            <div>
            </div>

            <div className="checkout-right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout