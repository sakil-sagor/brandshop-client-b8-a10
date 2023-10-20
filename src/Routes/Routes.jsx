import { createBrowserRouter } from "react-router-dom";
import AddBrands from "../Components/AllBrands/AddBrands";
import AllProducts from "../Components/AllProducts/AllProducts";
import DetailsProduct from "../Components/AllProducts/DetailsProduct";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";
import AddProductsPage from "../Pages/AddProductsPage/AddProductsPage";
import BrandProducts from "../Pages/BrandProducts/BrandProducts";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErroPage from "../Pages/ErrorPage/ErroPage";
import Home from "../Pages/Home/Home";
import MyCart from "../Pages/MyCart/MyCart";
import UpdateProductPage from "../Pages/UpdateProductPage/UpdateProductPage";
import PrivateRoute from "./PrivateRoute";


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
                path: "/product/:_id",
                element: <PrivateRoute> <DetailsProduct></DetailsProduct></PrivateRoute>
            },
            {
                path: "/addProduct",
                element: <PrivateRoute> <AddProductsPage></AddProductsPage></PrivateRoute>
            },
            {
                path: "/addBrand",
                element: <PrivateRoute> <AddBrands></AddBrands></PrivateRoute>
            },
            {
                path: "/brand/:_id",
                element: <PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>
            },
            {
                path: "/updateProduct/:_id",
                element: <PrivateRoute><UpdateProductPage></UpdateProductPage></PrivateRoute>
            },
            {
                path: "/myCart",
                element: <PrivateRoute> <MyCart></MyCart></PrivateRoute>
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