import { useEffect, useState } from "react";

const useOnlineStatus=()=>{
    const [onlineStatus,setonlineStatus]=useState(true)
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonlineStatus(false);
            console.log("OFfline ")
        })
        window.addEventListener("online",()=>{
            setonlineStatus(true);
            console.log("onlline");
        })
    },[])
    return onlineStatus;
}
export default useOnlineStatus;