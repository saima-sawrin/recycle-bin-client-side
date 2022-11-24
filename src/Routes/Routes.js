import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../component/PageNotFound/PageNotFound";
import Blog from "../component/Pages/Blog/Blog";
import Categories from "../component/Pages/Categories/Categories";
import Home from "../component/Pages/Home/Home";
import ResaleProducts from "../component/Pages/ResaleProducts/ResaleProducts";

import Main from "../Layout/Main";



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
                loader:({params})=> fetch(`http://localhost:5000/categories/${params._id}`),
                element: <ResaleProducts></ResaleProducts>,
            },
          
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/signup',
            //     element: <SignUp></SignUp>
            // },
            // {
            //     path: '/appointment',
            //     element: <Appointment></Appointment>
            // },
        ]
    },
    {
        // path: '/dashboard',
        // element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        // children: [
        //     {
        //         path: '/dashboard',
        //         element: <MyAppointment></MyAppointment>
        //     },
        //     {
        //         path: '/dashboard/allusers',
        //         element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
        //     },
            
        // ]
        path:'*',
        element: <PageNotFound></PageNotFound>,
      
    },
   

])

export default router;