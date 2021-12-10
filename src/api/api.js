import { data } from "../data/data";

export const requestData=()=>{
    return new Promise((resolve,reject)=>{
        if(!data){
            reject("not found")
        }
        resolve(data)
    })
}