export default function Product ({ url, name, price }) {
    return (
        <div>
            <img src={url} style={{ width: "200px", height: "200px" }} alt={name} />
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    );
}