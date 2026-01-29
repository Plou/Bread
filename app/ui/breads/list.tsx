import { fetchFilteredBreads } from '@/app/lib/data';

import BreadCard from './card';

import styles from './list.module.css'

export default async function BreadList({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const breads = await fetchFilteredBreads(query, currentPage);
  
  return (
    <ul className={styles.list}>
      {breads?.map((bread) => (
          <li key={bread.id} className={styles.item}>
            <BreadCard bread={bread}/>
          </li>
      ))}
    </ul>
  )
}