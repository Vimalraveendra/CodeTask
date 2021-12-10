import {useState} from 'react'
import './App.css';
// import { requestData } from '../api/api';
import TableCollection from '../components/TableCollection/TableCollection';
import SearchInput from '../components/SearchInput/SearchInput';
import useFetch from '../customHook/useFetch/useFetch';


const App=()=> {
  // const [data,setData]=useState([])
  const [search, setSearch]= useState("")


  const handleSearch=(e)=>{
    console.log(e.currentTarget.value)
    setSearch(e.currentTarget.value)
  }
  const [data]=useFetch();

  // useEffect(()=>{
  //   const getData=async ()=>{
  //   const response = await requestData();
  //   setData(response.response.data)
  //   }
  //   getData();
  // },[])

  const filteredData=data.filter(({description})=>{
    return (description.toLowerCase().indexOf(search.toLowerCase())>-1)
  })
 
console.log('data',data)

  return (
    <div className="App">
       <h1>Code Task</h1>
       <SearchInput 
       search={search}
       handleSearch={handleSearch}
       />
      <TableCollection data={filteredData} />
       
    </div>
  );
}


export default App;
