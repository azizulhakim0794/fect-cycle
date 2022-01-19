import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../CommonComponent/NavBar/NavBar'
import './Shop.css'
import Card from './../Home/Card/Card'
import Avatar from '@mui/material/Avatar';
import { UserContext } from '../../App';
import Footer from '../CommonComponent/Footer/Footer';
import { useHistory } from 'react-router-dom';
import axios from '../../axios';
const Shop = () => {
    const [loggedInUser] = useContext(UserContext)
    const [allUserProducts, setAllUserProducts] = useState([])
    const [allCartProducts, setAllCartProducts] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get('/addToCart', {
            headers: {
                email: loggedInUser.email
            }
        })
            .then(res => {
                setAllCartProducts(res.data)
            })
    }, [loggedInUser.email])
    useEffect(() => {
        axios.get('/userOrderedProduct', {
            headers: {
                email: loggedInUser.email
            }
        })
            .then(res => {
                setAllUserProducts(res.data)
            })
    }, [loggedInUser.email])
    return (
        <div>
            <NavBar />

            <div className="container">
                {loggedInUser.isSignedIn && <div className="text-center m-auto">
                    <br />
                    <div className="row shadow p-1">
                        {allCartProducts.length ? <div className="col-md-4 col-sm-4 col-4 btn" onClick={() => history.push('/addToCart')}>ADD TO CART</div> :
                        <div className="col-md-4 col-sm-4 col-4 btn" data-bs-toggle="modal" data-bs-target="#cartModal">ADD TO CART</div>}
                       {allUserProducts.length ? <div className="col-md-4 col-sm-4 col-4 btn" onClick={() => history.push('/userOrder')}>ORDERED PRODUCT</div> :
                        <div className="col-md-4 col-sm-4 col-4 btn" data-bs-toggle="modal" data-bs-target="#productModal" >ORDERED PRODUCT</div>}
                        <div className="col-md-4 col-sm-4 col-4 btn"><div className="d-flex justify-content-end"><Avatar alt={loggedInUser.name} src={loggedInUser.photo} /></div></div>
                    </div>
                    <br />
                    <br />
                </div>}
                <br />
                <input className="form-control form-control-lg" type="text" placeholder="Search..." aria-label=".form-control-lg example"></input>
                <br />
                <Card />
            </div>
            {/* cart Modal */}
            <div className="modal fade" id="cartModal" tabIndex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="cartModalLabel">Add to Cart</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            You Dont't Have Any Products in your Cart please Add one and try again.
                            <div className="text-center"><button className="btn btn-warning" data-bs-dismiss="modal" aria-label="Close">Ok</button></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* finish Cart Modal */}

            {/* Ordered Modal */}
            <div className="modal fade" id="productModal" tabIndex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="productModalLabel">My Orders</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            You Dont't order Any Products please Add one and try again. <br /> <br />
                            <div className="text-center"><button className="btn btn-warning" data-bs-dismiss="modal" aria-label="Close">Ok</button></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* finish Ordered Modal */}
            <Footer />
        </div>
    )
}

export default Shop