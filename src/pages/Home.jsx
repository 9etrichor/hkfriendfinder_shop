import React from 'react'
import Product from '../components/Product'

import duolingoSrc from "../assets/duolingo.jpeg"
import hkfriendSrc from "../assets/hkfriend.jpeg"
import microsoftSrc from "../assets/microsoft.jpeg"
import netflixSrc from "../assets/netflix.jpeg"
import spotifySrc from "../assets/spotify.jpeg"
import vipSrc from "../assets/vip.jpeg"
import youtubeSrc from "../assets/youtube.jpeg"

const Home = () => {
  return (
    <div>
      <div>image area</div>

      <div className='flex flex-wrap'>
        <Product name="youtube" imgSrc={youtubeSrc}/>
        <Product name="duolingo" imgSrc={duolingoSrc}/>
        <Product name="microsoft" imgSrc={microsoftSrc}/>
        <Product name="netflix" imgSrc={netflixSrc}/>
        <Product name="spotify" imgSrc={spotifySrc}/>
        <Product name="vip" imgSrc={vipSrc}/>
      </div>
    </div>
  )
}

export default Home