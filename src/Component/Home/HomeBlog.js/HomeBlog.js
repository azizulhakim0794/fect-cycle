import React from 'react'
import { Link } from 'react-router-dom'
const HomeBlog = () => {
    return (
        <div>
            <h2 className="text-center">News & Blog</h2>
            <br />
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col ">
                    <div className="home-blog-img1">
                        <p className="home-blog-text h5 text-white">Sticks and Stones May Bake My Bones</p>
                        <Link to="/blog"> <h5 className="home-blog-btn1 cursor text-white">Read More ➜</h5></Link>
                    </div>
                </div>
                <div className="col ">
                    <div className="home-blog-img2">
                        <p className="home-blog-text h5 text-white">Your Weakest Link: Use It To fashion</p>
                        <Link to="/blog"> <h5 className="home-blog-btn2 cursor text-white">Read More ➜</h5></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeBlog
