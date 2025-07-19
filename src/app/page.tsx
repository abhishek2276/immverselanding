import React from 'react'
import Header from './components/header'
import SliderSection from './components/dashboard/slidersection'
import FeatureCards from './components/dashboard/Feature'
import Footer from './components/footer'
export default function page() {
  return (
    <div>
<Header/>
<SliderSection/>
<FeatureCards/>
<Footer/>
    </div>
  )
}
