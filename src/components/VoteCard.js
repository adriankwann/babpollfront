import * as React from 'react';
import "./VoteCard.css"
import { Progress, CircularProgress, CircularProgressLabel, ProgressLabel} from '@chakra-ui/react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';


const total = 500;

export default function VoteCard({poll}) {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className = "voteCardBox" data-aos = "fade-up">
            <div className = "voteRow">
                <div className = "statusBox">{poll.status}</div>
                <p id = "v">Deadline: {poll.deadline[0]}H {poll.deadline[1]}M</p>
                
            </div>
            <div className = "voteCardTitle">{poll.title}</div>
            <div className = "voteRow">
                <div className = "progressBox">
                
                    <div className = "progressBar">
                        <Progress borderRadius="1rem" colorScheme='green' height='30px' value={poll.yes/poll.votes * 100}>
                            <ProgressLabel textAlign="left" fontFamily = "inter" fontSize = "13px" marginLeft = "10px">Yes</ProgressLabel>
                        </Progress>
                    </div>

                    <div className = "progressBar">
                        <Progress borderRadius="1rem" colorScheme="red" height='30px' value={poll.no/poll.votes * 100}>
                            <ProgressLabel textAlign="left" fontFamily = "inter"  fontSize = "13px" marginLeft = "10px">No</ProgressLabel>
                        </Progress>
                        
                    </div>
                
                </div>
                <div className = "circleBox">
                    <div className = "circleDiv">
                <CircularProgress value={(poll.votes/total * 100).toFixed(0)} color='yellow.300'>
                    <CircularProgressLabel>{(poll.votes/total * 100).toFixed(0)}%</CircularProgressLabel>
                </CircularProgress>
                </div>
                <p id = "cir">Engagement</p>
                </div>
                
            </div>
            
            <div className = "voteRow">
                {
                    poll.tags.map((tag, index)=> {
                        return (
                        <div key = {index} className = "tagBox">{tag}</div>
                        );
                    })
                }
            </div>
        </div>
    );
  }