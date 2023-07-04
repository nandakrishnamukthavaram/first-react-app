import React from 'react'
import vg from "../assets/2.webp"
import {
    AiFillGoogleCircle,
    AiFillInstagram,
    AiFillYoutube,
    AiFillAmazonCircle
} from "react-icons/ai"
const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>TechyStar</h1>
                    <p>Solution to all your problems</p>
                </main>
            </div>
            <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam laboriosam voluptatum explicabo ea nulla perferendis iusto hic animi error distinctio.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>
                        who we are..
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quo ratione alias quidem iusto ipsum odit, accusamus sit illum commodi veritatis laborum. Ratione quos corrupti iure quo sequi harum qui.</p>
                </div>
            </div>
            <div className="home4" id='brands'>
                <div>
                    <h1>brands</h1>
                    <article>
                        <div style={{ animationDelay: '0s' }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: '200ms' }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: '400ms' }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: '600ms' }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
};

export default Home;