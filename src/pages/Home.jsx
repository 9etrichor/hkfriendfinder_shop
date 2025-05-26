//lack the main layout or texts
import React from 'react'
import Product from '../components/Product'

import duolingoSrc from "../assets/duolingo.jpeg"
import microsoftSrc from "../assets/microsoft.jpeg"
import netflixSrc from "../assets/netflix.jpeg"
import spotifySrc from "../assets/spotify.jpeg"
import vipSrc from "../assets/vip.jpeg"
import youtubeSrc from "../assets/youtube.jpeg"

const Home = () => {
  return (
    <div>
      <div>image area</div>

      <div className='flex flex-wrap justify-center md:justify-start  gap-8 px-[10%]'>
        <Product money="每個月約$30" name="VIP" imgSrc={vipSrc}/>
        <Product money="每個月約$18.2" name="Youtube" imgSrc={youtubeSrc}/>
        <Product money="每個月約$10.7" name="Duolingo" imgSrc={duolingoSrc}/>
        <Product money="永久賬號$128" name="Microsoft" imgSrc={microsoftSrc}/>
        <Product money="每個月約$32.4" name="Netflix" imgSrc={netflixSrc}/>
        <Product money="每個月$19" name="Spotify" imgSrc={spotifySrc}/>
      </div>
    </div>
  )
}

export default Home