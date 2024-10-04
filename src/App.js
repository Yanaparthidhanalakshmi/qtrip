import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Qtriphome from "./Qtriphome";
import Benguluru from "./pages/Benguluru";
import Niyaboytown from "./pages/Niyaboytown";
import Goa from "./pages/Goa"
import Perthby from "./pages/Perthby"
import Kolkata from "./pages/Kolkata";
import Tithon from "./pages/Tithon";
import Singapore from "./pages/Singapore";
import Vangreatshot from "./pages/Vangreatshot";
import Malasiya from "./pages/Malasiya";
import Gosmydro from "./pages/Gosmydro";
import Bangkok from "./pages/Bangokok";
import Nishgam from "./pages/Nishgam";
import Newyork from "./pages/Newyork";
import Calnyonnenfield from "./pages/Calnyonnenfield";
import Paris from "./pages/Paris";
import Lowtra from "./pages/Lowtra";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Errorpage from "./pages/Errorpage";
function App(){
    return(
        <>
        <Navbar/>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Qtriphome/>}/>
            <Route path="/Bengaluru" element={<Benguluru/>}/>
            <Route path="/Niaboytown" element={<Niyaboytown/>}/>
            <Route path="/Goa" element={<Goa/>}/>
            <Route path="/Perthby" element={<Perthby/>}/>
            <Route path="/Kolkata" element={<Kolkata/>}/>
            <Route path="/thton" element={<Tithon/>}/>
            <Route path="/Singapore" element={<Singapore/>}/>
            <Route path="/Vangreatshot" element={<Vangreatshot/>}/>
            <Route path="/Malaysia" element={<Malasiya/>}/>
            <Route path="/St Gosmydro" element={<Gosmydro/>}/>
            <Route path="/Bangkok" element={<Bangkok/>}/>
            <Route path="/Nishgam-In-Haprnia" element={<Nishgam/>}/>
            <Route path="/New York" element={<Newyork/>}/>
            <Route path="/Calnyonnenfield" element={<Calnyonnenfield/>}/>
            <Route path="/Paris" element={<Paris/>}/>
            <Route path="/Lowtra" element={<Lowtra/>}/>
            <Route path="*" element={<Errorpage/>}/>
            <Route/>
        </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}
export default App