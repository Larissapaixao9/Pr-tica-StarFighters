import express from "express";
import axios from "axios";
export async function main(){

}

export async function axiosrequest(user:string){
    //axios.post(`api.github.com/users/${user}/repos`);
    try {    const promise=await axios.get(`https://api.github.com/users/${user}/repos`);

        console.log(promise.data)
        
        console.log(promise.status)
        return promise.status
//     promise.then((response)=>{
//       console.log('funfou');
//       console.log(response.data)
// })
// promise.catch(()=>{
//     console.log('plano clicado não carregou ')
//   })
        
    } catch (error) {
        console.log(error)
    }

}