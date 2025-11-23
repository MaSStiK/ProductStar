import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import PageLoader from "./components/Loader/PageLoader";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import ErrorPage from "./components/pages/ErrorPage";
import HomePage from "./components/pages/HomePage";
import CatalogPage from "./components/pages/CatalogPage";
import { ItemLoader, ItemDetails } from "./components/pages/ItemPage";
import { DownloadPage, DownloadAction } from "./components/pages/DownloadPage";
import AboutPage from "./components/pages/AboutPage"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<BaseLayout />} errorElement={<ErrorPage />} >
            <Route index element={<HomePage />} />

            <Route path="catalog" element={<CatalogPage />} />
            <Route
                path="catalog/:category/:id"
                element={<ItemDetails />}
                loader={ItemLoader}
            />
            <Route
                path="catalog/:category/:id/download"
                element={<DownloadPage />}
                action={DownloadAction}
            />

            <Route path="about" element={<AboutPage />} />

            <Route path="error" element={<ErrorPage errorCode="404" />} />
            <Route path="*" element={<ErrorPage errorCode="404" />} />
        </Route>
    )
)

function App() {
    return <RouterProvider router={router} fallbackElement={<PageLoader />} />;
}

export default App;
