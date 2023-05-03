import * as React from 'react';
import "./PollPage.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import { motion } from "framer-motion"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


const total = 500;
function PollPage(props) {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        
        <div className = "pollInfoWrap">
            <div className = "pollInfoBox" data-aos="fade-up">
                <div className = "pollRow">
                <div className = "statusBox2">{props.poll.status}</div>
                <div className = "timeBox">{props.poll.deadline[0]}H {props.poll.deadline[1]}M</div>
                </div>
                <p id = "pollInfoTitle">{props.poll.title}</p>
                <p id = "pollInfoSubTitle">Description:</p>
                <div className = "description">{props.poll.desc}</div>
                <motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileHover={{ scale: 1.2}}
    whileTap={{ scale: 0.9 }} className = "submitButton">Vote</motion.button>
            </div>
            <p id = "pollInfoSubTitle">Poll Data:</p>
            <div className= "dataBox">
                <div className = "pollRow" data-aos = "zoom-in">
                    <div className = "dataElem">
                        <p id = "datatitle">{props.poll.votes}</p>
                        <p id = "datatext">Voted</p>
                    </div>
                    <div className = "dataElem">
                        <p id = "datatitle">{total - props.poll.votes}</p>
                        <p id = "datatext">Waiting</p>
                    </div>
                    <div className = "dataElem">
                        <p id = "datatitle">{props.poll.yes}</p>
                        <p id = "datatext">Yes</p>
                    </div>
                    <div className = "dataElem">
                        <p id = "datatitle">{props.poll.no}</p>
                        <p id = "datatext">No</p>
                    </div>

                </div>

                <div className = "pollRow">

                <div className = "graphbox" data-aos = "zoom-in">
                    <div className = "graphRow">
                    <CircularProgress value={(props.poll.yes/props.poll.votes*100).toFixed(0)} size = '150px' color='green.400' thickness='5px'>
                    <CircularProgressLabel  fontSize = "20px">Yes<br/> {(props.poll.yes/props.poll.votes*100).toFixed(0)}% </CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={(props.poll.no/props.poll.votes*100).toFixed(0)} marginLeft = "15px" size = '150px' color='red.400' thickness='5px'>
                    <CircularProgressLabel fontSize = "20px">No <br/> {(props.poll.no/props.poll.votes*100).toFixed(0)}%</CircularProgressLabel>
                </CircularProgress>
                <CircularProgress value={5} marginLeft = "15px" size = '150px' color='orange.400' thickness='5px'>
                    <CircularProgressLabel  fontSize = "20px">Abstain <br/> 5%</CircularProgressLabel>
                </CircularProgress>


                    </div>

                
                </div>
                </div>


            </div>

            


        </div>

    );
}
export default PollPage;