import Course from "./component/Course";
import MyFooter from "./component/Footer";
import MyHeader from "./component/Header";
import Hello from "./component/Hello";
import Category from "./component/Category";
import NonCategory from "./component/Noncategory";
import Product from "./component/Product";
import Message from "./component/Message";
import Count from "./component/Count";
import { useState } from "react";
function App() {
  // // Khai báo biến userName
  // const userName ="Hiếu lập trình";
  // // Hàm getUserName trả về giá trị của userName
  // const getUserName = () => {
  //   return userName;
  // }

  // const listProduct = [
  //   {
  //     url: "https://down-vn.img.susercontent.com/file/782c72d99f6755140071726e46e3a047",
  //     name: "Iphone",
  //     price: 1000,
  //   },
  //   {
  //     url: "https://down-vn.img.susercontent.com/file/d4e14f20fbcb6e42c2adc631536ca1c9",
  //     name: "Samsung",
  //     price: 2000,
  //   }
  // ]


  // Cách render 1 component bằng .map
  //   return (
  //   <>
  //     {listProduct.map((item, index) => (
  //       <Product
  //         key={index}
  //         url={item.url}
  //         name={item.name}
  //         price={item.price}
  //       />
  //     ))}
  //   </>
  // );
  // const isRenderCategory = false
  // if (isRenderCategory) {
  //   return (
  //     <div> <Category /></div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <NonCategory />
  //     </div>
  //   );
  // }
  // Thằng useState là 1 hook của react, nó cho phép mình tạo ra 1 biến trạng thái trong component
  // const [userName, setUserName] = useState("Hiếu lập trình");
  // const [age, setAge] = useState(18);
  // const [isLogin, setIsLogin] = useState(false);
  // const [isShow, setIsShow] = useState(false);
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  }
  return (
    <div>
      Count "{count}"
     <button onClick={handleClick}>Clickme</button>
    </div>
  );

}
export default App;