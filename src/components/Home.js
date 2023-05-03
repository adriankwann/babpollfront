import * as React from 'react';

import PollBox from "./PollBox.js"
import Members from "./Members.js"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

function Home(props) {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div>
        <div className = "homeTitle"data-aos = "fade-in">All Polls</div>
        <PollBox polls = {props.polls} data-aos="fade-in"/>
        <br></br><br></br>
        <div className = "homeTitle" data-aos = "fade-up">Members</div>
        <Members members = {props.members}/>
        </div>

    );

}

export default Home;