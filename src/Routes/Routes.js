import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import AllServices from "../Components/AllServices/AllServices";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Login/Register";
import MyReviews from "../Components/MyReview/MyReviews";
import ReveiwForm from "../Components/ReviewForm/ReveiwForm";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import UpdateReview from "../Components/UpdateReview/UpdateReview";
import Main from "../LayOuts/Main/Main";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

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
            path:'/blog',
            element:<Blog></Blog>
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
            loader:()=> fetch('https://practice-three-server.vercel.app/allservices'),
            element:<AllServices></AllServices>
        },
        {
            path:'/details/:id',
            loader:({params})=> fetch(`https://practice-three-server.vercel.app/details/${params.id}`),
            element:<ServiceDetails></ServiceDetails>
        },
        {
            path:'/reviewform/:id',
            loader:({params})=> fetch(`https://practice-three-server.vercel.app/details/${params.id}`),
            element:<ReveiwForm></ReveiwForm>
        },
        {
            path:'/myReviews',
            element:<PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>
        },
        {
            path:'/reviews/:id',
            loader:({params}) => fetch(`https://practice-three-server.vercel.app/reviews/${params.id}`),
            element:<UpdateReview></UpdateReview>
        },
        {
            path:'/addservice',
            element:<PrivateRoutes><AddService></AddService></PrivateRoutes>
        },

    ]
   
},
{
    path:'*',
    element: <p>Not Found</p>
}
]);