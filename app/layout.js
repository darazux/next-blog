import { Inter } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';
import './styles/all.css';
import './styles/blog.css';
import './styles/common.css';
import './styles/contact.css';
import './styles/index.css';
import './styles/singleBlog.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
