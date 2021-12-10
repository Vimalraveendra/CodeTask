const TableBody = ({id,description,date,assigned,status,priority,item})=>{  
    let arr =Object.keys(item).map(item=>(item==="work_order_id")?item =(item[0]+item[1]+" "+item.slice(11)).toUpperCase(): item.toUpperCase())
        
    return(
        <tr>
          <td data-label={arr[0]}>{id}</td>
          <td data-label={arr[1]}>{description}</td>
          <td data-label={arr[2]}>{date}</td>
        
            <td data-label={'PERSON NAME'}>{assigned.length>0? assigned[0].person_name:""}</td>
            <td data-label={arr[3]}>{assigned.length>0? assigned[0].status:""}</td> 
          
          <td data-label={arr[4]}>{status}</td>
          <td data-label={arr[5]}>{priority}</td>

        </tr>
       )
    }
    
    export default TableBody;