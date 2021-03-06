import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import axios from 'axios'
import CardList from './components/CardList';
import spinner from './assets/loading.svg'
import CurrentNft from './components/CurrentNft';
import Divider from './components/Divider';
function App() {
  const [nfts, setNfts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentNft, setCurrentNft] = useState({})
  const [isDarkMode, setIsDarkMode] = useState(true)
  function toggleIsDarkMode() {
    setIsDarkMode(!isDarkMode)
  }


  useEffect(() => {
    async function main() {
      // const contractAddress = '0x7C9F8Bd44257dE4A06cc5316AcD61a2543b37306'
      const collectionAddress = '0x7DC2bce2eE2d4BC1a65c00C56516691B913D0d1D'
      const res = await axios.get(`https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=${collectionAddress}`)
      const arr = res.data.assets
      arr.shift()
      setNfts(arr)
      if (arr[0]) {
        setCurrentNft(arr[0])
      }
      setLoading(false)
    }
    return main()
  }, [])

  return (
    <div className={`${isDarkMode && 'dark'} h-screen w-screen `}>

      <div className={`h-full w-full bg-offWhite-200 dark:bg-black font-sans `}>

        <Header toggleIsDarkMode={toggleIsDarkMode} isDarkMode={isDarkMode} />
        {loading && <div className="absolute w-full h-[75vh] flex justify-center items-center"><img src={spinner} alt="loading" /></div>}

        {!loading && <>
          <CurrentNft data={currentNft} />
          <Divider />
          <CardList nfts={nfts} setCurrentNft={setCurrentNft} />
          <Divider />
        </>}
      </div>
    </div>
  );
}

export default App;
