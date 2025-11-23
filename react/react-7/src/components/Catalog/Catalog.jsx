import { Link } from "react-router-dom"
import "./Catalog.css";

export default function Catalog({ data }) {
    return (
        <div className="catalog">
            {data.map((item, i) => (
                <Link key={i} className="catalog-item" to={`/catalog/${item.category}/${item.id}`}>
                    <img src={item.imageUrl} alt={item.title} />
                    <h4>{item.title}</h4>
                </Link>
            ))}
        </div>
    )
}
