import "./App.css";
import Layout from "./routes/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Services from "./routes/Services";
import Contact from "./routes/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="services" element={<Services />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </Routes>
    );
}

export default App;
