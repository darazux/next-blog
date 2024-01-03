// app/blog/[slug]/page.js

import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { getAllBlogs, getSingleBlog } from '@/app/utils/mdQueries';
import PrevNext from '@/app/components/prevNext';

const SingleBlog = async (props) => {
  const { singleDocument } = await getSingleBlog(props);
  const { blogs } = await getAllBlogs();
  const pagePrev = blogs.filter(
    (blog) => blog.frontmatter.id === singleDocument.data.id - 1,
  );
  const pageNext = blogs.filter(
    (blog) => blog.frontmatter.id === singleDocument.data.id + 1,
  );
  return (
    <>
      <div className="img-container">
        <Image
          src={singleDocument.data.image}
          alt="blog-image"
          height={500}
          width={1000}
          quality={90}
          priority={true}
        />
      </div>
      <div className="wrapper">
        <div className="container">
          <h1>{singleDocument.data.title}</h1>
          <p>{singleDocument.data.date}</p>
          <ReactMarkdown>{singleDocument.content}</ReactMarkdown>
        </div>
        <PrevNext prev={pagePrev} next={pageNext} />
      </div>
    </>
  );
};

export default SingleBlog;

export async function generateStaticParams() {
  const { blogs } = await getAllBlogs();
  const paths = blogs.map((blog) => `/${blog.slug}`);
  return paths;
}
