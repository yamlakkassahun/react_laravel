import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Add from './components/book/Add';
import Edit from './components/book/Edit';
import Show from './components/book/Show';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Books from './features/book/Books';

function App() {
  return (
    <Router>
    <div className="wrapper">
      <div className="main">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/home" element={<Books />} />
            <Route path="/add-book" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/book-detail/:id" element={<Show />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
</Router>
  );
}

export default App;
