import { useEffect, useLayoutEffect, useState } from "react";

function Layoutef() {
    const [count, setCount] = useState(0);

    const addHandleClick = () => {
        setCount(count + 1);
    }
    // Được thực thi sau khi render nên sẽ bị tình trạng nhấp nháy
    // useEffect(() => {
    //     if (count > 3) {
    //         setCount(0);
    //     }
    // }, [count])
    
    // Được thực thi trước khi render nên sẽ tránh được tình trạng của việc nhấp nháy đó
    useLayoutEffect(() => {
        if (count > 3) {
            setCount(0);
        }
    }, [count])



    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addHandleClick}>Add</button>
        </div>

    );
}
export default Layoutef;
