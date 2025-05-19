    import { useRef, useState } from "react";

    function Stopwatch() {
        // Tạo usestate với biến count khởi tạo bằng 0
        const [count, setCount] = useState(0);

        // Giúp giữ đúng giá trị của biến do thằng re-reder của thằng use-state
        const timerID = useRef();

        const handleClickStart = () =>{
            timerID.current = setInterval(()=>{
                setCount((prev)=> prev + 1)
            },1000)
        }



        // có thể dùng ref để truy cập trực tiếp vào thẻ DOM

        // thằng timerID sẽ luôn bị undefined vì thằng react sẽ render lại khi mà chạy setCount
        // => Nên là thằng timerID sẽ không thể truyền vô đây để xóa được 
        // j
        const handleClickStop = () =>{
            console.log(timerID.current);
            clearInterval(timerID.current);
        }


        return (
            <div>
                <h2>{count}</h2>
                <button onClick={handleClickStart}>Start</button>
                <button onClick={handleClickStop}>Stop</button>
            </div>

        );


    }
    export default Stopwatch;