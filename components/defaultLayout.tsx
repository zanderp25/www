import { Header } from './header';
import { Footer } from './footer';

export default function DefaultLayout({ children, ...options }) {
  return (
    <div>
      <Header {...options} />
      {children}
      <Footer />
    </div>
  );
}