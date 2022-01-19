import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../CommonComponent/NavBar/NavBar'
import axios from '../../axios'
import { UserContext } from '../../App'
import Footer from '../CommonComponent/Footer/Footer'
const UsersOrders = () => {
    const [userOrderProduct, setUserOrderProduct] = useState([])
    const [loggedInUser] = useContext(UserContext)
        useEffect(() => {
            axios.get('/userOrderedProduct', {
                headers: {
                    email: loggedInUser.email
                }
              })
              .then(res => {
                setUserOrderProduct(res.data)
              })
        }, [loggedInUser.email])
    const AllUserProduct = userOrderProduct.map((product) => {
        const { img, name, price ,_id} = product
        return (
            <div key={_id}>
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
                                <p className="text-secondary">Your Products is on way</p>
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
                <h2 className="text-center">My Orders</h2>
                <br />
                {AllUserProduct}
            </div>
            <br />
            <Footer/>
        </div>
    )
}

export default UsersOrders
