import { useRouteError } from "react-router-dom";
const Error=()=>{
    const error_info=useRouteError();
    // console.log(error_info)
    return (
        <>
        <h1>{error_info.status}</h1>
        <h2>{error_info.statusText}</h2>
        </>
        
    )

}
export default Error;