// Áp dung destructuring vào props
// Destructuring là một cú pháp trong JavaScript cho phép bạn lấy giá trị từ mảng hoặc đối tượng và gán nó vào biến riêng biệt.
// Trong React, destructuring thường được sử dụng để lấy props từ component và làm cho mã dễ đọc hơn.
// function Hello(data) {
//   // bóc  data ra ngoài thành name và content
//   const { name, content } = data;
//   // Truy xuất thì chỉ cần dùng name và content
//   return (
//     <div>
//         {content} {name}
//     </div>
//   );
// }
// export default Hello;


// // Truy vấn giá trị từ props trong component
// function Hello(data) {
//   return (
//     <div>
//       {data.content} {data.name}
//     </div>
//   );
// }

function Hello(prop) {

  // đổi tên thuộc tính content thành message
  // const { name, content: message } = data;
  console.log(prop);
  return <div>Username: {prop.getUserName()}</div>; 
}
export default Hello;