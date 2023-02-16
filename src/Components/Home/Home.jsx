import React from 'react'
import Product from '../Product/Product'
import './Home.css'
// import logo from '../../assets/catco-logo.jpg'
import banner from '../../assets/catco-banner.jpg'
import image from '../../assets/scratch-post.webp'


const Home = () => {
    return (
        <div className='home'>
            <img className='home-image-banner' src={banner} alt="catco-logo" />
            <div className="home-container">
                <div className="home-row">
                    <Product
                        id='5'
                        title={'MECOOL Cat Scratching Post Premium Basics Kitten Scratcher Sisal Scratch Posts with Hanging Ball 22in for Kittens or Smaller Cats (22 inches for Kitten, Beige) '}
                        price={29.99}
                        image={image}
                        rating={3}
                    />
                    <Product
                        id='5'
                        title={'MECOOL Cat Scratching Post Premium Basics Kitten Scratcher Sisal Scratch Posts with Hanging Ball 22in for Kittens or Smaller Cats (22 inches for Kitten, Beige)'}
                        price={29.99}
                        image={image}
                        rating={3} />
                </div>
                <div className="home-row">
                    <Product
                        id='5'
                        title={'MECOOL Cat Scratching Post Premium Basics Kitten Scratcher Sisal Scratch Posts with Hanging Ball 22in for Kittens or Smaller Cats (22 inches for Kitten, Beige)'}
                        price={29.99}
                        image={image}
                        rating={3} />
                    <Product
                        id='5'
                        title={'MECOOL Cat Scratching Post Premium Basics Kitten Scratcher Sisal Scratch Posts with Hanging Ball 22in for Kittens or Smaller Cats (22 inches for Kitten, Beige)'}
                        price={29.99}
                        image={image}
                        rating={3} />
                    <Product
                        id='5'
                        title={'MECOOL Cat Scratching Post Premium Basics Kitten Scratcher Sisal Scratch Posts with Hanging Ball 22in for Kittens or Smaller Cats (22 inches for Kitten, Beige)'}
                        price={29.99}
                        image={image}
                        rating={3} />
                    <Product
                        id='5'
                        title={'MECOOL Cat Scratching Post Premium Basics Kitten Scratcher Sisal Scratch Posts with Hanging Ball 22in for Kittens or Smaller Cats (22 inches for Kitten, Beige)'}
                        price={29.99}
                        image={image}
                        rating={3} />
                </div>
                <div className="home-row">
                    <Product
                        id='5'
                        title={'MECOOL Cat Scratching Post Premium Basics Kitten Scratcher Sisal Scratch Posts with Hanging Ball 22in for Kittens or Smaller Cats (22 inches for Kitten, Beige)'}
                        price={29.99}
                        image={image}
                        rating={3} />
                    <Product
                        id='5'
                        title={'MECOOL Cat Scratching Post Premium Basics Kitten Scratcher Sisal Scratch Posts with Hanging Ball 22in for Kittens or Smaller Cats (22 inches for Kitten, Beige)'}
                        price={29.99}
                        image={image}
                        rating={3} />
                </div>
            </div>
        </div>
    )
}

export default Home