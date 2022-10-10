import '../styles/globals.css'
import { Navbar } from './mywork/nav'
import {Fotter} from './mywork/fotter'
import { useEffect,useState } from 'react'
import { Router } from 'next/router'
import LoadingBar from 'react-top-loading-bar'


function MyApp({ Component, pageProps }) {
  const [progress, setProgress] = useState(0)
    
  useEffect (() =>{
    Router.events.on('routeChangeStart',()=>{
      setProgress(40)
     })
       Router.events.on('routeChangeComplete',()=>{
        setProgress(400)
       })
       
  })
  return <div>
  <LoadingBar
        color='#0a29bd'
        progress={progress}
        waitingTime={500}
        height={4}
        onLoaderFinished={() => setProgress(0)}
      />
    <Navbar/>
   <Component {...pageProps} />
    <Fotter/>
  </div>
  
 
}

export default MyApp
