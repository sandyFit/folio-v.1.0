import React from 'react';
import Home from './pages/home/Home';
import Navbar from './layout/Navbar';
import TextNav from './layout/TextNav';



const App = () => {
    return (
        <section>
            <Navbar/>
            <Home />
        </section>
    )
}

export default App