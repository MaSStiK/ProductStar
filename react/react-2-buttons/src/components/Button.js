import React, { useState, useEffect } from "react"

const Button = (props) => {
    const [click, setClick] = useState(0)
    
    useEffect(() => {
        console.log(`Вы нажали ${click}`)
    })

    return (
        <button onClick={() => {setClick(click + 1)}}>{props.text} {click}</button>
    )
}

Button.defaultProps = {
    text: "Кнопка"
}

export default Button