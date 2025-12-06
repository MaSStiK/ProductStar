import { useEffect } from "react"
import { Link, Form, useNavigate, useNavigation, useActionData } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUserToken, setUserName, setShowChats } from "../store/actions";
import { login } from "../api"
import PageLoader from "../PageLoader/PageLoader"

export const LoginAction = async ({ request }) => {
    const formData = await request.formData()
    console.debug(formData)
    const username = formData.get("username")
    const password = formData.get("password")

    if (!username) return { message: "Имя пользователя не должно быть пустым", status: 400 }
    if (!password) return { message: "Пароль не должно быть пустым", status: 400 }

    // И сразу авторизуемся
    const res = await login(username, password)
    console.log(res);
    
    if (!res.response.ok) return { message: res.body.message || "Ошибка авторизации", status: res.response.status }

    // Если успешно - возвращаем токен
    return { token: res.body.token, username }
}

export function LoginPage() {
    const actionData = useActionData()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (actionData?.token) {
            dispatch(setUserToken(actionData.token));
            dispatch(setUserName(actionData.username));
            dispatch(setShowChats(true))
            localStorage.user = JSON.stringify({ token: actionData.token, username: actionData.username})
            localStorage.showChats = "true"
            navigate("/")
        }
    }, [actionData, dispatch, navigate])

    return (
        <>
            {navigation.state === "submitting" && <PageLoader />}

            <h1>Вход в аккаунт</h1>
            <section className="flex-col section-form">
                <p>Войдите что бы писать в чате</p>
                <Form className="flex-col" method="post">
                    <input type="text" name="username" placeholder="Имя пользователя" />
                    <input type="text" name="password" placeholder="Пароль" />
                    {actionData !== undefined && <p className="form-error">{actionData.message} {actionData.status}</p>}
                    <button className="button" type="submit">Войти</button>
                    <hr />
                    <small>Или зарегистрируйте аккаунт</small>
                    <Link className="button" to="/registration">Зарегистрировать аккаунт</Link>
                </Form>
            </section>
        </>
    )
}
