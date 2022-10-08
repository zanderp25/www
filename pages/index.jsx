import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

import { Header } from '../components/header';
import { Footer } from '../components/footer';

function Title({ title }) {
  return <h1>{title ? title : 'Lorem Ipsum'}</h1>;
}

export default function HomePage() {
  return (
    <div>
      <Header />
      <Image src="/assets/icons/Zanderp25.png" width={256} height={256} />
      <Title title="Zanderp25" />
      <Link href="/about">About</Link>
      <Footer />
    </div>
  );
}