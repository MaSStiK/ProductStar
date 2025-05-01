import React, { useState, useRef, RefObject } from "react"

type TUser = {
    name: string;
    age: number;
};

type Dispatch<A> = (value: A) => void;
type SetStateAction<S> = S | ((prevState: S) => S);

export default function Card() {
    const [names, setNames] = useState<string[]>([])
    setNames(["John", "Doe"])

    const [user, setUser] = useState<TUser>()
    setUser({ name: "John", age: 30 })

    const [username, setUsername] = useState<string>("")

    const stateAction: React.Dispatch<string> = setUsername
    const stateAction2: React.Dispatch<React.SetStateAction<string>> = setUsername

    // const formRef: RefObject<HTMLFormElement> | null = useRef(); // error
    // const formRef = useRef<RefObject<HTMLFormElement> | null>(); // error
    // const formRef = useRef() as RefObject<HTMLDivElement>; // Не работает
    const formRef2 = useRef<HTMLDivElement>(null!);

    return (<></>)
}