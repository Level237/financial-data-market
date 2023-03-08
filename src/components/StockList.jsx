import { useState,useEffect } from "react";
import finnHub from "../apis/finnHub";

export const StockList=()=>{

  const  [stock,setStock]=useState();
 const [watchList,setWatchList]= useState(['GOOGL',"MSFT","AMZN"]);

  useEffect(()=>{
     let isMounted=true;
    const fetchData=async ()=>{
      const response=[]
      try{
      const response1=await  finnHub.get("/quote",{
        params:{
          symbol:"GOOGL"
        }
      })
        responses.push(response1);
         const response2=await  finnHub.get("/quote",{
        params:{
          symbol:"MSFT"
        }
      })
        responses.push(response2);
         const response3=await  finnHub.get("/quote",{
        params:{
          symbol:"AMZN"
        }
      })
       responses.push(response3);
        console.log(responses);
        console.log("le");
        if(isMounted){
            setStock(response.data)
        }
        
      }catch(err){
        
      }
    }
    fetchData()

    return ()=>(isMounted=false)
  }, []) 
  return <div>StockList</div>
}