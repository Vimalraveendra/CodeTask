import {useState,useEffect} from 'react'
import { requestData } from '../../api/api'

export interface IAssigned{
  person_name:string,
  status:string,
}
export interface IData{
  work_order_id:number,
  description:string,
  priority:string,
  assigned_to:Array<IAssigned>,
  received_date: string,
  status:string,
       
}

const useFetch=()=>{
const [data,setData]=useState<Array<IData>>([])
  
  useEffect(()=>{
    const getData=async ()=>{
    try{
      const response = await requestData();
      setData(response.response.data)
    }catch(error){
      console.log(error)
    }
    }
    getData();
  },[])
 return [data]
}

export default useFetch;