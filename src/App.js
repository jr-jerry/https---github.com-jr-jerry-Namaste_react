import React, { Suspense, lazy } from "react";
import ReactDOM  from "react-dom/client";
import Header from "./Component/Header";
import Body from "./Component/Body";
import { createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import About from "./Component/About";
import Error from "./Component/Error";
import Contact  from "./Component/Contact";
import RestaurantsMenu from "./Component/RestrauntMenu";
// import UserContext from "./utils/Usercontext";
 import appStore from "./utils/appStore";
import MyCart from "./Component/MyCart";

const root=ReactDOM.createRoot(document.querySelector(".root"));
const About=lazy(()=>import("./Component/About"));
const App=()=>{

    return (
    <Provider store={appStore}>
    {/* //  <UserContext.Provider value={{login:"api login"}}>  */}
      
        <div className="App">
    
        <Header/> 
        <Outlet/>
        </div>
        {/* // </UserContext.Provider> */}
         </Provider>  )
}

const applayout=createBrowserRouter([//routing config->means according to url how our app render
    {
        path:"/",
        element:<App/>,
        children:[//creating childrean routes
            {
                path:"/about",
                element:<Suspense fallback={<h1>Loading</h1>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurants/:resid",
                element:<RestaurantsMenu/>
            },
            {
                path:'/cart',
                element:<MyCart/>
            }

        ],
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>
    }
])
    

root.render(<RouterProvider router={applayout}/>);
