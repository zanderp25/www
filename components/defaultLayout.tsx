import { Header } from './header';
import { Footer } from './footer';

import Head from 'next/head';

export default function DefaultLayout(
  { children, title, description, icon, links }: 
  { children: JSX.Element|string|Array<JSX.Element>, title?: string, description?: string, icon?: string, 
    links?: Array<{href:string, label:string}>}
  ): JSX.Element
{
  return (
    <div style={{padding:"env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)"}}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </Head>
      <Header title={title} description={description} icon={icon} links={links} />
      {children}
      <Footer />
    </div>
  );
}