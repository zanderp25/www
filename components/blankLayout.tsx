import Head from "next/head";

export default function BlankLayout(
  { children, title, description, icon = "/assets/icons/ZP25%20Circle.png", image}: 
  { children: JSX.Element|string|Array<JSX.Element>, title?: string, description?: string, icon?: string, image?: string }
  ): JSX.Element
{
  const hostname = typeof window !== 'undefined' 
    ? window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '')
    : 'https://zanderp25.com';

  if (image === undefined) image = icon;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="icon" href={icon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={hostname + image.replaceAll(' ',"%20")} />
      </Head>
      {children}
    </div>
  );
}