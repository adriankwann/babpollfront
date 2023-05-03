import * as React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useState} from 'react';
import { motion } from "framer-motion"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

import "./Create.css"
import { ethers, BigNumber } from 'ethers';
import FactoryABI from '../Factory.json';

async function create(title, description, date) {
    if (window.ethereum) {
       let accounts = await window.ethereum.request({
         method: 'eth_requestAccounts'
       })
       const provider = new ethers.providers.Web3Provider(window.ethereum)
       const signer = provider.getSigner()
       const contract = new ethers.Contract("0x5944CbaA514E00E6ba7a05fCc0D5391eef3F6F12", FactoryABI.abi, signer)
       contract.createPoll(title, description, 1652038800);
     }
}


function Create() {
    useEffect(() => {
        AOS.init();
      }, []);

      const [title, setTitle] = useState("");
      const [description, setDescription] = useState("");
      const [date, setDate] = useState("");



    return (
        <div className = "createBox" data-aos = "fade-up">
            <p id = "createTitle">New Poll:</p>
            <div className = "form">
            <FormControl isRequired width = "70%" margin = "0 auto">
                <FormLabel marginTop = "10px">Poll Title</FormLabel>
                <Input focusBorderColor='orange.300' placeholder='Title' onChange = {(e) => setTitle(e.target.value)}/>

                <FormLabel marginTop = "20px" size="100px">Poll Description</FormLabel>
                <Input focusBorderColor='orange.300' size = "md" placeholder='Description' onChange = {(e) => setDescription(e.target.value)}/>
                <FormLabel marginTop = "20px" size="100px">Deadline</FormLabel>
                <Input focusBorderColor='orange.300'
                    placeholder="Select Date and Time"
                size="md"
                type="date" onChange = {(e) => setDate(e.target.value)}
                />
            </FormControl>
            </div>
            <div className = "createRow">
            <motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileHover={{ scale: 1.2}}
    whileTap={{ scale: 0.9 }} className = "submitButton2" onClick = {() => create(title, description, date)}>Submit</motion.button>

            </div>

        </div>

    );
}

export default Create;