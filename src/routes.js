import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Blog } from './pages/blog/blog';
import { Donasi } from './pages/donasi/donasi';
import { Layanan } from './pages/layanan/layanan';
import { Header } from './pages/main/header';
import { Main } from './pages/main/index';
import { Profil } from './pages/profil/profil';

export const RouterApps = (props) => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/profil" element={<Profil/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/layanan" element={<Layanan/>} />
                <Route path="/donasi" element={<Donasi/>} />
            </Routes>
        </BrowserRouter>
    )
}
