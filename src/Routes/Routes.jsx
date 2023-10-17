import { createBrowserRouter } from "react-router-dom";
import AddBrands from "../Components/AllBrands/AddBrands";
import AllProducts from "../Components/AllProducts/AllProducts";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";
import AddProductsPage from "../Pages/AddProductsPage/AddProductsPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErroPage></ErroPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },

            {
                path: "/product",
                element: <AllProducts></AllProducts>
            },
            {
                path: "/addProduct",
                element: <AddProductsPage></AddProductsPage>
            },
            {
                path: "/addBrand",
                element: <AddBrands></AddBrands>
            },
            {
                path: "/contactUs",
                element: <ContactUs></ContactUs>
            },

            {
                path: "/registration",
                element: <Registration></Registration>
            },

        ]
    },
]);


export default router;