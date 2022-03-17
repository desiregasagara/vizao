import * as React from 'react'
import NavBar from '../components/NavBar'
import IntroBlock from '../components/IntroBlock'
import '../Sass/basics.scss'
import About from '../components/About'
import QuoteBar from '../components/QuoteBar'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const IndexPage = () => {

  return(
    <div id="home">
    <NavBar/>
    <IntroBlock/>
    <About/>
    <QuoteBar/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </div>
   
  )
}

export default IndexPage
