import {useState,useEffect} from 'react'
import { requestData } from '../../api/api'


const useFetch=()=>{
const [data,setData]=useState([])
  
  useEffect(()=>{
    const getData=async ()=>{
    const response = await requestData();
    // console.log("res",response.response.data)
    setData(response.response.data)
    }
    getData();
  },[])
 return [data]
}

export default useFetch;