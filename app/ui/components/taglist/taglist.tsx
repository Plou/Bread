import styles from './taglist.module.css'

export default function TagList({ tags, className }: {
  tags?: {
    label: string;
  }[],
  className: string
}) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {tags?.map((tag, index) => (
        <li key={`${tag.label}-${index}`} className={styles.item}>{tag.label}</li>
      ))}
    </ul>
  )
}
