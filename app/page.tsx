'use client';
import Image from 'next/image';
import Search from './Components/Search';
import Loading from './loading';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Loading />

      <Search />
    </>
  );
}
