import {useState, useEffect} from 'react'
import './App.css';

import { requestData } from '../api/api';
import TableCollection from '../components/TableCollection/TableCollection';




const App=()=> {
  const [data,setData]=useState([])

  useEffect(()=>{
    const getData=async ()=>{
    const response = await requestData();
    setData(response.response.data)
    }
    getData();
  },[])
 
console.log('data',data)

  return (
    <div className="App">
       <h1>Code Task</h1>
      <TableCollection data={data} />
       
    </div>
  );
}


export default App;
