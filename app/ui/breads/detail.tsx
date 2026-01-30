import { fetchBreadById } from '@/app/lib/data';

import { notFound } from 'next/navigation'
import { X } from "@deemlol/next-icons";
import Link from 'next/link'
import Image from 'next/image'
import Rating from '@/app/ui/components/rating/rating'
import Ingredient from '@/app/ui/components/ingredient/ingredient';
import Step from '@/app/ui/components/step/step';

import styles from './detail.module.css'

export default async function BreadDetail({ id }: { id: string }) {
  const [bread] = await Promise.all([
    fetchBreadById(id),
  ]);

  if (!bread) {
    notFound();
  }

  return (
    <div className={styles.bread}>
      <h1 className={styles.title}>{bread.title}</h1>
      
      <div className={`${styles.thumbnail} relative`}>
        <Link className="button-back" href='/breads'>
          <X size={24} color="currentColor" />
        </Link> 
        <Image
          src={bread.picture ? `/uploads/breads/${bread.id}/${bread.picture}` : '/uploads/breads/thumbnail-placeholder.png'}
          alt={`${bread.title} cuit`}
          width="390"
          height="180"
          loading="eager"
        />
      </div>

      <ul className={styles.ingredients}>
        {bread.ingredients?.map((ingredient, index) => (
          <li key={`${ingredient.name}-${index}`} className={styles.ingredients__item}>
            <Ingredient ingredient={ingredient}/>
          </li>
        ))}
      </ul>

      {bread.rating ? (
        <div className={styles.rating}><Rating value={bread.rating}/></div>
      ): null}
      {bread.description ? (
        <p className={styles.description}>{bread.description}</p>
      ): null}

      <h2 className={styles.subtitle}>Log</h2>
      <ul className={styles.log}>
        {bread.steps?.map((step, index) => (
          <li key={`${index}`} className={styles.log__item}>
            <Step step={step} baseDate={bread.backingDate} />
          </li>
        ))}
      </ul>
    </div>
  )
}