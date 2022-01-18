import React, { useEffect, useState } from 'react'
import axios from '../../../axios';
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
const FeaturedNow = () => {
  const [cycleAce, setCycleAce] = useState(true);
  const [featureProduct, setFeatureProduct] = useState([])
  const [category, setCategory] = useState("cycle")
  const history = useHistory();
  const handleProductDetails = (event) => {
    history.push('/productDetails/' + event)
  }

  const allFeatureProductList = featureProduct.map((product) => {
    const { img, _id, name, price } = product
    return (<div className="col" key={_id} onClick={() => handleProductDetails(_id)}>
      <CardActionArea className="">
        {/* <Card className=""> */}
        <LazyLoadImage
          alt={name}
          src={img} // use normal <img> attributes as props
          title={name}
          className="card-img-top"
          effect="blur"
        />
        <CardContent className="Product_cardContent text-center">
          <Typography variant="h6" gutterBottom>{name}</Typography>
          <p className="text-center text-danger h5">${price}</p>
        </CardContent>
      </CardActionArea>
    </div>)
  });

  const handleBikeCategory = () => {
    setCategory('cycle')

    setCycleAce(false)
    if (!cycleAce) {
      setCycleAce(true)
    }
  }
  useEffect(() => {
    const abortCont = new AbortController()
    axios.get('/product/category/' + category)
      .then((res) => {
        setFeatureProduct(res.data)
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log('fetch Abort')
        }
      })
    return () => {
      abortCont.abort()
    }
  }, [category])
  const handleBikeAccCategory = () => {
    setCycleAce(true)
    if (cycleAce) {
      setCycleAce(false)
    }
    setCategory('cycle-accessories')
  }
  return (
    <div className="">
      <br />
      <br />
      <br />
      <h1 className="text-center fw-bolder">Featured Now</h1>
      <p className="text-center"><b className=""><span className={`me-4 cursor-p user-select-none ${cycleAce ? "text-warning" : ""}`} onClick={handleBikeCategory}>BIKES</span> <span className="border-end border-secondary"></span> <span className={`ms-4 cursor-p user-select-none ${!cycleAce ? "text-warning" : ""}`} onClick={handleBikeAccCategory}>BIKE'S ACO</span></b></p>
      <Carousel
        responsive={responsive}
      >
        {
          allFeatureProductList
        }
      </Carousel>

      <br />
      <br />
    </div>
  )
}

export default FeaturedNow
