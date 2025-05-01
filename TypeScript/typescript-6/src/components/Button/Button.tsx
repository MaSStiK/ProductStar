import React from 'react'

interface IButtonProps {
    buttonText: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function Button(props: IButtonProps) {
    const { buttonText, onClick } = props;
    return (
        <button onClick={onClick}>{buttonText}</button>
    )
}
