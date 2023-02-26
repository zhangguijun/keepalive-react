import React, { useState } from 'react'


const Add = () => {
    const [number, setNumber] = useState(0);
    return (
        <div>
            用户名：<input type="text" />
            <button onClick={() => setNumber(number => number+1)}>{number}</button>
        </div>
    )
}

export default Add;