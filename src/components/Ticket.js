import { useState } from 'react';

function Ticket({ name }) {
    const [count, setCount] = useState(0) 

    const increment = () => {
        setCount(count => count + 1)
    }

    return (
        <div>
            <h2 className="title">{name}</h2>
            <button onClick={increment}>add</button>
            <h2 className="total">{count}</h2>
        </div>
    )
}

export default Ticket