import styles from './ingredient.module.css'

import {
  Ingredient as IngredientType
} from '@/app/lib/definitions'
const startWithAVowel = (chr:string) => (/[aeiou]/i).test(chr[0].normalize('NFD').split('')[0]);

export default function Ingredient({ ingredient }: { ingredient: IngredientType; }) {
  return (
    <>
      <span className={styles.amount}>{ingredient.amount ?? 'QB'}</span> <span className={styles.unit}>{ingredient.unit}</span> <span className={styles.name}>{startWithAVowel(ingredient.name) ? "d'" : "de "}{ingredient.name}</span>
    </>
  )
}
