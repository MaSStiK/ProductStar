import { useEffect } from "react"
import { Link, Form, useNavigate, useNavigation, useActionData } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setUserToken, setUserName, setShowChats } from "../store/actions";
import { registration, login } from "../api"
import PageLoader from "../PageLoader/PageLoader"

export const RegistrationAction = async ({ request }) => {
    const formData = await request.formData()
    console.debug(formData)
    const username = formData.get("username")
    const password = formData.get("password")

    if (!username) return { message: "Имя пользователя не должно быть пустым", status: 400 }
    if (!password) return { message: "Пароль не должно быть пустым", status: 400 }

    // Регистрируем нового пользователя
    const resRegistration = await registration(username, password)
    if (!resRegistration.response.ok) return { message: resRegistration.body.message || "Ошибка регистрации", status: resRegistration.response.status }

    // И сразу авторизуемся
    const resLogin = await login(username, password)
    if (!resLogin.response.ok) return { message: resLogin.body.message || "Ошибка регистрации", status: resLogin.response.status }

    // Если успешно - возвращаем токен
    return { token: resLogin.body.token, username }
}

export function RegistrationPage() {
    const actionData = useActionData()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (actionData?.token) {
            dispatch(setUserToken(actionData.token))
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

            <h1>Регистрация аккаунта</h1>
            <section className="flex-col section-form">
                <p>Зарегистрируйтесь что бы писать в чате</p>
                <Form className="flex-col" method="post">
                    <input type="text" name="username" placeholder="Имя пользователя" />
                    <input type="text" name="password" placeholder="Пароль" />
                    {actionData !== undefined && <p className="form-error">{actionData.message} {actionData.status}</p>}
                    <button className="button" type="submit">Зарегистрироваться</button>
                    <hr />
                    <small>Или войдите в аккаунт</small>
                    <Link className="button" to="/login">Войти в аккаунт</Link>
                </Form>
            </section>
        </>
    )
}
