import React from 'react'

function UseStateerrorEx() {
    let title ="random title";//its initial value is random title
    const handleClick= () => {
       
        title = "My name is title";
        console.log(title);

    }
    return (<React.Fragment>
        <h2>{title}</h2>
        <button type="button" className="btn" onClick={handleClick(800000)} >
            change title
        </button>
        </React.Fragment>
    );
};

export default UseStateerrorEx