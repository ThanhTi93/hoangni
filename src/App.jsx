import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/common/Header'
import "./assets/css/global.css";
import "./assets/css/category.css";
import "./assets/css/reponsive.css";
import Category from './components/pages/Category'
import Footer from './components/common/Footer'
import HomeLayout from './components/layouts/HomeLayout'
function App() {
  return (
    <>
    <HomeLayout />
    </>
  )
}

export default App
