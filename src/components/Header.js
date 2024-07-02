import "./header.css"
import { useState } from "react";

const Header = () => {

    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
        console.log(count);
    }

    return (
        <div className="my-header">
            <h1>First React App</h1>
            <h6>Todo App</h6>
            {/* <h2>{count}</h2>
            <button onClick={incrementCount}>Increment Count</button> */}
        </div>
    );
}

export default Header;