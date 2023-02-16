import React from 'react'
import './Product.css'
import { AiFillStar } from 'react-icons/ai';
import dummy from '../../assets/scratch-post.webp';
import { useStateValue } from '../../StateManage';


const Product = ({ id, title, image, price, rating }) => {

    const [{ cart }, setCart] = useStateValue();

    console.log('this should be my cart-----', cart)


    const addToCart = () => {
        // dispatch the item into the data layer
        setCart({
            type: 'ADD-TO-CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });

    };


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

            <button onClick={addToCart}>Add to Cart</button>
        </div >
    )
}

export default Product