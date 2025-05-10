import Course from "./component/Course";
import MyFooter from "./component/Footer";
import MyHeader from "./component/Header";
import Hello from "./component/Hello";

function App() {
  // Khai báo biến userName
  const userName ="Hiếu lập trình";
  // Hàm getUserName trả về giá trị của userName
  const getUserName = () => {
    return userName;
  }
  return (
    <>
    {/* <Hello getUserName={getUserName} /> */}
    <Course />
    </>
  );
}
export default App;