import styles from './step.module.css'
import { formatDateToLocal, formatRelativeDay } from '@/app/lib/utils';

                    

import {
  Step as StepType
} from '@/app/lib/definitions'

export default function Step({ step, baseDate }: { step: StepType; baseDate: string  }) {
  const relativeDate = formatRelativeDay(step.date, baseDate);
  
  return (
    <div className={styles.step}>
      <div className={styles.meta}>
        <h3 className={styles.title}>{step.title}</h3>
        { (step.description) ? (
          <p className={styles.description}>{step.description}</p>
        ) : null }
      </div>
      <p className={styles.date}>{relativeDate ? (<><span className={styles.day}>J+{relativeDate}</span><br/></>) : ''}{formatDateToLocal(step.date)}</p>
    </div>
  )
}
