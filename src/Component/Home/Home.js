import React from 'react'
import NavBar from '../CommonComponent/NavBar/NavBar'
import Carousel from './Carousel/Carousel'
import Card from './Card/Card'
import TopPromotion from './TopPromotion/TopPromotion'
import FeaturedNow from './FeaturedNow/FeaturedNow'

const Home = () => {
    return (
        <div>
            <NavBar />
            <div className="">
                <Carousel />
                <div className="container">
                   <div className="p-3 shadow ">
                       <Card/>
                   {/* <div className="row row-cols-1 row-cols-md-4 g-4">
                        <div className="col">
                            <Card/>
                        </div>
                        <div className="col">
                        <div className="col">
                            <Card/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="col">
                            <Card/>
                        </div>
                        </div>
                        <div className="col">
                        <div className="col">
                            <Card/>
                        </div>
                        </div>
                    </div> */}
                   </div>
                   <TopPromotion/>
                   <br />
                   <FeaturedNow/>
                </div>
                
                <br />
                <br />
                <br />
            </div>
        </div>
    )
}

export default Home
