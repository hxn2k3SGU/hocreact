import React, { useState, useEffect } from 'react';
export default function Count(){
  // cách khai báo một trạng thái useStat
  // useState(0) là giá trị khởi tạo của biến count
  // setCount là hàm dùng để cập nhật giá trị của biến count
  // count là biến dùng để lưu trữ giá trị của biến count
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Bạn đã click {count} lần</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}