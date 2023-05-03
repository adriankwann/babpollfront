
import './App.css';
import Navbar from "./components/Navbar.js"
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
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


const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
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
      id: 0,
      title: 'Should B@B implement a return offer policy?',
      votes: 200,
      yes: 150,
      no: 50,
      deadline: [5, 22],
      status: "Ongoing",
      tags: ['urgent'],
      desc: "Current engagement within B@B has been relatively week. It may be beneficial to release return applications to motivate people to stay committed to the club."
    },
    {
      id: 1,
      title: 'Should b@bies be restricted be voting',
      votes: 245,
      yes: 40,
      no: 205,
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
        <Home polls = {polls} members = {members}/>
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
