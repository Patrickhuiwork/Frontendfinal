import styles from '@/styles/Home.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.logo}>
              <img src="navLogo.svg" className={styles.logo} alt="Thrive logo" />
            </div>
            <div className={styles.divNavButton}>
              <button className={styles.navHome}>HOME</button>
              <button className={styles.navBut}>ABOUT US</button>
            </div>
          </nav>
        </header>
        <section className={styles.mainCont}>
          <div className={styles.welcomeHome}>
            <h1 className={`${styles.welcome} animated-text`}>
              WELCOME TO
            </h1>
            <h1 className={`${styles.thrive} animated-text`}>
              THRIVE
            </h1>
            <button className={`${styles.start} animated-button`}>
              START NOW
            </button>
          </div>
        </section>
      </main>
      <img src="Hand.svg" className={styles.Hand} alt="Back logo" />
    </>
  );
}