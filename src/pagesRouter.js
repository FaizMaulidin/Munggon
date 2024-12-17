import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllKegiatan from "./pages/AllKegiatan";
import AllProduk from "./pages/AllProduk";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    },
    {
        path: '/kegiatan',
        element: <AllKegiatan/>
    },
    {
        path: '/produk',
        element: <AllProduk/>
    }
])