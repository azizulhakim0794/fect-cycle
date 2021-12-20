import axios from '../../../axios';
import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from 'react-router-dom';
import { CardActionArea, CardContent, Typography } from '@mui/material';
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
const ProductCarousel = () => {
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
        const { img, _id, name } = product
        return (<div className="col" onClick={() => handleProductDetails(_id)}>
            <CardActionArea className="">
                {/* <Card className=""> */}
                    <LazyLoadImage
                        alt={name}
                        src={img} // use normal <img> attributes as props
                        title={name}
                        className="card-img-top"
                       />
                    <CardContent className="Product_cardContent">
                        <Typography variant="h6" gutterBottom>{name}</Typography>
                    </CardContent>
                {/* </Card> */}
            </CardActionArea>
        </div>)
    });
    return (
        <Carousel
        responsive={responsive}
         >
            {
                allProductList
            }
        </Carousel>
    )
}

export default ProductCarousel
