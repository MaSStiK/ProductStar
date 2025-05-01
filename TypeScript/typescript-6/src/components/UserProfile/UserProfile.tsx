import React, { useState } from 'react'
import Button from "../Button/Button"
import './UserProfile.css'

type TUser = {
    name: string;
    email: string;
    bio: string;
}


export default function UserProfile() {
    const [user, setUser] = useState<TUser>({
        name: "Алексей",
        email: "default@email.com",
        bio: "Биография пользователя"
    })

    const [editUser, setEditUser] = useState({...user});
    const [isEditable, setIsEditable] = useState(false);

    function onEditStart(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setIsEditable(true);
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setEditUser({...editUser, [name]: value});
    }

    function saveData(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setUser(editUser);
        setIsEditable(false);
    }

    return (
        <div className="profile">
            <h1>Форма редактирования пользователя {user.name}</h1>
            <form style={{ display: 'flex', flexDirection: 'column'}}>
                <input 
                    style={{ marginBottom: '10px', width: '300px'}}
                    name="name"
                    value={editUser.name}
                    disabled={!isEditable}
                    onChange={onChange}
                />
                <input
                    style={{ marginBottom: '10px', width: '300px'}}
                    name="email"
                    type="email"
                    value={editUser.email}
                    disabled={!isEditable}
                    onChange={onChange}
                />
                <textarea
                    style={{ marginBottom: '10px', width: '300px'}}
                    name="bio"
                    value={editUser.bio}
                    disabled={!isEditable}
                    onChange={onChange}
                />
                <div>
                    {isEditable
                        ? <Button buttonText="Сохранить" onClick={saveData} />
                        : <Button buttonText="Изменить" onClick={onEditStart} />
                    }
                </div>
            </form>
        </div>
    )
}
