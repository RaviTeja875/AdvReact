import React , {useState} from 'react'
//use state is a named import so we must  must have the curly braces
function UseStateBasic() {
    const [day,setDay]= useState("today is  a rainy day");
    const handleClick =() => {
        setDay("Today is a bright and beautiful day!")
    }

return (
        <div>
          <>

          <h1>{day}</h1>
          <button type="button" className="btn" onClick={handleClick} >
            change my day
        </button>
          </>

        </div>
    )
}

export default UseStateBasic