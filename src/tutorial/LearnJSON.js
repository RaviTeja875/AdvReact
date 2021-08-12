import React from 'react'
import axios from 'axios'

function LearnJSON() {
    const handleClick = (b) => {
        const promise = axios.post("http://localhost:4000/posts",{//setting the port code
            name: "Harsha" },{ // setting up the object we want or create
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
        const getUsers = () =>
        {
            axios.get("http://localhost:4000/posts").then(users => {
                {/*we are getting he data from our json server and then starting it in users and then consolingthe
                array of the objects*/}
                console.log(users);
            })
        }
    return (
        <>
        <h2>Learning json</h2>
        <button type ="button" className='btn' onClick={handleClick}> post data </button>
        <button type ="button" className='btn' onClick={getUsers}> get data </button>
        </>

      
    )
}
export default LearnJSON