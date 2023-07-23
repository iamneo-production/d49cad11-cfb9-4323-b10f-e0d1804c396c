import React from 'react'
import Navbar from './Navbar'
import Home from './Home.jsx'
import Page2 from './Page2.jsx'
import Bottom from './Bottom.jsx'
import Middle from './Middle.jsx'
import Queries from './Queries.jsx'
import { ChakraProvider } from '@chakra-ui/react'

function Intro() {
  return (
    <div>
      <Navbar/>
      <ChakraProvider>
      <Home/>
      <Page2/>
      <Middle/>
      <Bottom/>
      {/* <Queries/> */}
      </ChakraProvider>
    </div>
  )
}

export default Intro
