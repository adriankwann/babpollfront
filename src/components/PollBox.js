import * as React from 'react';
import { useState } from 'react';
import './PollBox.css';
import Box from '@mui/material/Box';
import VoteCard from './VoteCard.js';

function PollBox() {
  const [polls, setPolls] = useState([
    {
      title: 'Should B@B implement a return offer policy?',
      votes: 200,
      yes: 150,
      no: 50,
      deadline: [5, 22],
      status: "Ongoing",
      tags: ['urgent'],
    },
    {
      title: 'Should b@bies be restricted be voting',
      votes: 245,
      yes: 40,
      no: 205,
      deadline: [0, 0],
      status: "Complete",
      tags: ['elections', 'urgent'],
    },
  ]);

  return (
    <div className="pollbox">
      {polls.map((poll, index) => (
        <VoteCard key={index} poll={poll}></VoteCard> 
      ))}
    </div>
  );
}

export default PollBox;
