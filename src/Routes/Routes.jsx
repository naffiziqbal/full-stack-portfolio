import { createBrowserRouter } from "react-router-dom";
import About from "../Components/Pages/About/About";
import Contact from "../Components/Pages/Contact/Contact";
import Home from "../Components/Pages/Home/Home";
import Main from "../Layout/Main";

const route = createBrowserRouter([
    {
         path: "/",
         element : <Main/>,
         children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : '/contact',
                element : <Contact/>
            },
            {
                path : '/about',
                element : <About/>
            },
         ]
    }
 ]);

 export default route;
