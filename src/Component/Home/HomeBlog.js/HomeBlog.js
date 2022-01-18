import React from 'react'
import { Link } from 'react-router-dom'
import './HomeBlog.css'
const HomeBlog = () => {
    return (
        <div className="container">
            <h2 className="text-center">News & Blog</h2>
            <br />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col ">
                    <div className="home-blog-img2">
                        <p className="home-blog-text h5 text-white">Sticks and Stones May Bake My Bones</p>
                        <Link to="/blog/61e230f5b2145ee7c4f9e489"> <h5 className="home-blog-btn">Read More ➜</h5></Link>
                    </div>
                </div>
                <div className="col ">
                    <div className="home-blog-img1">
                        <p className="home-blog-text h5 text-white">Your Weakest Link: Use It To fashion</p>
                        <Link to="/blog/61e2304eb2145ee7c4f9e488"> <h5 className="home-blog-btn">Read More ➜</h5></Link>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default HomeBlog
