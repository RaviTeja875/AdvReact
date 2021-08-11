import React, {useState} from 'react'

function UseStateCounter() {
    const [value,setValue] = useState(0);
    const complexIncrease = () => {
        setTimeout(()=>{
            setValue(value +1);
        }, 4000)
    }
    return (
        <>
        <section style={{margin: '4rem 0'}}>
            <h2>A regular Counter</h2>
            <h1>{value}</h1>
            <button className='btn' onClick={() => setValue(value -1)}> decrease </button>
            <button className='btn' onClick={() => setValue(value +1)}> increase </button>
            <button className='btn' onClick={() => setValue(0)}> reset </button>



        </section>
        <section style={{margin: '4rem 0'}}>
        <h2>a more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}> Increase Later</button>

        </section>
      </>
    )
    
}
export default UseStateCounter
