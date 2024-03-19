import { useState,useEffect } from "react";
import { RAPID_API } from "./cdn_link";

const useRestaurantsList=()=>{
    const [responseData,updresponsedata]=useState([]);
    const [filterdata,setFilterData]=useState([]);
    const [searchInput,setSearchInput]=useState("");


    useEffect(()=>{
        fetchData()
    },[])

    const fetchData=async()=>{
        const options={
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e2c4a195d6msh733983e14627c7cp150125jsnd18e63b66551',
                'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
            }
        }
        try{
            const response=await fetch(RAPID_API,options)
            const jsonData=await response.json();
            console.log("fetch Succesfully",jsonData?.data)
            updresponsedata(jsonData?.data);
            setFilterData(jsonData?.data);

        }
        catch(error){
            console.log(error)
        }
    }
    const handleSearch=()=>{
        let filterData=responseData.filter((restaurant)=>
            restaurant.name.toLowerCase().includes(searchInput.toLowerCase()));
    
         setFilterData(filterData);

    }
    const removeSearch=()=>{
        setSearchInput("");
        setFilterData(responseData);
    }
    return  {responseData,filterdata,searchInput,setSearchInput,handleSearch,removeSearch};

}
export default useRestaurantsList;