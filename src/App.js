import React from 'react';
import Header from './Components/Header';
import Counter from './Components/Counter';
import Footer from './Components/Footer';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header/>
            <Counter/>
            <Footer/>
        </div>  
    );
}

export default App;