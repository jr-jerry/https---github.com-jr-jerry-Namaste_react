import { useEffect, useState } from "react";
import { useEffect } from "react";
import { INFO_URL } from "./cdn_link";
const useRestaurantsInfo=(resId)=>{
    const [restInfo,setrestInfo]=useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData= async()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e2c4a195d6msh733983e14627c7cp150125jsnd18e63b66551',
                'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
            }
        };
        try{
            const response=await fetch(INFO_URL+resId,options)
            const jsonData=await response.json();
            setrestInfo(jsonData?.data?.restaurant);
            console.log(jsonData);
        }
        catch(error){
            console.log(error);
        }

    }
    return restInfo;

}
export default useRestaurantsInfo;