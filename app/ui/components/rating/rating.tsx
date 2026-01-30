import styles from './rating.module.css'

export default function Rating({ value }: { value: number; }) {
  let stars_on = '';
  let stars_off = '';
  for (let index = 0; index < value; index++) {
    stars_on = stars_on+"⋆";
  }
  for (let index = value; index < 5; index++) {
    stars_off = stars_off+"⋆";
  }
  return (
    <p className={styles.rating}>
    <span className={styles.on}>{stars_on}</span><span className={styles.off}>{stars_off}</span>
    </p>
  )
}
