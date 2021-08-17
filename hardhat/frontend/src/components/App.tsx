import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers'
// import logo from './imgs/logo.svg'
import GeneratxorFacet from '../../../artifacts/contracts/generatxor/facets/GeneratxorFacet.sol/GeneratxorFacet.json'
import React from 'react';

declare const window: Window &
   typeof globalThis & {
     ethereum: any
   }

// Update with the contract address logged out to the CLI when it was deployed 
const generatxorFacetAddress = '0xA9B229FEf19EEa2D6E8f5Eb67BBFA97142253152'

function App() {
  // add functions to state
  const [name, symbol] = useState()
  const [userAccount, setUserAccount] = useState()

  // request access to the user's MetaMask account
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  // call the smart contract, read the current name value
  async function getName() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // if writing then replace provider with signer
      const contract = new ethers.Contract(generatxorFacetAddress, GeneratxorFacet.abi, provider)
      try {
        const data = await contract.name()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }
  }

  // call the smart contract, read the current symbol value
  async function getSymbol() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // if writing then replace provider with signer
      const contract = new ethers.Contract(generatxorFacetAddress, GeneratxorFacet.abi, provider)
      try {
        const data = await contract.symbol()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  // call the smart contract get the balance 
  async function getBalanceOf() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      // if writing then replace provider with signer
      const contract = new ethers.Contract(generatxorFacetAddress, GeneratxorFacet.abi, provider)
      try {
        const data = await contract.balanceOf()
        console.log('data: ', data)
      } catch (err) {
        console.log("Error: ", err)
      }
    }    
  }

  async function getBalance() {
    if (typeof window.ethereum !== 'undefined') {
      const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(generatxorFacetAddress, GeneratxorFacet.abi, provider)
      const balance = await contract.balanceOf(account);
      console.log("Account Balance: ", balance.toString());
    }
  }


  // // call the smart contract and write data
  // async function someWriteTransaction() {
  //   if ('one of the useState values') return
  //   if (typeof window.ethereum !== 'undefined') {
  //     await requestAccount()
  //     const provider = new ethers.providers.Web3Provider(window.ethereum);
  //     const signer = provider.getSigner()
  //     // if writing then replace provider with signer
  //     const contract = new ethers.Contract(generatxorFacetAddress, GeneratxorFacet.abi, signer)
  //     const transaction = await contract.someWriteTransaction()
  //     await transaction.wait()
  //     getValueOfWriteTransaction()
  //   }
  // }


  return (
    <div className = "App"> 
      <header className="App-header">
        <button onClick={getName}>Get Token Name</button>
        <button onClick={getSymbol}>Get Token Symbol</button>
        <button onClick={getBalanceOf}>Get Balance of Token</button>
        {/* <input onChange={e => setGreetingValue(e.target.value)} placeholder="Set greeting" /> */}
        <br />
        <button onClick={getBalance}>Get Balance</button>
      </header>
    </div>
  );
}

export default App;