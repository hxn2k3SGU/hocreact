import { useEffect, useState } from "react";
function Timer() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        // Cleanup function dùng để dọn dẹp khi component bị unmount ra khỏi đom
        return () => {
            clearInterval(timer); // Dọn dẹp khi component bị huỷ
        };
    }, []);
    return (
        <div>{count}</div>
    );
}
export default Timer;