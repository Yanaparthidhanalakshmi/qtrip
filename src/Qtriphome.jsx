import React, { StrictMode } from "react";
import Cards from "./components/cards";
import "./style.css"
import Header from "./components/Header";
function Qtriphome(){
    return(
        <StrictMode>
            <Header/>
            <Cards/>
        </StrictMode>
    )
}
export default Qtriphome