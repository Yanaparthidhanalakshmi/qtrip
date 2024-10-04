import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    let navigate=useNavigate()
    let search=(a)=>{
        let val=a.target.value.toLowerCase()
        switch(val){
            case "bengaluru":{navigate("/Bengaluru")}
            break;
            case "goa":{navigate("/Goa")}
            break;
            case "kolkota":{navigate("/Kolkata")}
            break;
            case "singapore":{navigate("/Singapore")}
            break;
            case "malaysia":{navigate("/Malaysia")}
            break;
            case "bangkok":{navigate("/Bangkok")}
            break;
            case "newyork":{navigate("/New York")}
            break;
            case "paris":{navigate("/Paris")}
            break;
    default:{
        navigate("/")
    }
        }
    }
  return (
    <div>
       <div id="div1">
               <div id="div11">
                    <h1 id="d1h1">Welcome to QTrip</h1>
                    <p id="d1p">Explore the world with fantastic places to venture around</p>
                    
               </div>
               <div id="search">
                <input
                type="text"
                placeholder="Search City"
                onChange={search}
                />
            </div>
            </div>
    </div>
  )
}

export default Header

