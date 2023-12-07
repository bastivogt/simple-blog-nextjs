import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Section from "@/components/elements/Section";
import Inner from "@/components/elements/Inner";
import BlogData from "@/data";
import BlogEntry from "@/components/BlogEntry";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  //console.log(BlogData.getFeatured());
  return (
    <>
      <Head>
        <title>My Simple Blog</title>
        <meta name="description" content="My Simple Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${inter.className}`}>
        <Section
          backgroundColor="rebeccapurple"
          imageSrc="/images/benches-560435_1280.jpg"
          minHeight="500px"
          color="white"
        ></Section>
        <Section>
          <Inner>
            {BlogData.getFeaturedSortedByDate(false).map((blog) => {
              return (
                <BlogEntry
                  id={blog.id}
                  image={blog.image}
                  content={blog.content}
                  date={blog.date}
                  title={blog.title}
                  featured={blog.featured}
                  key={blog.id}
                  style={{ marginBottom: "30px" }}
                />
              );
            })}
          </Inner>
        </Section>
      </main>
    </>
  );
}
