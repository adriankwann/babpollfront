
import './App.css';
import Navbar from "./components/Navbar.js"
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygonMumbai
} from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import Home from "./components/Home.js"
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import {useState, useEffect} from 'react';
import PollPage from "./components/PollPage"
import Footer from "./components/Footer";
import Create from "./components/Create";
import { ethers, BigNumber } from 'ethers';
import FactoryABI from './Factory.json';


const contractAddress = "0x4C039747B63a36c4E2546f91daBaCeCe6CF2560D";


const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: '4ffd349f0302254dbdb5500b35374d05',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {
  const [polls, setPolls] = useState([
    {
      id: 5,
      title: 'Should B@B implement a return offer policy?',
      votes: 100,
      yes: 60,
      no: 40,
      deadline: [5, 22],
      status: "Ongoing",
      tags: ['urgent'],
      desc: "Current engagement within B@B has been relatively week. It may be beneficial to release return applications to motivate people to stay committed to the club."
    },
    {
      id: 6,
      title: 'Should b@bies be restricted be voting',
      votes: 70,
      yes: 20,
      no: 50,
      deadline: [0, 0],
      status: "Complete",
      tags: ['elections', 'urgent'],
      desc: "Since B@Bies are the newest members of B@B, allowing them to participate in elections before becoming familiar with the club could skew election results"
    },
  ]);

  const [members, setMembers] = useState([
    {  id: 0,
      name: "Sid",
      status: "Active"
    }, 
    {  id: 1,
      name: "Tim",
      status: "Active"
    },
    {  id: 2,
      name: "Adrian",
      status: "Active"
    },
    {  id: 3,
      name: "Dhruv",
      status: "Active"
    },
    {  id: 4,
      name: "Anon",
      status: "Inactive"
    },

  ])

  const [isLoading, setIsLoading] = useState(false);


  async function getter() {
    setIsLoading(true);
    if (window.ethereum) {
      let accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract("0x5944CbaA514E00E6ba7a05fCc0D5391eef3F6F12", FactoryABI.abi, signer)
      let c = await contract.getCurrentPollId();
      let temp = polls;
      for(let i = 0; i < c; i++) {
        let data = await contract.getPollData(i);
        let pollObject = {};
        pollObject["id"] = i;
        pollObject["title"] = data[0];
        pollObject["desc"] = data[1];
        pollObject["yes"] = parseInt(data[2]);
        pollObject["no"] = parseInt(data[3]);
        pollObject["votes"] = parseInt(data[2]) + parseInt(data[3]);
        pollObject["status"] = "Ongoing";
        pollObject["tags"] = [];
        let t = parseInt(data[4]) + parseInt(data[5]) - Math.floor(Date.now() / 1000);
        // Unix timestamp for May 3, 2022, at 12:00:00 AM UTC // Create a new Date object using the Unix timestamp const dateObj = new Date(unixTimestamp * 1000); // Get the hours and minutes from the date object const hours = dateObj.getUTCHours(); const minutes = dateObj.getUTCMinutes(); console.log(`Hours: ${hours}, Minutes: ${minutes}`); // Output: Hours: 0, Minutes: 0
        let dateObj = new Date(t * 1000);
        let hours = dateObj.getUTCHours(); 
        let minutes = dateObj.getUTCMinutes();
        pollObject["deadline"] = [hours, minutes];
        // pollObject["start"] = parseInt(data[4]);
        // pollObject["yes"] = parseInt(data[2]);
        if (!(temp.some(obj => obj["title"] === pollObject.title))) {
          temp.push(pollObject);
        }    
      }


      setPolls(temp);
      setIsLoading(false);

    }

  }

  useEffect(() => {
    getter();
  }, []);
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({accentColor: '#f6cc56',
      accentColorForeground: 'white',
      })}>
    <ChakraProvider>
    <div className="App">
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route exact path='/' element={
        <Home polls = {polls} members = {members} isLoading = {isLoading}/>
        } />
        {polls.map((poll) => (
        <Route key={poll.id} path={`/poll/${poll.id}`} element={<PollPage poll = {poll}/>} />
      ))}

      <Route path = '/create' element={<Create></Create>}>

      </Route>
      </Routes>



        <Footer/>
    </Router>

    </div>
    
    </ChakraProvider>
    
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
