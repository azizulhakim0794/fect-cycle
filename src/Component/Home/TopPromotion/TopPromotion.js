import React from 'react'
import banner1 from '../../../image/banner/banner-01.png'
import banner2 from '../../../image/banner/banner-02.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TopPromotion = () => {
    return (
        <div>
            <br /><br />
            <h1 className="text-center">Top Promotion</h1>
            <br />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="top-promotion-img">
                    <LazyLoadImage
                        alt="Banner 2"
                        className="img-fluid"
                        src={banner1}
                    />
                        <button className="btn btn-warning pro-btn">SHOP</button>
                    </div>
                </div>
                <div className="col">
                    <LazyLoadImage
                        alt="Banner 2"
                        className="img-fluid "
                        src={banner2}
                    />
                </div>
            </div>
        </div>
    )
}

export default TopPromotion
