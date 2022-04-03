
import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './components/Layout';
import LoginPage from './components/LoginPage';
import ContactPage from './components/ContactPage';
import ChatPage from './components/ChatPage';
import Home from './components/Home';

export default function App() {
  return (
    <BrowserRouter>

      <div>
        <Layout/>
        <Routes>

          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Loginpage" element={<LoginPage/>}/>
          <Route exact path="/chatpage" element={<ChatPage/>}/>
          <Route exact path="/contactpage" element={<ContactPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>

    
  )
}
