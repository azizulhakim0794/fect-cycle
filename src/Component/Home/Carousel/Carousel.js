import React from 'react'
// import carousel02 from '../../../image/carousel/carousel01.jpg'
// import carousel01 from '../../../image/carousel/carousel02.jpg'
import bannerImg1 from '../../../image/carousel/text-slide-11.png'
import bannerImg2 from '../../../image/carousel/text-slide-21.png'
// import carousel03 from '../../../image/carousel/carousel03.jpg'
import './Carousel.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const Carousel = () => {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className=" carousel-img1 img-fluid" alt="..." >
                        <h1 className="text-warning carousel-text01">ADR V7 TRIPLE</h1>
                        <LazyLoadImage
                            alt="banner text"
                            className="banner-text"
                            src={bannerImg1}
                        />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className=" carousel-img2 img-fluid" alt="..." >
                        <h1 className="text-warning carousel-text01">REMEDU 9.8 EX</h1>
                        <LazyLoadImage
                            alt="banner text"
                            className="banner-text"
                            src={bannerImg2}
                        />
                    </div>
                </div>
                <div className="carousel-item">
                    <div className=" carousel-img3 img-fluid" alt="..." >
                        <h1 className="text-warning carousel-text01">FLASH VS800T</h1>
                        <LazyLoadImage
                            alt="banner text"
                            className="banner-text"
                            src={bannerImg1}
                        />
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Carousel
