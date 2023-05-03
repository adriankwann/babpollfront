import * as React from 'react'
import g1 from "../assets/g1.png"
import g2 from "../assets/g2.png"
import g3 from "../assets/g3.png"
import g4 from "../assets/g4.png"

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import "./Members.css"

const indToIcn = function(i) {
    let temp = i % 4;
    if (temp == 0) {
        return g1;
    } else if (temp == 1) {
        return g2;
    } else if (temp == 2) {
        return g3;
    } else if (temp == 3) {
        return g4;
    } else {
        return g1;
    }

}

function Members(props) {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className = "memberBox" data-aos = "fade-up">
            {props.members.map((member, index)=> {
                return(
                    <div key = {index}className = "memberRow">
                        <img id = "w" src = {indToIcn(index)}></img>
                        <p id = "s">{member.name}</p>
                        <p id = "status">{member.status}</p>
                     
                    
                    
                    </div>
                );
            })}

        </div>
    );
}

export default Members;