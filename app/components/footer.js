// app/components/footer.js

import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://www.google.com/">
          <img src="/images/github.svg" alt="logo" />
        </a>
        <hr />
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <p>©{new Date().getFullYear()} darazux</p>
      </div>
    </footer>
  );
};

export default Footer;
