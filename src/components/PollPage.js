import * as React from 'react';
import "./PollPage.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import { motion } from "framer-motion"
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
import { ethers, BigNumber } from 'ethers';
import FactoryABI from '../Factory.json';

async function vote(ind, bool) {
    if (window.ethereum) {
       let accounts = await window.ethereum.request({
         method: 'eth_requestAccounts'
       })
       const provider = new ethers.providers.Web3Provider(window.ethereum)
       const signer = provider.getSigner()
       const contract = new ethers.Contract("0x5944CbaA514E00E6ba7a05fCc0D5391eef3F6F12", FactoryABI.abi, signer)
       contract.castVote(ind, bool);
     }
}
const total = 100;
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


                <div className = "buttonRow">
                <motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileHover={{ scale: 1.2}}
    whileTap={{ scale: 0.9 }} className = "submitButtonyes" onClick = {()=> {
        vote(props.poll.id, 1);
    }}>Vote Yes</motion.button>


<motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileHover={{ scale: 1.2}}
    whileTap={{ scale: 0.9 }} className = "submitButton" onClick = {()=> {
        vote(props.poll.id, 0);
    }}>Vote no</motion.button>

</div>
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
              


                    </div>

                
                </div>
                </div>


            </div>

            


        </div>

    );
}
export default PollPage;