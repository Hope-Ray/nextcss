import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <a href='/home'> Home</a>
        <a href='/contact'> Contact</a>
        <a href='/about'> About </a>
        <Link href="/profile"> Profile</Link>
      </div>
      <button className={styles.button}>Submit</button>
    </div>
  )
}

export default Navbar