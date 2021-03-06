import * as React from 'react'
import IntroBlock from '../components/IntroBlock'
import '../Sass/basics.scss'
import About from '../components/About'
import QuoteBar from '../components/QuoteBar'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { Link } from 'gatsby' 
import NavBar from '../components/NavBar'




const IndexPage = () => {

  return(
    <div id="home">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css"/>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
        <Link rel="apple-touch-icon" sizes="180x180" href="../images/apple-touch-icon.png"></Link>
        <Link rel="icon" type="image/png" sizes="32x32" href="../images/favicon-32x32.png"></Link>
        <Link rel="icon" type="image/png" sizes="16x16" href="../images/favicon-16x16.png"></Link>
        <Link rel="manifest" href="../images/site.webmanifest"></Link>
        <Link rel="mask-icon" href="../images/safari-pinned-tab.svg" color="#5bbad5"></Link>
        <meta name="msapplication-TileColor" content="#da532c"></meta>
        <meta name="theme-color" content="#000"></meta>
        <title>Mobile App Developer | Web Developer | Vizao </title>
      </head>
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
