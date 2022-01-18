import axios from '../../../axios'
import React, { useEffect, useState } from 'react'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { CardActionArea, CardContent, Typography, } from '@mui/material';
import { useHistory } from 'react-router-dom';
// import Loading from '../../CommonComponent/Loading/Loading';
const Card = () => {
    const [products, setProducts] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios.get('/product')
            .then((res) => {
                setProducts(res.data)
            })
    }, [products])

    const handleProductDetails = (event) => {
        history.push('/productDetails/' + event)
    }

    const allProductList = products.map((product) => {
        const { img, _id, name,price } = product
        return (<div className="col" key={_id} onClick={() => handleProductDetails(_id)}>
            <CardActionArea className="">
                {/* <Card className=""> */}
                <LazyLoadImage
                    alt={name}
                    src={img} // use normal <img> attributes as props
                    title={name}
                    className="card-img-top"
                />
                <CardContent className="Product_cardContent">
                <p className="h6 text-center">{name}</p>
                    <p className="h6 text-danger text-center"> ${price}</p>
                </CardContent>
                {/* </Card> */}
            </CardActionArea>
        </div>)
    });



    return (

        <div className="row row-cols-1 row-cols-md-4 g-4">
            {
                allProductList
            }
        </div>


    )
}

export default Card
