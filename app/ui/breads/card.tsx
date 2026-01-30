'use client'
import {
  Bread
} from '@/app/lib/definitions'

import { useRouter } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image'
import TagList from '@/app/ui/components/taglist/taglist'
import Rating from '@/app/ui/components/rating/rating'

import styles from './card.module.css'


export default function BreadCard({ bread }: { bread: Bread }) {
  
  const router = useRouter();

  const ingredientsTags: {label: string}[] | undefined = bread.ingredients?.map((ingredient) => ({label: ingredient.shortName}));

  return (
  <div className={styles.card}  onClick={() => router.push(`/breads/${bread.id}`)}>
      <div className={styles.thumbnail}>
        <Image
          className={styles.picture}
          src={bread.picture ? `/uploads/breads/${bread.id}/${bread.picture}` : '/uploads/breads/thumbnail-placeholder.png'}
          alt={`${bread.title} cuit`}
          width="120"
          height="120"
          // placeholder="blur"
        />
      </div>
      <div className={styles.meta}>
        <h2 className={styles.title}>
          <Link href={`/breads/${bread.id}`}>{bread.title}</Link>
        </h2>
        {bread.rating ? (
          <Rating value={bread.rating}/>
        ): null}
        <TagList className={styles.card__taglist} tags={ingredientsTags}/> 
      </div>
    </div>
  )
}
