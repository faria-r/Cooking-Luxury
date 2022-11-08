import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
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
        
    ]
   
},
{
    path:'*',
    element: <p>Not Found</p>
}
]);