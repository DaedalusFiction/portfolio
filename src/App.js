import logo from "./logo.svg";
import "./App.css";
import Layout from "./routes/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import Services from "./routes/Services";
import { ThemeProvider } from "@emotion/react";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="services" element={<Services />} />
            </Route>
        </Routes>
    );
}

export default App;
