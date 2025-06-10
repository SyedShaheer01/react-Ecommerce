import React from 'react'
import Header from '../header'
import LatestCollection from './LatestCollection'
import BestSeller from '../BestSeller'
import OurPolicy from '../OurPolicy'
import NewsLetterBox from '../NewsLetterBox'

function Home() {
  return (
    <div>
      <Header/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home
