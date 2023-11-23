import React from 'react'
import Product from './Product'
import Video from './Video'
import InfoGuide from './InfoGuide'
import HowTo from './HowTo'

export default function MainContent() {
  return (
    <div>
        <Product/>
        <HowTo/>
        <Video/>
        <InfoGuide/>
    </div>
  )
}
