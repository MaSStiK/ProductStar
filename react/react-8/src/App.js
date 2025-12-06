
import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { setShowChats, setUserToken, setUserName, setChats } from "./components/store/actions";

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import PageLoader from "./components/PageLoader/PageLoader";
import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import { LoginPage, LoginAction } from "./components/pages/LoginPage";
import { RegistrationPage, RegistrationAction } from "./components/pages/RegistrationPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<BaseLayout />} >
            <Route index element={<HomePage />} />

            <Route
                path="/login"
                element={<LoginPage />}
                action={LoginAction}
            />

            <Route
                path="/registration"
                element={<RegistrationPage />}
                action={RegistrationAction}
            />

            <Route path="error" element={<ErrorPage />} />
            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
)

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        const user = localStorage.user
        if (user) {
            const parsedUser = JSON.parse(user)
            dispatch(setUserToken(parsedUser.token))
            dispatch(setUserName(parsedUser.username))
        }

        const chats = localStorage.chats
        if (chats) {
            const parsedChats = JSON.parse(chats)
            dispatch(setChats(parsedChats))
        }

        const showChats = localStorage.showChats
        if (showChats === "true") {
            dispatch(setShowChats(true))
        }
    }, [])

    return <RouterProvider router={router} fallbackElement={<PageLoader />} />;
}

export default App;
