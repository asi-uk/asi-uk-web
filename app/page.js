import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>

      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/asiLogo.png"
          alt="Next.js Logo"
          width={375}
          height={150}
          priority
        />
      </div>

      <div className={styles.grid}>
        
      </div>
    </main>
  )
}
