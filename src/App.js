import { Divider } from '@chakra-ui/react'
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
import PollBox from "./components/PollBox.js"
import { ChakraProvider } from '@chakra-ui/react'

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
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={darkTheme({accentColor: '#f6cc56',
      accentColorForeground: 'white',
      })}>
    <ChakraProvider>
    <div className="App">
      <Navbar></Navbar>
      <div className = "homeTitle">All Polls</div>
      <PollBox/>
      <Divider colorScheme="blackAlpha"/>
      <div className = "homeTitle">Voting Stats</div>
    </div>
    </ChakraProvider>
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
