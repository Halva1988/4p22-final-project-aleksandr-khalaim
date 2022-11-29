import React from "react";
import { Route, Routes } from "react-router-dom";

import DataProducts from "./pages/DataProducts/DataProducts";
import DefaultLayout from "./Layouts/DefaultLayout";
import ProductPage from "./pages/Product/Product";
import Basket from "./pages/Basket/Basket";
import Login from "./pages/Login/Login";
import Registration from "./pages/Registration/Registration";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<DefaultLayout/>}>
                    <Route index element={<DataProducts />} />
                    <Route path={'Product'}>
                        <Route path={':productId'} element={<ProductPage/>} />
                    </Route>
                    <Route path={'Basket'} element={<Basket />} />
                    <Route path={'Login'} element={<Login />} />
                    <Route path={'Registration'} element={<Registration />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
