import React from 'react';
import {Route, Routes} from "react-router-dom";
import Collections from "../Pages/Collections.tsx";
import Home from "../Pages/Home.tsx";
import Search from "../Pages/Search.tsx";
import Adding from "../Pages/Adding.tsx";
import Profile from "../Pages/Profile.tsx";

class AppRouter extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/collections" element={<Collections/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path="/adding" element={<Adding/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        );
    }
}
export default AppRouter;