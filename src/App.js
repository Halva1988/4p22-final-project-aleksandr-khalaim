import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";

import DataFilms from "./pages/DataFilms/DataFilms";
import DefaultLayout from "./Layouts/DefaultLayout";
import FilmPage from "./pages/Film/Film";


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path={'/'} element={<DefaultLayout/>}>
                    <Route index element={<DataFilms />} />
                    <Route path={'Film'}>
                        <Route path={':filmId'} element={<FilmPage/>} />
                    </Route>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
