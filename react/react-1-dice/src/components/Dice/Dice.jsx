import "./Dice.css"

export default function Dice(props) {
    return (
        <div className="Dice__container">
            <img src={"/dices/dice" + props.dice + ".png"} alt="dice" />
        </div>
    )
}