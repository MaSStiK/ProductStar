import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { selectIsShowChats } from "../store/selectors"
import Chats from "../Chats/Chats";

export default function HomePage() {
    const isShowChats = useSelector(selectIsShowChats)

    return (
        <section>
            <h1>Оффлайн чат</h1>
            
            {isShowChats
                ? <Chats />
                : <WarningMessage />
            }
        </section>
    )
}

function WarningMessage() {
    return (
        <div className="flex-col warning-message">
            <p>Авторизуйтесь что бы видеть чат</p>
            <Link className="button" to="/login">Войти в аккаунт</Link>
        </div>
    )

}
