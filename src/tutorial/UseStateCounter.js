import React, {useState} from 'react'

function UseStateCounter() {
    const [value,setValue] = useState(0);
    const complexIncrease = () => {
        setTimeout(()=>{
            setValue((prevState)=>
            {
                return prevState+ 1;//passing afunction through setValue of use state
            })
            //setValue(value +1);//passing hard value through the set value of use state
        }, 4000);
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
