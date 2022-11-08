import { createBrowserRouter } from "react-router-dom";
import AllServices from "../Components/AllServices/AllServices";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import ReveiwForm from "../Components/ReviewForm/ReveiwForm";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import Main from "../LayOuts/Main/Main";

export const router = createBrowserRouter([
{
    path:'/',
    element:<Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/allservices',
            loader:()=> fetch('http://localhost:5000/allservices'),
            element:<AllServices></AllServices>
        },
        {
            path:'/details/:id',
            loader:({params})=> fetch(`http://localhost:5000/details/${params.id}`),
            element:<ServiceDetails></ServiceDetails>
        },
        {
            path:'/reviewform',
            element:<ReveiwForm></ReveiwForm>
        },

    ]
   
},
{
    path:'*',
    element: <p>Not Found</p>
}
]);