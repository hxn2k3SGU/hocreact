// 

// import Timer from "./component/Timer"

// const { useState } = require("react");


// VÍ dụ về onewaybinding
// import React from 'react';
// import { useState } from 'react';

// function App() {
//   // biến username lưu giá trị của input
//   // useState là một hook trong react, nó cho phép chúng ta tạo ra một state trong component
//   const [username, setUsername] = useState();
//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setUsername(e.target.value);
//   }


//   return (
//     <div>
//       {/* e ở đây là event */}
//       <input type="text" onChange={(e) => handleChange(e) }/>
//     </div>
//   );
// }
// export default App;



// two way binding là khi chúng ta bắt được dữ liệu rồi cập nhật vào component
// Sau đó hiển thị ra ngoài
// import {useState} from 'react';
// function App() {
//   const [username, setUsername] = useState();
//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setUsername(e.target.value);
//   }
//   // Ở đây chúng ta sẽ sử dụng onChange để bắt sự kiện khi người dùng nhập vào input
//   // Sau đó chúng ta sẽ cập nhật lại giá trị của username
//   return (
//     <div>
//       Username: {username}
//       <input type="text" onChange={(e)=>handleChange(e)}/>
//     </div>
//   );
// }
// export default App;

//flow của code này là 
// Người dùng nhập input -> hàm handleChangex` được gọi để nhận giá trị input 
// -> hàm setUsername được gọi để cập nhật lại giá trị của username 
// -> component được render lại với giá trị mới của username


// VD 3 về two way binding
// import {useState} from 'react';

// function App() {
//   const colorList = ["#ff0000", "#00ff00", "#0000ff"];
//   const [color, setColor] = useState("#ff0000");
//   const handleChangeColor = (index) => {
//     console.log(index);
//     setColor(colorList[index]);
//   }
//   return (
//     <>
//     <div style ={{
//         background: color,
//         width: "60px",
//         height: "60px",
//         marginBottom: "10px"
//       }}>
//     </div>
//     <div>
//       <button onClick={()=>handleChangeColor(0)}>Xanh</button>
//       <button onClick={()=>handleChangeColor(1)}>Đỏ</button>
//       <button onClick={()=>handleChangeColor(2)}>Vàng</button>
//     </div>
//     </>
//   );
// }

// export default App;

// Mount là muốn gắn component vào trong DOM
// Unmount là muốn gỡ component ra khỏi DOM

// Ví dụ
// import Content from './component/Content';
// import { useState } from 'react';
// export default function App() {
//   const [show, setShow] = useState(false);
//   const handleClick = () => {
//     setShow(!show);
//     console.log(!show);
//   }
//   return (
//     <div>
//       <button onClick={handleClick}>Show</button>
//       {/* Nếu show là true thì hiển thị component Content */}
//       {show && <Content />}
//     </div>
//   );
// }

// import { useState } from 'react';
// import TodoApp from './component/Todo';
// function App() {
//   return (
//     <div>
//       <TodoApp />
//     </div>
//   );
// }
// export default App



// import { useState, useEffect } from "react";
// function App() {
//   const [count, setCount] = useState(0);
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     // Khi dùng dependency là mảng rỗng thì useEffect chỉ chạy 1 lần
//     console.log("test 1");
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => setPost(json));  // 
//   },[]);
//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={() => { setCount(count + 1) }}>Click me</button>
//       {post.map((post, index) => {
//         return <div key={index}>{post.title}</div>;
//       })}
//     </div>
//   );
// }

// export default App;

// import { useState,useEffect } from "react";
// function App(){
//   const [count, setCount] = useState(1);
//   const [color, setColor] = useState('');

//   useEffect(()=>{
//     if(count % 2 === 0){
//       setColor('red');
//     }else{
//       setColor('black');
//     }
//   },[count]) 


//   return(
//     <div>
//       <div>{count}</div>
//       <div style={{
//         background :color,
//         width : '60px',
//         height : '60px'
//       }
//       }></div>
//       {/* <button onClick={() => setCount=(count + 1)}>Click me</button> */}
//       <button onClick={() => setCount(count + 1)}>Click me</button>

//     </div>
//   );

// }
// export default App;

import { useState } from "react";
import Layoutef from "./component/Layoutef";
import Ref from "./component/Ref";
import Stopwatch from "./component/Stopwatch";
import Memo from "./component/Memo";

function App() {

  const [count, setCount] =  useState(0);
  
  console.log("re-render cha");
  const handleIncrease1 = () =>{
    setCount(count + 1);
  }
  return (
    <div>
      {/* <Layoutef/> */}
      {/* <Ref/> */}
      {/* <Stopwatch/> */}
      {/* <Memo/> */}
      <h1>{count}</h1>
      <button onClick={handleIncrease1}>add</button>
      <Memo abc = {count}/>
    </div>
  );
}

export default App;