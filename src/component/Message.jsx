export default function Message() {
    const handleClick = () => {
        alert("Hello, this is a message!");
    }
    // viết hàm rồi truyền vào onClick thôi
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}