// Cách 1 là tạo hàm renderCourse bên ngoài hàm Course

export default function Course() {
    // Khai báo mảng thì dùng ngoặc vuông nha 
    const course = ["Hieu","Xuan","Nguyen"]

    const renderCourse = (course) => {
        return (
            <ul>
                {/* Ngoặc nhọn là dùng để nhúng JavaScript cho JSX */}
                {/* Muốn viết JavaScript trong JSX thì dùng ngoặc nhọn */}
                {course.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                        </li>
                    )
                })}
            </ul>
        );
    }
    return (
        <div>
            <h1>Danh sách khóa học</h1>
            {/* Gọi hàm renderCourse */}
            {renderCourse(course)}
        </div>
    )
}

// Cách 2 là tạo hàm renderCourse bên trong hàm Course
// export default function Courses() {
//   const courses = ["Javascript", "HTML", "CSS"];

//   return (
//     <ul>
//       {courses.map((course, index) => {
//         return <li key={index}>{course}</li>;
//       })}
//     </ul>
//   );
// }
