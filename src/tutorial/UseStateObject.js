import React, {useState} from 'react'

function UseStateObject() {
    const [person, setPerson] = useState({
        name:"Star Lord",
        age: 50,
        message: "I am a God",
    });
    const [name,setName] = useState("Tony Stark")
    const [age,setAge] = useState(49)
    const [message,setMessage] = useState(" I am Ironman")
    const changeMessage = () => {
        setPerson({...person, message:"not anymore"});
        setMessage("hello world");
    }
    return (
        <div>
            <>
            <h3>{person.name}</h3>
            <h3>{person.age}</h3>
            <h3>{person.message}</h3>
            <button className="btn" onClick={changeMessage}> Change my message </button>
            </>
        </div>
    )
}
export default UseStateObject