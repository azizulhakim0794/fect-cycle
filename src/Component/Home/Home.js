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
                   <div className="p-3 shadow ">
                       <ProductCarousel/>
                   </div>
                   <TopPromotion/>
                   <br />
                   <FeaturedNow/>
                   </div>
                   <div className="">
                       <WhyChoose/>
                   </div>
                   <br/>
                   <HomeBlog/>
                   <br />
                
                <Footer />
            </div>
        </div>
    )
}

export default Home
