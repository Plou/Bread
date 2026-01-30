import BreadDetail from '@/app/ui/breads/detail'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bread',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params

  return (
    <>
      <BreadDetail id={params.id}/>
    </>
  )
}