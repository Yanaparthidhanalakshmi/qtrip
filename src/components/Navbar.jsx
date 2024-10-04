import React from 'react';
export default class Navbar extends React.Component{
    render(){
        return(
            <nav>
                <a id="a1">QTrip</a>
                <div id="nav"><ul>
                <li><a>Home</a></li>
                <li><a>Reservations</a></li>
                <li><a>Login Here</a></li>
                <li><a><button id="nbutt">Register</button></a></li>
                </ul></div>
                
            </nav>
        )
    }
}