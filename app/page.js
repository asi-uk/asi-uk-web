import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.middle}>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/asiLogo.svg"
            alt="ASI Logo"
            width={375}
            height={150}
            priority
          />
        </div>

        <Link href="/formation" className={styles.banner}>
            <h2>
              ASI UK Formation Event <span>-&gt;</span>
            </h2>
            <h3>2nd March, 2024</h3>
            <p>Details on our upcoming formation event at Newbold College</p>
          </Link>

        <div className={styles.grid}>

          <Link href="/about">
            <div className={styles.card}>
              <h2>
                About <span>-&gt;</span>
              </h2>
              <p>Find out more about the mission and structure of ASI UK</p>
            </div>
          </Link>

          <Link href="/join">
            <div className={styles.card}>
              <h2>
                Join <span>-&gt;</span>
              </h2>
              <p>Join the movement of Adventist lay professionals in the UK</p>
            </div>
          </Link>
        </div>

      </div>

    </main>
  )
}
