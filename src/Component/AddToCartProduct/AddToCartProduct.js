import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../CommonComponent/NavBar/NavBar'
import axios from '../../axios'
import { UserContext } from '../../App'
import Footer from '../CommonComponent/Footer/Footer'
const AddToCartProduct = () => {
    const [userAddToCartProduct, setUserAddToCartProduct] = useState([])
    const [loggedInUser] = useContext(UserContext)
    useEffect(() => {
        axios.get('/addToCart', {
            headers: {
                email: loggedInUser.email
            }
        })
            .then(res => {
                setUserAddToCartProduct(res.data)
            })
    }, [loggedInUser.email])
    const handleProductCancel = async (data) => {
        document.getElementById(`order${data}`).style.display = 'none'
       await axios.delete('/addToCart', {
            headers: {
                id: data
            }
        })
            .then(res => {
                console.log(res.data)
            })
    }
    const AddToCartProducts = userAddToCartProduct.map((product) => {
        const { img, _id, name, price } = product
        return (
            <div key={_id} id={`order${_id}`}>
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h4 className="card-title">{name}</h4>
                                <h5 className="text-danger">${price}</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div className="row"><div className="col-md-6 col-sm-6 col-6 text-end"><button className="btn btn-warning">BUY NOW</button></div><div className="col-md-6 col-sm-6 col-6"><button className="btn btn-danger" onClick={() => handleProductCancel(_id)}>CANCEL</button></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <div>
            <NavBar />
            <div className="container">
                <h2 className="text-center">My Cart</h2>
                <br />
                {AddToCartProducts}
            </div>
            <br />
            <Footer />
        </div>
    )
}

export default AddToCartProduct;

