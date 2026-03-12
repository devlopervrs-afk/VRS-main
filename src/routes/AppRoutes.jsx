import React from 'react'
import Home from '../pages/Home'
import ContactUs from '../pages/ContactUs'
import { Routes, Route } from "react-router-dom";
import FAQs from '../pages/FAQs';
import Works from '../pages/Works';
import Services from '../pages/Services'
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import CaseStudies from '../pages/CaseStudies';
import CaseStudyDetail from '../pages/CaseStudyDetail';
import ProjectDetail from '../pages/ProjectDetail';

function AppRoutes() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/faqs' element={<FAQs/>} />
        <Route path='/projects' element={<Works/>} />
        <Route path='/projects/:slug' element={<ProjectDetail/>} />
        <Route path='/case-studies' element={<CaseStudies/>} />
        <Route path='/case-studies/:slug' element={<CaseStudyDetail/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
  )
}

export default AppRoutes
