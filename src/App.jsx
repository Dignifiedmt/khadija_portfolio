import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ThemeProvider} from "./ThemeContext.jsx";
import {ToastContainer} from "react-toastify";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    return (
        <ThemeProvider>
            <Router basename="/khadija_portfolio">
                <div className="relative flex min-h-screen flex-col overflow-x-hidden">
                    <Header />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </main>
                    <Footer />
                    <BackToTop />
                </div>
            </Router>
            <ToastContainer position="top-right" autoClose={3000} />
        </ThemeProvider>
    );
}

export default App;
