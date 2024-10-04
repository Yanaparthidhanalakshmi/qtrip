import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../index.css"
function Tithon(){
    let[api,setapi]=useState([])
    useEffect(()=>{
        let res=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures/detail?adventure=8318638903")
        res.then(x=>x.json()).then(val=>{
            console.log(val);
            setapi([val])
            
        })
    })
    console.log(api);
    
    return(
        <>
             {
                api.map(x=>{
                    return(
                        <>
                        <div id="n1">
                        <h1>{x.name}</h1>
                        <p>{x.subtitle}</p>
                        <div id="cimg">
                            <Carousel>
                          <img src={x.images[0]} alt="" />
                          <img src={x.images[1]} alt="" />
                          <img src={x.images[2]} alt="" />
                            </Carousel>
                            </div>
                        <h5 id="nh5">About the Experience</h5>
                        <p id="n1p">{x.content}</p>
                        </div>
                        </>
                    )
                })
            } 
        </>
    )
}
export default Tithon