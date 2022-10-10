import { useRouter } from "next/router"
import styles from '../../styles/nav.module.css';
// import Link from 'next/link'
// import styles from '../styles/nav.module.css'
// import About from './mywork/about'


export const Navbar = () => {
    const router=useRouter();

  return (
    <>

 <div className={styles.nav}>

      <div onClick={() => router.push('/mywork/about') }>About</div>
      {/* <div onClick={() => router.push('/eom')}>EOM</div> */}
      <div onClick={() => router.push('/feed/1')}>News</div>
      <div onClick={() => router.push('/')}>Home</div>
      </div>
    </>
  )
}

// window.location.href="https://Goggle.com"