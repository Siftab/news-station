import {  createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DetailsNews from "../Pages/DetailsNews";
import PrivateRoutes from "./PrivateRoutes";

export const myRoutes=createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=>fetch('/news.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
            ,
            {
                path:'/about',
                element:<div>About</div>
            }
            ,
            {
                path:'/career',
                element:<div>Career</div>
            },
            {
                path:'/news/:id',
                element:<PrivateRoutes><DetailsNews></DetailsNews></PrivateRoutes>}
        ]
    }
]);

