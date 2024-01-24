import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

      </div>

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
    </main>
  )
}
