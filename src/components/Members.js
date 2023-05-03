import * as React from 'react'
import g1 from "../assets/g1.png"

import "./Members.css"

function Members(props) {
    return (
        <div className = "memberBox">
            {props.members.map((member, index)=> {
                return(
                    <div key = {index}className = "memberRow">
                        <img id = "w" src = {g1}></img>
                        <p id = "s">{member.name}</p>
                        <p id = "status">{member.status}</p>
                     
                    
                    
                    </div>
                );
            })}

        </div>
    );
}

export default Members;