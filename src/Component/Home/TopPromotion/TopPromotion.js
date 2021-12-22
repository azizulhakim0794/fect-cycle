import React from 'react'
import './../Home.css'
import { useHistory } from 'react-router';
const TopPromotion = () => {
    const history = useHistory()
    const goShop = (id) =>{
        history.push('/productDetails/'+id)
    }
    return (
        <div>
            <br /><br />
            <h1 className="text-center">Top Promotion</h1>
            <br />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col ">
                    <div className="top-promotion-img1">
                        <button className="btn btn-warning cart-btn1 hide" onClick={()=> goShop('61c242d7ead84bbe00d3e236')}>SHOP</button>
                    </div>
                </div>
                <div className="col ">
                    <div className="top-promotion-img2">
                        <button className="btn btn-warning cart-btn2 hide" onClick={()=> goShop('61bb8e4d6059b39c00b14bb8')}>SHOP</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopPromotion
