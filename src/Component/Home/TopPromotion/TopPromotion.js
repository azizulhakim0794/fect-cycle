import React from 'react'
import './TopPromotion.css'
import { useHistory } from 'react-router';
import image1 from '../../../image/banner/banner-01.png'
import image2 from '../../../image/banner/banner-02.png'
const TopPromotion = () => {
    const history = useHistory()
    const goShop = (id) => {
        history.push('/productDetails/' + id)
    }
    return (
        <div>
            <br /><br />
            <h1 className="text-center">Top Promotion</h1>
            <br />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                <div className="top_pro_card2 card m-auto">
                            <div className="top_pro_card-content card-content">
                                <h5 className="top_pro_card-title card-title">TREK RACING HELMET</h5>
                                <p className="top_pro_card-text card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-warning" onClick={() => goShop('61bb8e4d6059b39c00b14bb8')}>SHOP</button>
                            </div>
                    </div>
                </div>
                <div className="col ">
                    <div className="top_pro_card card m-auto">
                            <div className="top_pro_card-content card-content">
                                <h5 className="top_pro_card-title card-title">Dynacraft Vertical Electroshock</h5>
                                <p className="top_pro_card-text card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className="btn btn-warning" onClick={() => goShop('61bb8e4d6059b39c00b14bb8')}>SHOP</button>
                            </div>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}

export default TopPromotion
