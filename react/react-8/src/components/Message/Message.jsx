import "./Message.css"

export default function Message({ message }) {
    return (
        <div className="message">
            <div className="message__avatar">
                <img src={`https://api.dicebear.com/7.x/bottts/png?seed=${message.username}`} alt="avatar" />
            </div>
            <div className="message__body">
                <h3>{message.username}</h3>
                <p>{message.body}</p>
            </div>
        </div>
    )
}
