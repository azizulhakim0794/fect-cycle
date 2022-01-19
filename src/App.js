import React, { createContext, useState, Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Loading from './Component/CommonComponent/Loading/Loading';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';
// import AllBlogs from './Component/AllBlogs/AllBlogs';
// import Home from './Component/Home/Home';
// import NotFound from './Component/CommonComponent/NotFound/NotFound';
// import Login from './Component/Login/Login';
// import Shop from './Component/Shop/Shop';
// import Blog from './Component/Blog/Blog';
// import ProductDetails from './Component/AllProductComponent/ProductDetails/ProductDetails';
// import UsersOrders from './Component/UsersOrders/UsersOrders';
// import AddToCartProduct from './Component/AddToCartProduct/AddToCartProduct';
export const UserContext = createContext()
const Home = React.lazy(() => import('./Component/Home/Home'))
const AllBlogs = React.lazy(() => import('./Component/AllBlogs/AllBlogs'))
const NotFound = React.lazy(() => import('./Component/CommonComponent/NotFound/NotFound'))
const Login = React.lazy(() => import('./Component/Login/Login'))
const Shop = React.lazy(() => import('./Component/Shop/Shop'))
// const Contact = React.lazy(()=> import('./Component/Contact/Contact'))
const Blog = React.lazy(() => import('./Component/Blog/Blog'))
const ProductDetails = React.lazy(() => import('./Component/AllProductComponent/ProductDetails/ProductDetails'))
const UsersOrders = React.lazy(() => import('./Component/UsersOrders/UsersOrders'))
const AddToCartProduct = React.lazy(() => import('./Component/AddToCartProduct/AddToCartProduct'))
function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    uid: '',
    admin: '',
  })
  return (
    <>
      <Suspense fallback={<Loading />}>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/Login">
                <Login />
              </Route>
              <Route path="/shop">
                <Shop />
              </Route>
              <PrivateRoute path="/userOrder">
                <UsersOrders />
              </PrivateRoute>
              <PrivateRoute path="/addToCart">
                <AddToCartProduct />
              </PrivateRoute>
              <Route path="/productDetails/:id">
                <ProductDetails />
              </Route>
              <Route path="/blog/:blogId">
                <Blog />
              </Route>
              <Route path="/blog">
                <AllBlogs />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </UserContext.Provider>
      </Suspense>
    </>
  );
}

export default App;