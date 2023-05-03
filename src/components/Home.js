import * as React from 'react';

import PollBox from "./PollBox.js"
import Members from "./Members.js"

function Home(props) {
    return (
        <div>
        <div className = "homeTitle">All Polls</div>
        <PollBox polls = {props.polls}/>
        <br></br><br></br>
        <div className = "homeTitle">Member Stats</div>
        <Members members = {props.members}/>
        </div>

    );

}

export default Home;