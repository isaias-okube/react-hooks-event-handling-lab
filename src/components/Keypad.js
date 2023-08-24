import React from "react";

function Keypad () {
    function handleInputChange (event) {
        console.log("Entering password...")
    }
        
        return (
        <div>
            <input type="password" onChange={handleInputChange} />
        </div>
    )
}


export default Keypad;