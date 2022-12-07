import { Header } from './header';
import { Footer } from './footer';

export default function DefaultLayout(
  { children, title, description, icon, links }: 
  { children: JSX.Element|string|Array<JSX.Element>, title?: string, description?: string, icon?: string, 
    links?: Array<{href:string, label:string}>}
  ): JSX.Element
{
  return (
    <div>
      <Header title={title} description={description} icon={icon} links={links} />
      {children}
      <Footer />
    </div>
  );
}