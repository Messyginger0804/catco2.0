import React from 'react'
// import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useStateValue } from '../../StateManage'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

const banner = 'https://www.petlandiowacity.com/wp-content/uploads/2022/06/kittensuphero.jpg'

const Checkout = () => {
    const [{ cart }] = useStateValue();


    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className='checkout-banner' src={banner} alt="checkout banner" />
                <h2 className='checkout-title'>
                    your shopping cart has ({cart.length} items)
                </h2>

                {cart.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}

                    />

                ))}

                {/* <CheckoutProduct/> */}
                {/* <CheckoutProduct/> */}
                {/* <CheckoutProduct/> */}
                {/* <CheckoutProduct/> */}


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