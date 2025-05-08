import MyFooter from "./component/Footer";
import MyHeader from "./component/Header";

function App() {
  return (
    // react fragment là 1 thẻ cha để bao bọc các thẻ con trong JSX để tránh bị trùng lặp thẻ cha
    // Để tránh bị thừa một dom
    <>
      <MyHeader />
      <div>Xin chao</div>
      <MyFooter />
    </>
  );
}
export default App;