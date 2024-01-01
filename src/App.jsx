import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LearnPage from "./components/LearnPage";
import PredictPage from './components/PredictPage';

function App() {
  return (
    <Router>
        <div className="flex flex-col mx-auto w-full">
          <section className="min-h-screen flex flex-col">
            <Header />
            <Routes>
              <Route exact path="/" element={<HomePage/>} />
              <Route path="/learn" element={<LearnPage/>} />
              <Route path="/predict" element={<PredictPage/>} />
              {/* Add more routes for other pages as needed */}
            </Routes>
            <Footer />
          </section>
        </div>

    </Router>
  )
}

export default App;
