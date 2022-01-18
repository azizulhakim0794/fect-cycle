import React, { useContext, useEffect } from 'react'
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
    const history = useHistory()
   useEffect(() => {
    axios.get('/')
   },[])
    return (
        <div>
            <NavBar />

            <div className="container">
                {loggedInUser.isSignedIn && <div className="text-center m-auto">
                    <br />
                    <div className="row shadow p-1">
                        <div className="col-md-4 col-sm-4 col-4 btn" onClick={()=> history.push('/addToCart')}>ADD TO CART</div>
                        <div className="col-md-4 col-sm-4 col-4 btn" onClick={()=> history.push('/userOrder')}>ORDERED PRODUCT</div>
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
            <Footer/>
        </div>
    )
}

export default Shop