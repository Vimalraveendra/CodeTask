import {useState} from 'react'
import './App.css';
import TableCollection from '../components/TableCollection/TableCollection';
import SearchInput from '../components/SearchInput/SearchInput';
import useFetch from '../customHook/useFetch/useFetch';




const App=()=> {
  const [search, setSearch]= useState<string>("")
  const [data]=useFetch();

  const handleSearch=(e:React.SyntheticEvent<HTMLInputElement>)=>{
    setSearch(e.currentTarget.value)
  }
 

  const filteredData=data.filter(({description})=>{
    return (description.toLowerCase().indexOf(search.toLowerCase())>-1)
  })
 


  return (
    <div className="App">
       <h1>Code Task</h1>
       <SearchInput 
       search={search}
       handleSearch={handleSearch}
       />
      <TableCollection 
      data={filteredData} 
      />
       
    </div>
  );
}


export default App;
