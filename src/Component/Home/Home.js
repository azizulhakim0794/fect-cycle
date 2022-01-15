import React from 'react'
import NavBar from '../CommonComponent/NavBar/NavBar'
import Carousel from './Carousel/Carousel'
import TopPromotion from './TopPromotion/TopPromotion'
import FeaturedNow from './FeaturedNow/FeaturedNow'
import ProductCarousel from './ProductCarousel/ProductCarousel'
import Footer from '../CommonComponent/Footer/Footer'
import './Home.css'
import HomeBlog from './HomeBlog.js/HomeBlog'
import WhyChoose from './WhyChoose/WhyChoose'
const Home = () => {
    return (
        <div className="">
            <NavBar />
            <div className="">
                <Carousel />
                <div className="container">
                    <ProductCarousel />
                    <TopPromotion />
                    <FeaturedNow />
                </div>
                <WhyChoose />
                <HomeBlog />
                <Footer />
            </div>
        </div>
    )
}

export default Home
