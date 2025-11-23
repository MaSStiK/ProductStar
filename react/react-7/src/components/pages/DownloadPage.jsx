import { Form, redirect, useNavigation, useActionData } from "react-router-dom"
import { mockFetch } from "../utils/api"
import PageLoader from "../Loader/PageLoader"

export const DownloadAction = async ({ params: { category, id }, request }) => {
    const formData = await request.formData()
    console.debug(formData)

    const appDetails = await mockFetch(`/${category}/${id}`)

    if (!formData.get("name")) {
        return { message: "Поле Name не должно быть пустым", status: 400 }
    }

    if (!formData.get("email")) {
        return { message: "Поле Email не должно быть пустым", status: 400 }
    }

    alert(`${formData.get("name")}, ссылка на загрузку ${appDetails.title} отправлена вам на почту`)

    return redirect(`/catalog/${category}/${id}`)
}

export function DownloadPage() {
    const data = useActionData();
    const navigation = useNavigation()
    console.log("useActionData", data);

    return (
        <article>
            {navigation.state === "submitting" && <PageLoader />}

            <h1>Загрузка приложения</h1>
            <section className="flex-col">
                <p>Введите свои данные что бы получить ссылку на загрузку</p>
                <Form className="flex-col" method="post">
                    <input type="text" name="name" placeholder="Ваше имя" />
                    <input type="text" name="email" placeholder="Ваш email" />
                    {data !== undefined && <p className="form-error">{data.message}</p>}
                    <button className="button" type="submit">Получить ссылку</button>
                </Form>
            </section>
        </article>
    )
}