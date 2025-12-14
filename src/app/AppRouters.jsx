import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { TeamsPage } from "../pages/TeamsPage";
import { MacthesPage } from '../pages/MacthesPage';
import Header from './Header';
import { NotFoundPage } from '../pages/NotFoundPage';




export const AppRouters = () => {
  return (
    <Router>
        <Header/>
        <Routes>
          <Route path="/" element ={<HomePage/>}/>
          <Route path="/teams" element = {<TeamsPage/>}/>
          <Route path="/matches" element = {<MacthesPage/>}/>
          <Route path="*" element = {<NotFoundPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouters;