import React, { useEffect, useState } from "react"
import axios from 'axios';
import useWindowSize from "./hooks/useWindowsize";
import Blogcard from "./components/layout";
import { AuthContext } from "./contexts/Authcontext";
import { useContext } from "react";
function Banner(){
    const windowSize=useWindowSize();
    const [apidata,setapidata]=useState([])
    const user = useContext(AuthContext);
    console.log("i am in banner",user.user.email)
    useEffect(()=>{
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=8033e5b99f5347a18e430eb226e820c9").then((res)=>{
            console.log(res.data.articles,"i am res dta")
            setapidata(res.data.articles)

        })
    },[])
    if(windowSize.width>=375 && windowSize.width<768)
    {
        return(
            <>
            <div className="h-auto w-auto">
             <h1 >You are logged in as:<span className="text-xl font-bold text-green-800">{user.user.email}</span></h1>
             <div className="col-span-4 gap-1   space-y-2 mx-auto my-10
             ">
             
        {
         apidata?.map((val,indx)=>{
             console.log("i am api data",val,indx)
             return(
             <>
             <Blogcard author={val?.author} title={val?.title} description={val?.description} imagedata={val?.urlToImage}/>
             </>
         )})
        }
             </div>
                 </div>
     
         </>
        )
    }
    else if(windowSize.width>=768 && windowSize.width<1023)
    {
        return(
            <>
            <div className="h-auto w-auto">
             <h1 >You are logged in as:<span className="text-xl font-bold text-green-800">{user.user.email}</span></h1>
             <div className="col-span-4 gap-1   space-y-2 mx-auto">
             
        {
         apidata?.map((val,indx)=>{
             console.log("i am api data",val,indx)
             return(
             <>
             <Blogcard author={val?.author} title={val?.title} description={val?.description} imagedata={val?.urlToImage}/>
             </>
         )})
        }
             </div>
                 </div>
     
         </>
        )
    }
    else if(windowSize.width>=1024){

    
return(
    <>
       <div className="h-auto w-auto">
        <h1 >You are logged in as:<span className="text-xl font-bold text-green-800">{user.user.email}</span></h1>
        <div className="col-span-4 gap-1   space-y-2 mx-auto">
        
   {
    apidata?.map((val,indx)=>{
        console.log("i am api data",val,indx)
        return(
        <>
        <Blogcard author={val?.author} title={val?.title} description={val?.description} imagedata={val?.urlToImage}/>
        </>
    )})
   }
        </div>
            </div>

    </>
)
    }
}
export default Banner