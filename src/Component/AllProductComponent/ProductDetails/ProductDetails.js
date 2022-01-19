import axios from '../../../axios'
import React, { useContext, useEffect, useState } from 'react'
import './ProductDetails.css'
import { useHistory, useParams } from 'react-router-dom'
import NavBar from '../../CommonComponent/NavBar/NavBar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AddIcon from '@material-ui/icons/Add';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import Footer from '../../CommonComponent/Footer/Footer'
import { UserContext } from '../../../App'
import ProductDetailsCarouselCard from './ProductDetailsCarouselCard'
import PaymentProcess from '../../PaymentProcess/PaymentProcess';
import SocialIcon from '../../CommonComponent/SocialIcon/SocialIcon'
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
    // console.log(product.category)

    const handlePaymentOfOrder = async(e,paymentId) => {

        // const allData = { ...info, date: new Date(), paymentId: paymentId,plans:id,userEmail:userData.email}
        const { _id, price, details, brand, name, img, category } = product
        if (loggedInUser.isSignedIn) {
            await axios.post('/userOrderedProduct', {
                id: _id,
                name: name,
                details: details,
                category: category,
                brand: brand,
                price: price * value,
                quantity: value,
                img: img,
                date:new Date(),
                paymentId:paymentId,
                email: loggedInUser.email
            })
                // .then(res => {

                //     if (res.status === 201) {
                //         history.push('/userOrder')
                //         console.log(res.status)
                //     }
                // })

                e.preventDefault()
        }

        if (!loggedInUser.isSignedIn) {
            history.push('/login')
        }
        console.log("success")

    }
    const handleBuyNow = (id) => {
       if(!loggedInUser.isSignedIn){
        history.push('/login')
       }
    }
    return (
        <div>
            <NavBar />
            <div className="container">
                <h5>HOME/Product Details</h5>
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
                           {loggedInUser.isSignedIn ? <div className="col-md-4 col-sm-4 col-4"><button className="btn btn-danger " data-bs-toggle="modal"   data-bs-target="#BuyNowModal">BUY NOW</button></div>:
                            <div className="col-md-4 col-sm-4 col-4"><button className="btn btn-danger "onClick={handleBuyNow} data-bs-target="#BuyNowModal">BUY NOW</button></div>}
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
                        <SocialIcon/>
                    </div>
                </div>
                {/* MODAL Start*/}
                {/* <PrivateRoute> */}
                <div className="modal fade" id="BuyNowModal" aria-hidden="true" aria-labelledby="BuyNowModal" tabIndex="-1">
                    <div className=" modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="BuyNowModal">{product.name}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <PaymentProcess handlePaymentOfOrder={handlePaymentOfOrder}/>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </PrivateRoute> */}
                {/* MODAL Finish */}
            </div>
            <br />
            <br />
                <div className="details container">
                    <h2 className="">
                        Details :
                    </h2>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt atque blanditiis cum esse numquam quia eos, vero 
                        ex distinctio quos iste voluptatem dicta, sint optio fugiat perspiciatis sed maiores aperiam non? Quaerat modi 
                        autem inventore nam, dolorum optio, quam voluptatibus sed omnis natus culpa! Culpa.</p>
                </div>
                    <div className="container">
                        <br />
                        <br />
                        <h1 className="text-center">Related Products</h1>
                        <ProductDetailsCarouselCard productCategory={product.category}/>
                        <br />
                        <br />
                    </div>
            <Footer />

        </div>
    )
}

export default ProductDetails ;
