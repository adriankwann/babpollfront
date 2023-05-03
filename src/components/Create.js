import * as React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';
import { motion } from "framer-motion"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input
  } from '@chakra-ui/react'

import "./Create.css"


function Create() {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
        <div className = "createBox" data-aos = "fade-up">
            <p id = "createTitle">New Poll:</p>
            <div className = "form">
            <FormControl isRequired width = "70%" margin = "0 auto">
                <FormLabel marginTop = "10px">Poll Title</FormLabel>
                <Input focusBorderColor='orange.300' placeholder='Title' />

                <FormLabel marginTop = "20px" size="100px">Poll Description</FormLabel>
                <Input focusBorderColor='orange.300' size = "md" placeholder='Description' />
                <FormLabel marginTop = "20px" size="100px">Deadline</FormLabel>
                <Input focusBorderColor='orange.300'
                    placeholder="Select Date and Time"
                size="md"
                type="date"
                />
            </FormControl>
            </div>
            <div className = "createRow">
            <motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileHover={{ scale: 1.2}}
    whileTap={{ scale: 0.9 }} className = "submitButton2">Submit</motion.button>

            </div>

        </div>

    );
}

export default Create;