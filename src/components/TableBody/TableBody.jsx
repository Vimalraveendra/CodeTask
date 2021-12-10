const TableBody = ({id,description,date,assigned,status,priority,item})=>{  
      
        return(
            <tr>
              <td >{id}</td>
              <td >{description}</td>
              <td>{date}</td>
            
                <td>{assigned.length>0? assigned[0].person_name:""}</td>
                <td >{assigned.length>0? assigned[0].status:""}</td> 
              
              <td>{status}</td>
              <td>{priority}</td>
    
            </tr>
        )
    }
    
    export default TableBody;