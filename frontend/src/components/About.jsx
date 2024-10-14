import React from 'react';
import { HiOutlineArrowNarrowDown, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section className='about' id='about'>
            <div className='container'>
                <div className='banner'>
                    <div className='top'>
                        <h1 className='heading'>ABOUT US</h1>
                        <p>The only thing we're serious about is food</p>
                    </div>
                    <p className='mid'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur vel sed assumenda odio, recusandae veniam quibusdam illo. Cum neque libero necessitatibus, eaque fugit fuga ipsa harum mollitia aperiam tempore. Culpa, ullam eius. Repellat hic iste, explicabo asperiores at, nostrum vitae vero maxime modi aperiam necessitatibus quibusdam. Voluptatem perferendis dignissimos nemo.
                    </p>
                    <Link to={"/"}>
                    Explore Menu{" "} 
                    <span>
                        <HiOutlineArrowNarrowRight />
                    </span>
                    </Link>
                </div>
                <div className='banner'>
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    )
}

export default About;