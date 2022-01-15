import axios from '../../../axios'
import React, { useContext, useEffect, useState } from 'react'
import './ProductDetails.css'
import { useHistory, useParams } from 'react-router-dom'
import NavBar from '../../CommonComponent/NavBar/NavBar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AddIcon from '@material-ui/icons/Add';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import facebookPng from '../../../image/logo-icon/facebook.png'
import gmailPng from '../../../image/logo-icon/gmail.png'
import linkedinPng from '../../../image/logo-icon/linkedin.png'
import twitterPng from '../../../image/logo-icon/twitter.png'
import Footer from '../../CommonComponent/Footer/Footer'
import { UserContext } from '../../../App'
// import PaymentProcess from '../../PaymentProcess/PaymentProcess';
const ProductDetails = () => {
    const [loggedInUser] = useContext(UserContext)
    let { id } = useParams()
    const [product, setProduct] = useState({})
    const [value, setValue] = useState(1)
    const history = useHistory()
    useEffect(() => {
        axios.get('/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
        return () => {
            setProduct({})
        }
    }, [id])
    const handleCountPlus = () => {
        if (value < 3) {
            setValue(value + 1)
        }
    }
    const handleCountMinus = () => {
        if (value > 1) {
            setValue(value - 1)
        }
    }

    const handleAddToCart = async () => {
        const { _id, price, details, brand, name, img, category } = product
        if (loggedInUser.isSignedIn) {
            await axios.post('/addToCart', {
                id: _id,
                name: name,
                details: details,
                category: category,
                brand: brand,
                price: price * value,
                quantity: value,
                img: img,
                email: loggedInUser.email
            })
                .then(res => {

                    if (res.status === 201) {
                        history.push('/addToCart')
                    }
                })
        }

        if (!loggedInUser.isSignedIn) {
            history.push('/login')
        }
    }

    // const handlePaymentOrder = async(e,paymentId) => {
    //     const { _id, price, details, brand, name, img, category } = product
    //     if (loggedInUser.isSignedIn) {
    //         await axios.post('/userOrderedProducts', {
    //             id: _id,
    //             name: name,
    //             details: details,
    //             category: category,
    //             brand: brand,
    //             price: price * value,
    //             quantity: value,
    //             img: img,
    //             email: loggedInUser.email,
    //             date: new Date(),
    //             paymentId:paymentId
    //         })
    //             .then(res => {

    //                 if (res.status === 201) {
    //                     history.push('/userOrder')
    //                 }
    //             })

    // }
    return (
        <div>
            <NavBar />
            <div className="container">
                <h5>HOME/{product.name}</h5>
                <div className="row">
                    <div className="col-xl-7 col-md-7 col-sm-12">
                        <LazyLoadImage
                            className="img-fluid product-details-img"
                            effect="blur"
                            alt={product.name}
                            src={product.img}
                            title={product.name} />
                    </div>
                    <div className="col-xl-5 col-md-5 col-sm-12">
                        <h3>{product.name}</h3>
                        <p></p>
                        <h4 className="text-danger">${product.price * value}</h4>
                        <p className="mt-3 text-secondary">
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you.
                        </p>
                        <p className="text-success mt-3">5 in stock</p>
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-4 text-dark h5"> <AddIcon onClick={handleCountPlus} className="me-2 cursor " />{value}<RemoveOutlinedIcon onClick={handleCountMinus} className="ms-2 cursor" /></div>
                            <div className="col-md-4 col-sm-4 col-4"><button className="btn btn-danger" data-bs-toggle="modal"  data-bs-target="#BuyNowModal">BUY NOW</button></div>
                            <div className="col-md-4 col-sm-4 col-4"> <button className="btn btn-warning" onClick={handleAddToCart}>ADD TO CART</button></div>
                        </div>
                        <hr />
                        <br />
                        <div>
                            <p><b>SKU:</b> <span className="text-secondary">MEGA-JEWE-12</span></p>
                            <p><b>Categories:</b> <span className="text-secondary text-uppercase">{product.category}</span></p>
                            <p><b>Tags:</b> <span className="text-secondary">Brogues & Oxfords, Espadrilles, glasses</span></p>
                            <p><b>Brands:</b> <span className="text-secondary">FACT</span></p>
                        </div>
                        <div><a href="https://www.facebook.com" className='text-decoration-none'><LazyLoadImage className="img-fluid media-icon mx-1" effect="blur" alt="Social media icon" src={facebookPng} title="Social media icon" /></a>
                            <a className='text-decoration-none' href="https://twitter.com/?lang=en"><LazyLoadImage className="img-fluid media-icon mx-1" effect="blur" alt="Social media icon" src={twitterPng} title="Social media icon" /> </a>
                            <a className='text-decoration-none' href="https://www.linkedin.com/feed/"> <LazyLoadImage className="img-fluid media-icon mx-1" effect="blur" alt="Social media icon" src={linkedinPng} title="Social media icon" /> </a>
                            <a className='text-decoration-none' href="https://accounts.google.com"> <LazyLoadImage className="img-fluid media-icon mx-1" effect="blur" alt="Social media icon" src={gmailPng} title="Social media icon" /></a>
                        </div>
                    </div>
                </div>
                {/* MODAL Start*/}
                <div className="modal fade" id="BuyNowModal" aria-hidden="true" aria-labelledby="BuyNowModal" tabIndex="-1">
                    <div className=" modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="BuyNowModal">{product.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                This can take an hour
                                {/* <PaymentProcess handlePaymentOrder={handlePaymentOrder}/> */}
                            </div>
                            {/* <div className="modal-footer">
                                <button className="btn btn-primary" data-bs-target="#BuyNowModal" data-bs-toggle="modal">Open second modal</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                {/* MODAL Finish */}
            </div>
            <br />
            <Footer />

        </div>
    )
}

export default ProductDetails ;
