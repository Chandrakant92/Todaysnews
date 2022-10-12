import Head from 'next/head'
import react from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Pic from '../Images/depositphotos_56147543-stock-photo-laptop-screen-showing-online-news.jpg'
import Pic1 from '../Images/Untitled design.jpg'
import Pic2 from '../Images/image.jpg'
import Pic3 from '../Images/image1.jpg'
import { useRouter } from "next/router"


export default function Home() {
  const heading = `Today's News`;
  const text = `Welcome To Today's News`;
  const text1 = `News is important for a number of reasons within a society. Mainly to inform the public about events that are around them and may affect them..!`;
  const text2 = `  News is that part of communication that keeps us informed of the changing events, issues, and characters in the world outside. Though it may be interesting or even entertaining, the foremost value of news is as a utility to empower the informed....!!`;
  const p2 = `According to the survey, Newspaper reaches 30% of the India's population people watches the news  `;
  const p1 = `According to the survey, Television reaches 50% of the India's population people watches the news`;
  const p3 = `According to the survey, Online news website & social media reaches 20% of the India's population people watches the news`;
  const text3 = `Click here to see more`;
  
  
  return (
    <>
      
      <Head>
        <title>{heading}</title>
        <meta name="description" content="Generated by create next app" />
      
        <link rel="icon" sizes="50x50" href="/Logo.jpg" />
      </Head>
      <div className={styles.title}>
        <h1 className={styles.heading}>{text}</h1>
      </div>
      <div className={styles.container}>


        <div className={styles.main}>
          <div className={styles.con1}>
            <p className={styles.P1}>
              {text1}
            </p>
            <hr></hr>
          </div>
          <div className={styles.imgC} >
            <Image className={styles.img1}
              src={Pic}
              alt="Picture of the News"
            />
          </div>
        </div>
        <div className={styles.con2} >
          <p className={styles.P2}>
           {text2}
          </p>
          <div className={styles.allimg}>
            <div>
              <a href="https://indianexpress.com/" rel="noreferrer" target="_blank">
                <Image className={styles.imagess}
                  src={Pic1}
                  alt="Picture of the News"
                />
            {p2}
              </a>
              <button className={styles.middle} onClick={() => window.open('https://indianexpress.com/') }>  {text3}</button>
            </div>

            <div>
              <a href="https://zeenews.india.com/live-tv" rel="noreferrer" target="_blank">
                <Image className={styles.imagess}
                  src={Pic2}
                  alt="Picture of the News"
                />
                {p1}
              </a>
              <button className={styles.middle} onClick={() => window.open('https://zeenews.india.com/live-tv') }>  {text3}</button>
            </div>

            <div  >

              <a href="https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en" rel="noreferrer" target="_blank">
                <Image className={styles.imagess}
                  src={Pic3}
                  alt="Picture of the News"
                />
                {p3}
              </a>
              <button className={styles.middle} onClick={() => window.open('https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en') }> {text3} </button>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}





// e98404a1b2b6492f8021afd014822b4f          Api Keys