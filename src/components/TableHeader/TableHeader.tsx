import React from "react"
import { cols } from "../../data/data"

const TableHeader =():JSX.Element=>{
    return<>
      {
        cols.map((name,index)=>{
                if(name==='Assigned To'){
                  return <th colSpan={2} key={index}>{name}</th>
                }
                return <th rowSpan={2} key={index}>{name}</th>
            })
          }
        </>
      }
        
        
    
export default TableHeader;