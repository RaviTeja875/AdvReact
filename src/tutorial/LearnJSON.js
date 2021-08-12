import React from 'react'
import axios from 'axios'

function LearnJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/posts",{//setting the port code
            name: "ravi" },{ // setting up the object we want or create
            headers: {
                ['content-type']: 'application/json' //setting the server type
            }}
            )
            promise.then(response =>{
                console.log(response)//this is used to console log our response from the server
            })
            promise.catch(error=>{
                console.error(error);
            })
            let c = b ;
            console.log(c);
        }
    return (
        <>
        <h2>Learning json ,axios</h2>
        <button type ="button" className='btn' onClick={handleClick}> post data </button>
        {/*<button type ="button" className='btn' onClick={getUsers}> get data </button>
        */}</>

      
    )
}
export default LearnJSON