import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Pic from '../Images/depositphotos_56147543-stock-photo-laptop-screen-showing-online-news.jpg'
import Pic1 from '../Images/Untitled design.jpg'
import Pic2 from '../Images/image.jpg'
import Pic3 from '../Images/image1.jpg'
import { useRouter } from "next/router"


export default function Home() {
  return (
    <>
      <Head>
        <title>Today's News</title>
        <meta name="description" content="Generated by create next app" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="icon" sizes="50x50" href="/Logo.jpg" />
      </Head>
      <div className={styles.title}>
        <h1 className={styles.heading}>Welcome To Today's Website</h1>
      </div>
      <div className={styles.container}>


        <div className={styles.main}>
          <div className={styles.con1}>
            <p className={styles.P1}>
              News is important for a number of reasons within a society. Mainly to inform the public about events that are around them and may affect them..!
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
            News is that part of communication that keeps us informed of the changing events, issues, and characters in the world outside. Though it may be interesting or even entertaining, the foremost value of news is as a utility to empower the informed....!!
          </p>
          <div className={styles.allimg}>
            <div>
              <a href="https://indianexpress.com/" target="_blank">
                <Image className={styles.imagess}
                  src={Pic1}
                  alt="Picture of the News"
                />According to the survey, Television reaches 30% of the India's population people watches the news
              </a>
              <button className={styles.middle} onClick={() => window.open('https://indianexpress.com/') }>Click on the image to see more</button>
            </div>

            <div>
              <a href="https://zeenews.india.com/live-tv" target="_blank">
                <Image className={styles.imagess}
                  src={Pic2}
                  alt="Picture of the News"
                />According to the survey, Television reaches 50% of the India's population people watches the news
              </a>
              <button className={styles.middle} onClick={() => window.open('https://zeenews.india.com/live-tv') }>Click on the image to see more</button>
            </div>

            <div  >

              <a href="https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en" target="_blank">
                <Image className={styles.imagess}
                  src={Pic3}
                  alt="Picture of the News"
                />According to the survey, Television reaches 20% of the India's population people watches the news
              </a>
              <button className={styles.middle} onClick={() => window.open('https://news.google.com/topstories?hl=en-IN&gl=IN&ceid=IN:en') }>Click on the image to see more</button>
            </div>

          </div>
        </div>
      </div>
    </>

  )
}








// e98404a1b2b6492f8021afd014822b4f          Api Keys