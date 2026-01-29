import {
  Bread
} from '@/app/lib/definitions'

import styles from './card.module.css'

export default async function BreadCard({ bread }: { bread: Bread }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumbnail}>
        
      </div>
      <div className={styles.meta}>
        <h2 className={styles.title}>{bread.title}</h2>
        <p className={styles.description}>{bread.description}</p>
      </div>
    </div>
  )
}
