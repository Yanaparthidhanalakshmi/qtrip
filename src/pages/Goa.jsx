import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Goa(){
    let[api,setapi]=useState([])
    useEffect(()=>{
        let res=fetch("https://content-qtripdynamic-qa-backend.azurewebsites.net//api/v1/adventures?city=goa")
        res.then(x=>x.json()).then(val=>{
            setapi(val)
        })
    })
    return(
       <>
        <div className='bdiv1'>
                <h1>Explore all adventures</h1>
                <p>Here's a list of places that you can explore in city </p>
                 <ol>
                    <li>Filters</li>
                    <li><button>Filter by Duration(Hours)</button>Clear</li>
                    <li><button>Add Categorie</button>Clear</li>
                    <li><button>Search Adventures</button>Clear</li>
                 </ol>
            </div>
            <div id="tcds">
         {
            api.map((x)=>{
                return(
                    <>
                    <div className="bimg">
                  <Link to={"/"+x.name}> <img src={x.image} alt="" /></Link>
                    <p>{x.name}</p>
                    <p id='bp'>{x.costPerHead}</p>
                    <p  id='bp1'>Duration <span>{x.duration}Hours</span></p>
                    <div className="bimg2">{x.category}</div>
                    </div>
                    </>
                )
            })
         }
         </div>
        </>
    )
}
export default Goa