/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './CheckoutProduct.css'
import { AiFillStar } from 'react-icons/ai';
import { useStateValue } from '../../StateManage';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ cart }, setCart] = useStateValue();

    const removeFromCart = () => {
        // this function removes the item from cart
        // why wont you remove!!!! 
        setCart({
            type: 'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className='checkoutProduct-image' src={image} alt="product-image" />

            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProduct-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct-rating">
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p><AiFillStar className='rating-stars' /></p>
                        ))}
                </div>
                <button onClick={removeFromCart}>remove</button>
            </div>


        </div>

    )
}

export default CheckoutProduct