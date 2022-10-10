import Image from 'next/image'
import styles from '../../styles/about.module.css'
import Pic from '../../Images/220367988.jpg'
// import Img from '../../Images/R.'

const About = () => {
  return (
    <>
      {/* <h3>Hey I am About</h3> */}
      <div className={styles.main}>

        <div className={styles.box1}>
          <div  >
            <Image
              className={styles.myimg}
              src={Pic}
              
              alt="Picture of the author"
            />
          </div>
          <div className={styles.bio}>

            <h3>BIOGRAPHY</h3>
            <p>
              I'm a Chandrakant J Gawali, Intermediate FullStack-Developer, I construct many Web-Application as well as Mobile Application from the scratch. That are helpful to society along with user-friendly interface.            </p>

          </div>
        </div>
        <hr/>
        <div className={styles.box2}>
          <p>
            I have created this news website site to preserve human beings knowledgeable so that humans can remain up to date and additionally hold up with the area and understand the present day happenings in the world.
            I used NextJs which is React framework for this website and I constructed this website totally from scratch.
            <br/>
            I hope this website will be beneficial for you, regard for visiting this website
            Thank you.
          </p>
        </div>

        <div className={styles.box3}>
          <div className={styles.contact}><p>Contact Us</p>

          </div>
          <form className={styles.form}>
            <div className={styles.d1}>

              <label>Name:- </label>
              <input type="text" className={styles.name} />
            </div>
            <div className={styles.d1}>
              <label>Email:-</label>
              <input type="text" className={styles.name} />
            </div>
            <div className={styles.d1}>
              <label>Mobile:-</label>
              <input type="text" className={styles.name} />
            </div>
            <div className={styles.d1}>
              <label>Message:-</label>
              <input type="plain" className={styles.name} />
            </div>
            <div className={styles.btn}>
              <button className={styles.button} >Send Message</button>
            </div>
          </form>

        </div>


        {/* <div className={styles.box4}> */}


        {/* </div> */}

      </div>
    </>

  )
}

export default About
{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/y_BGPFZbo90?controls=0&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */ }
