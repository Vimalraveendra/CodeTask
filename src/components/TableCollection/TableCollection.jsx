
import "./TableCollections.css"
import TableHeader from "../TableHeader/TableHeader"
import TableBody from "../TableBody/TableBody"



const TableCollection = ({data})=>{
    return(
    <div className='table-container'>
        <table id='table'>
        <caption>Work Order</caption>
        <thead>
          <tr id='table-head'>
             <TableHeader />
          </tr>
          <tr>
            <th scope="col">Person Name</th>
            <th scope='col'>Status</th>
          </tr>
        </thead>
         <tbody>
          {
              data.map((item)=>{
                
                  return  <TableBody 
                  key={item.work_order_id}
                  id={item.work_order_id    }
                  description={item.description}
                  date={item.received_date}
                  assigned={item.assigned_to}
                  status={item.status}
                  priority={item.priority}
                   item={item}
                  />
              })
          }
         </tbody>
        </table>
      </div>
        
    )
}

export default TableCollection;