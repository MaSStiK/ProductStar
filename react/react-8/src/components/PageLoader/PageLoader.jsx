import Loader from "./Loader"

// Компонент который перекрывает всю страницу и в центре отображает анимацию загрузки
export default function PageLoader() {
    return (
        <div className="loader-wrapper">
            <Loader />
        </div>
    )
}