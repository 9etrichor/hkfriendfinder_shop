//lack the main layout or texts
import React from 'react'
import Product from '../components/Product'
import NavDisplay from '../components/NavDisplay'

import duolingoSrc from "../assets/duolingo.jpeg"
import microsoftSrc from "../assets/microsoft.jpeg"
import netflixSrc from "../assets/netflix.jpeg"
import spotifySrc from "../assets/spotify.jpeg"
import vipSrc from "../assets/vip.jpeg"
import youtubeSrc from "../assets/youtube.jpeg"

const Home = () => {
  return (
    <div>
      <NavDisplay texts="HKFriendsFinder合租家庭店
聆聽無廣告音樂,觀看高畫質影片,為什麼不嘗試更划算的選擇呢?" />

      <div className='flex flex-wrap justify-center md:justify-start  gap-8 w-full px-[10%] bg-gray-800 py-8'>
        <Product money=":$30/month" name="VIP" imgSrc={vipSrc}/>
        <Product money=":$18.2/month" name="Youtube" imgSrc={youtubeSrc}/>
        <Product money=":$10.7/month" name="Duolingo" imgSrc={duolingoSrc}/>
        <Product money="永久賬號$128" name="Microsoft" imgSrc={microsoftSrc}/>
        <Product money=":$32.4/month" name="Netflix" imgSrc={netflixSrc}/>
        <Product money=":$19/month" name="Spotify" imgSrc={spotifySrc}/>
      </div>
    </div>
  )
}

export default Home