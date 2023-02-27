import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import RandomCard from './components/RandomCard';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/random" element={<RandomCard />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
