import {useState,useEffect} from "react"
import finnHub from "../apis/finnHub"
export const StockData=({symbol})=>{
  
  const [stockData,setStockData]=useState();
  useEffect(()=>{
    let isMounted = true;
    const fetchData=async()=>{
      try {
        const response=await finnHub.get("/stock/profile2/",{
          params:{
            symbol
          }
        })
        console.log(response);
        if(isMounted){
          setStockData(response.data)
        }
      } catch (error) {
        
      }
    }
  },[symbol])
  return <div>
    {stockData && (
      <div className="row border bg-white rounded shadow-sm p-4 mt-5">
        <div className="col">
          <div>
          <span className="fw-bold">name:{stockData.name}</span>

          </div>
        </div>
        <div className="col"></div>
        <div className="col"></div>
      </div>
    )}
  </div>
}