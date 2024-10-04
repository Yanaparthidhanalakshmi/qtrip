import React, {useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Cards(){
    let[api,setapi]=useState([]);
    useEffect(()=>{
         let res=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/cities")
         res.then(x=>x.json()).then(val=>{
            console.log(val);
            setapi(val)
            
         })
    });
    
    return(
        <>

            <div id="card-container">
                {
                 api.map((x)=>{
                    return(
                        <>
                        <div className="tile">
                        <Link to={"/"+x.city}><img src={x.image} alt="pic" /></Link>
                        <div className="tdata">
                        <h5 className="tdh5">{x.city}</h5>
                        <p className="tdp">{x. description}</p>
                        </div>
                        </div>
                        </>
                    )
                   })
                }
            </div>
        </>
    )
}
export default Cards