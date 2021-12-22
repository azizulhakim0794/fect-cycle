import React from 'react'
import NavBar from '../CommonComponent/NavBar/NavBar'
import './Blog.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import blog1 from './../../image/blog/blog.jpg'
import Footer from '../CommonComponent/Footer/Footer';
import './Blog.css'
const Blog = () => {
    return (
        <div>
            <NavBar/>
            <div className="">
                <LazyLoadImage className="img-fluid w-100 blog-img1" src={blog1} alt="" title=""/>
                <h2 className="text-center">How To We Start This ???</h2>
                <div className="container">
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum beatae facilis a saepe modi similique!
                     Unde ex delectus quos, repellendus ipsum quae recusandae? Non similique veritatis, culpa voluptates eos rem 
                     minus amet eaque a voluptatem laudantium in voluptate eum impedit vel provident beatae voluptatibus vitae molestiae suscipit architecto tempora dolorum! Dolor eligendi quasi excepturi? Magni mollitia cumque ipsum obcaecati cupiditate. Tempora facere cumque et! Quasi, quos asperiores numquam expedita delectus eligendi cum non quam. Consequatur deleniti minus suscipit! Reiciendis at, deleniti praesentium modi corrupti ipsum cumque repellendus reprehenderit labore ipsa eum, quasi eius qui architecto quam dolorum nisi assumenda distinctio. Odit saepe libero magni ipsam perferendis placeat cupiditate molestias laudantium. Minima, voluptas ut fugiat explicabo eveniet soluta obcaecati! Molestiae beatae exercitationem corrupti consectetur. Veniam voluptates ab dolorum delectus voluptatum, velit minima consequuntur deleniti expedita unde! Quibusdam, asperiores cumque molestias velit cum alias dolores quae quas veritatis soluta doloribus quos reprehenderit. A molestias architecto nam sit iste doloribus ad eum unde dolores, tenetur nobis molestiae maxime quibusdam totam. Cum voluptates consequuntur officiis laudantium nihil vel autem id
                 qui quasi doloribus eum, commodi et perspiciatis reiciendis nostrum rerum. Fugiat sunt sit repellat minus 
                 eveniet pariatur inventore officia impedit voluptatem autem non quia accusamus, quibusdam voluptas iusto 
                 provident at aspernatur sint consequuntur perspiciatis animi! Neque, sapiente beatae. Autem libero
                  voluptatem corrupti mollitia exercitationem dolorum eum quidem pariatur quam? Est quidem tempora 
                  soluta accusantium expedita eum doloremque vel, eveniet architecto labore blanditiis voluptates aliquid 
                  libero nostrum, voluptate ipsum recusandae dolor veritatis! Quas sint velit voluptas. Similique perferendis
                   officiis, dolorem illum labore excepturi magni laboriosam aliquid cupiditate autem corrupti asperiores quam culpa eum eveniet? Laboriosam fuga quam in, quaerat natus ipsa provident? Sed ut quibusdam ex, error reiciendis accusantium sit. Labore sit exercitationem ipsum, rem quam quae est 
                 nam sint explicabo nemo? Eveniet atque iusto earum quia consequatur iste, perspiciatis vitae itaque.
                  Exercitationem ipsam enim fugiat? Deserunt, est? Autem est possimus inventore facilis quibusdam laboriosam ut, a rem modi? Vel nihil quidem molestiae quos delectus ea, dignissimos sequi nemo, quae reiciendis similique corrupti ipsam culpa dicta fugit impedit cupiditate facilis quam, libero vero incidunt fugiat non nostrum soluta. Incidunt obcaecati nihil itaque dicta, alias eum quidem quam perferendis assumenda in neque nemo expedita similique molestias quis commodi fuga? Praesentium quae earum eius rem expedita, debitis fugiat nihil maxime unde? Natus dolores porro fugit aliquam ab debitis, cupiditate dicta sapiente officiis aspernatur eligendi veniam omnis aperiam eveniet reprehenderit repellendus eum quod vero et iure quas. Sint debitis quisquam harum eaque sunt, ea beatae. Debitis aperiam in dolorum aliquid rerum illo labore ex
                   perferendis. Sint, voluptatum velit. Doloribus perferendis perspiciatis, soluta error ratione, quae
                    repellat culpa repudiandae atque amet ea reprehenderit voluptas veniam asperiores illo quasi non vero eius
                     expedita dolore sequi officia. Ad praesentium totam amet odio mollitia, aut molestias explicabo eius, omnis 
                     quasi ducimus iusto. Ratione, nobis non quasi, tenetur nam amet quaerat voluptas sed accusantium aliquam quae 
                     eos. Tempora itaque tenetur aliquam, explicabo, atque eveniet quidem voluptates nam suscipit sit sunt dolores porro eos.</p>
                     </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Blog
