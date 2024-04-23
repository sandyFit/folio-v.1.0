import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/home/Hero";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<App />}> 
                    <Route index element={ <Hero/>} />
                    <Route path="/about" element={ <About/>} />
                    <Route path="/contact" element={ <Contact/>} />
                </Route>
            </Routes>
        </Router>
    </React.StrictMode>
)