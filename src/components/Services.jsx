import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img from "../assets/3.jpg";
import img1 from "../assets/4.jpg";
const Services = () => {
    return (
        <div className="services">
            <Carousel infiniteLoop autoPlay showStatus="false" showArrows="false" showThumbs={false} interval={3000} >
                <div>
                    <img src={img} alt="" />
                    <p className="legend">fullstack</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <p className="legend">peer-to-peer Services</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <p className="legend">fullstack</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <p className="legend">peer-to-peer Services</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <p className="legend">fullstack</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <p className="legend">peer-to-peer Services</p>
                </div>
                <div>
                    <img src={img} alt="" />
                    <p className="legend">fullstack</p>
                </div>
                <div>
                    <img src={img1} alt="" />
                    <p className="legend">peer-to-peer Services</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Services