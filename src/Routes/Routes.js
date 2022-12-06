import { createBrowserRouter } from "react-router-dom";
import MyAppointment from "../DashBoard/MyAppointment/MyAppointment";
import AllUsers from "../DashBoard/Users/AllUsers";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import About from "../pages/About/About";
import Appointment from "../pages/Appointment/Appointment";
import ContactUs from "../pages/ContactUs/ContactUs";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Reviews from "../pages/Reviews/Reviews";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            {
                path:'/contact',
                element:<ContactUs></ContactUs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/reviews',
                element:<PrivateRoutes><Reviews></Reviews></PrivateRoutes>
            },
            {
                path:'/*',
                element:<ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children:[
            {
                path:'/dashboard',
                element: <MyAppointment></MyAppointment>
            },
            {
                path:'/dashboard/users',
                element: <AllUsers></AllUsers>
            }
        ]
       
    }
])

export default router;