import { memo } from "react";

function Memo({abc}){
    console.log("Re-Render con");
    return(
        <div>Đây là hiếu {abc}</div>
    );
}
export default memo(Memo);
// export default Memo;

// Dùng React memo để tránh re - render lại những component không cần thiết
// Khi mà một prop trong thằng con bị thay đổi thì nó sẽ re render lại 