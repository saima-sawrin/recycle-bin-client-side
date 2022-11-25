import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import Blog from "../component/Pages/Blog/Blog";
import Categories from "../component/Pages/Categories/Categories";
import Home from "../component/Pages/Home/Home";
import Login from "../component/Pages/Login/Login";
import Products from "../component/Pages/ResaleProducts/Products";
import SignUp from "../component/Pages/SignUp/SignUp";

import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRouter";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>, 
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/blog',
                element: <Blog></Blog>,
            },
            {
                path:'/categories/:id',
                loader:({params})=> fetch(`http://localhost:5000/categories/${params.id}`),
                element: <PrivateRoute><Products></Products></PrivateRoute>
            },
          
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            // {
            //     path: '/appointment',
            //     element: <Appointment></Appointment>
            // },
        ]
    },
    {
        
        path:'*',
        element: <PageNotFound></PageNotFound>,
      
    },
   

])

export default router;