import styles from "./page.module.css";

import { Suspense } from 'react';
import BreadListSkeleton from '@/app/ui/skeletons/BreadsSkeleton';
import BreadList from '@/app/ui/breads/list';
import { fetchBreadsPages } from '@/app/lib/data';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Latest breads',
};



export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>
}) {

  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchBreadsPages(query);



  return (
    <>
      <Suspense fallback={<BreadListSkeleton />}>
        <BreadList query={query} currentPage={currentPage}/>
      </Suspense>
      {/* <Pagination totalPages={totalPages} /> */}
    </>
  )
}