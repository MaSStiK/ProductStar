import { JSX } from "react"


export default function JumpButton() {
    const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const x = event.screenX;
        const button = event.currentTarget;
    }

    const onClick2 = (event: React.MouseEvent) => {
        event.preventDefault();
        const x = event.screenX;
        const button = event.currentTarget;
    }

    const onClick3 = (event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        // const x = event.screenX; // Ошибка
        const button = event.currentTarget;
    }

    // Лучший вариант
    const onClick4: React.ComponentProps<"button">["onClick"] = (event) => {
        event.preventDefault();
        const x = event.screenX;
        const button = event.currentTarget;
    }
    
    return (
        <button onClick={onClick4}>
            Jump now!
        </button>
    )
}