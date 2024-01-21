import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Header } from './pages/main/header';
import { Main } from './pages/main/index';

export const RouterApps = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} />
            </Routes>
        </BrowserRouter>
    )
}
