// import { fireEvent,render,screen } from "@testing-library/react"
// import '@testing-library/jest-dom'
// import Header from "../Header"
// import appStore from "../../utils/appStore"
// import { Provider } from "react-redux"
// import { BrowserRouter } from "react-router-dom"

// describe("Should load Header items",()=>{
//     it("Should load header Button",()=>{
       
//          render(
//             <BrowserRouter>
//             <Provider store={appStore}>
//                 <Header/>
//             </Provider>
//             </BrowserRouter>)
        
//         const ButtonElementHeader= screen.getByRole("button")
        
//         expect(ButtonElementHeader).toBeInTheDocument();



//     })
//     it("should check the login click simulation",()=>{
      
//                 render(
//                     <BrowserRouter>
//                     <Provider store={appStore}>
//                      <Header/>
//                    </Provider>
//                 </BrowserRouter>)
//                 const LoginBtn=screen.getByRole("button",{name:"login"});
//                 fireEvent.click(LoginBtn);
//                 const LogOutBtn=screen.getByRole("button",{name:"Logout"});

//                 expect(LogOutBtn).toBeInTheDocument();

//     })
// })
