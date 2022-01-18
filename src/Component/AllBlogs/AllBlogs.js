import axios from './../../axios'
import React, { useEffect, useState } from 'react'
import NavBar from './../CommonComponent/NavBar/NavBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarWeek, faComment} from '@fortawesome/free-solid-svg-icons';
import SocialIcon from '../CommonComponent/SocialIcon/SocialIcon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const AllBlogs = () => {
    const [allBlog,setAllBlog] = useState([])
    useEffect(() => {
        axios.get('/blogs')
        .then((res)=>{
            setAllBlog(res.data)
        })
    },[])

    const allBlogsComponent = allBlog.map((data) =>{
        const {img , title} = data
        return(
            <div className="">
                <div className="container">
                    <br />
                    <br />
                    <br />
                <h2 className="">{title}</h2>
                <div className="text-muted my-3">
                    <span className=""><FontAwesomeIcon icon={faCalendarWeek}/> Oct 12, 2018</span> , <span className=""> <FontAwesomeIcon icon={faComment}/> 0 message</span>
                </div>
                <SocialIcon/>
                <br />
                <LazyLoadImage className="img-fluid w-100 blog-img1" src={img} alt="" title={title}/>
                <br /><br /><br />
                <p className="text-muted"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum beatae facilis a saepe modi similique!
                     Unde ex delectus quos, repellendus ipsum quae recusandae? Non similique veritatis, culpa voluptates eos rem 
                     minus amet eaque a voluptatem laudantium in voluptate eum impedit vel provident beatae voluptatibus vitae
                      molestiae suscipit architecto tempora dolorum! Dolor eligendi quasi excepturi? Magni mollitia cumque ipsum 
                      obcaecati cupiditate. Tempora facere cumque et! Quasi,</p><br />
                      <h4 className="border-start border-warning border-4"> <p className="ms-3"> Lorem ipsum numquam expedita delectus eligendicum non quam.
                          suscipit! Reiciendis at, deleniti praesentium modi corrupti ipsum.</p></h4><br />

                          <h3>Important Notice</h3>
                       <p className="text-secondary">architecto quam dolorum nisi assumenda distinctio. Odit saepe libero magni ipsam perferendis placeat cupiditate molestias laudantium. Minima, voluptas ut fugiat explicabo eveniet soluta obcaecati! Molestiae 
                     beatae exercitationem corrupti consectetur. Veniam voluptates ab dolorum delectus voluptatum, velit minima 
                     consequuntur deleniti expedita unde! Quibusdam, asperiores cumque molestias velit cum alias dolores quae
                      quas veritatis soluta doloribus quos reprehenderit. A molestias architecto nam sit iste doloribus ad eum unde
                       dolores, tenetur nobis molestiae maxime 
                     quibusdam totam. Cum voluptates consequuntur officiis laudantium nihil vel autem id
                 qui quasi doloribus eum, commodi et perspiciatis reiciendis nostrum rerum. Fugiat sunt sit repellat minus 
                 eveniet pariatur inventore officia impedit voluptatem autem non quia accusamus, quibusdam voluptas iusto 
                 provident at aspernatur sint consequuntur perspiciatis animi! Neque, sapiente beatae. Autem libero
                  voluptatem corrupti mollitia exercitationem dolorum eum quidem pariatur quam? Est quidem tempora 
                  soluta accusantium expedita eum doloremque vel, eveniet architecto labore blanditiis voluptates aliquid </p>
                     </div>
            </div>
        )
    })

    return (
        <div>
            <NavBar/>
            <br />
            <br />
            <br />
            {
                allBlogsComponent
            }
        </div>
    )
}

export default AllBlogs
