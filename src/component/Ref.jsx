import { useRef, useState } from "react";

function Ref() {

    // usestate thì bên trong là biến và mỗi lần thay đổi biến đó thì thằng react phải re render lại
    // const [amount , setAmount] = useState(0);

    // const handleClickAdd = () =>{
    //     setAmount(amount + 1);
    //     console.log("Click" + amount + "time");
    // }

    const handleClickAdd = () => {
        amount.current += 1 ;
        console.log("Click" + amount.current + "time");
    }


    // KHi mà dùng useRef thì nó là một object có chỉ cố khởi tạo là current
    
    const amount = useRef(0);
    console.log(amount);
    console.log("re-render")



    return (
        <div>
            <button onClick={handleClickAdd}>Add me</button>
        </div>


    );
}
export default Ref