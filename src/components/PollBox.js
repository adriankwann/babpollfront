import * as React from 'react';
import { useState, useEffect } from 'react';
import './PollBox.css';
import Box from '@mui/material/Box';
import VoteCard from './VoteCard.js';
import { NavLink } from "react-router-dom";

function PollBox(props) {
  useEffect(()=> {
    console.log("rerendering");
  }, [props.polls]
  )
  return (

    
    <div className="pollbox">
      {props.polls.map((poll, index) => (
        <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to={`/poll/${poll.id}`}
        exact
        >
        <VoteCard key={index} poll={poll}></VoteCard> 
        </NavLink>
      ))}
    </div>
    
  );
}

export default PollBox;
