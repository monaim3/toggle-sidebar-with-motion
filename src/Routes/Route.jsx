import { createBrowserRouter } from "react-router-dom";
import Layout from "../Component/Layout";
import Anlytics from "../Pages/Anlytics";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Filemanager from "../Pages/Filemanager";
import Message from "../Pages/Message";
import Order from "../Pages/Order";
import Save from "../Pages/Save";
import Setting from "../Pages/Setting";
import User from "../Pages/User";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout></Layout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Dashboard></Dashboard>
            },
            {
                path:'/users',
                element:<User></User>
            },
            {
                path:'/messages',
                element:<Message></Message>
            },
            {
                path:'/analytics',
                element:<Anlytics></Anlytics>
            },
            {
                path:'/filemanager',
                element:<Filemanager></Filemanager>
            },
            {
                path:'/order',
                element:<Order></Order>
            },
            {
                path:'/saved',
                element:<Save></Save>
            },
            {
                path:'/settings',
                element:<Setting></Setting>
            },
        ]
    }
])