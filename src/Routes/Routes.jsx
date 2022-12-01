import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Main from "../Layout/Main";

const route = createBrowserRouter([
    {
         path: "/",
         element : <Main/>,
         children : [
            {
                path : '/',
                element : <Home/>
            }
         ]
    }
 ]);

 export default route;
