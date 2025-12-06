import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectUserToken, selectUserName, selectChats } from "../store/selectors"
import { setChats } from "../store/actions";
import { postMessage, getChats } from "../api"
import { List, AutoSizer } from 'react-virtualized';
import Message from "../Message/Message"
import "./Chats.css"
import "react-virtualized/styles.css";

export default function Chats() {
    const dispatch = useDispatch()
    const userToken = useSelector(selectUserToken)
    const userName = useSelector(selectUserName)
    const chats = useSelector(selectChats)
    const messageInput = useRef()

    // Функция загрузки сообщений
    function loadChats(token) {
        getChats(token).then(res => {
            dispatch(setChats(res.body))
            localStorage.chats = JSON.stringify(res.body)
        })
    }

    // Авто загрузка сообщений раз в 10 секунд
    useEffect(() => {
        loadChats(userToken)
        const intervalId = setInterval(() => loadChats(userToken), 1000)

        // Очистка при размонтировании
        return () => clearInterval(intervalId)

    }, [userToken, dispatch])

    function sendMessage() {
        const message = messageInput.current.value
        if (message) {
            const localToken = localStorage.userToken
            const apiToken = userToken || localToken
            postMessage(apiToken, message).then(() => {
                loadChats(apiToken)
                messageInput.current.value = ""
            })
        }
    }

    const rowRenderer = ({ index, key, style }) => {
        const message = chats[chats.length - 1 - index];

        return (
            <div key={key} style={style}>
                <Message message={message} />
            </div>
        )
    }

    return (
        <div className="flex-col">
            <div className="flex-col chat-send">
                <p>Имя в чате: {userName}</p>
                <div className="flex-row">
                    <input type="text" placeholder="Ваш сообщение" ref={messageInput} maxLength={1000} />
                    <button onClick={sendMessage}>Отправить</button>
                </div>
            </div>

            <div className="chat-wrapper">
                {chats.length
                    ? <VirtualScroll chats={chats} row={rowRenderer} />
                    : <p>Чат пустой, отправьте первое сообщение</p>
                }
            </div>
        </div>
    )
}

function VirtualScroll({ chats, row }) {
    const rowHeight = 88 // 76 + 12
    return (
        <AutoSizer>
            {({ width }) => (
                <List
                    width={width}
                    height={516}
                    rowHeight={rowHeight}
                    rowRenderer={row}
                    rowCount={chats.length}
                />
            )}
        </AutoSizer>
    )
}