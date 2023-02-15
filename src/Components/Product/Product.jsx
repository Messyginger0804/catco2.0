import React from 'react'
import './Product.css'
import { AiFillStar } from 'react-icons/ai';
import dummy from '../../assets/scratch-post.webp';


const Product = ({ id, title, image, price, rating }) => {

    return (
        <div className="product">
            <div className="product-info">
                <p>{title}</p>
                <p className='product-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className="product-rating">
                    {Array(rating).fill().map((_, i) => (
                        <p><AiFillStar className='rating-starts' /></p>

                    ))}

                </div>
            </div>
            <img src={dummy} alt="scratch-post" />

            <button>Add to Cart</button>
        </div>
    )
}

export default Product