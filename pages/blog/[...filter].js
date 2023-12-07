import BlogEntry from "@/components/BlogEntry";
import Inner from "@/components/elements/Inner";
import Section from "@/components/elements/Section";
import BlogData from "@/data";
import { useRouter } from "next/router";
import React from "react";

export default function BlogFilterPage() {
  const router = useRouter();
  console.log(router.query.filter);

  const fiteredData = router.query.filter;

  if (!fiteredData) {
    return <p>Loading...</p>;
  }

  const year = parseInt(router.query.filter[0]);
  const month = parseInt(router.query.filter[1]);

  if (!year || !month || fiteredData.length === 0 || fiteredData.length > 2) {
    return <p>Wrong Filter Adjustment!</p>;
  }

  const entries = BlogData.getDateFilteredEntries(year, month);

  if (!entries) {
    return <p>No Entries Found!</p>;
  }

  return (
    <>
      <Section>
        <Inner>
          <h2>Search Results</h2>
          {entries.map((item) => {
            return (
              <BlogEntry
                id={item.id}
                content={item.content}
                featured={item.featured}
                title={item.title}
                date={item.date}
                image={item.image}
                key={item.id}
                style={{ marginBottom: "30px" }}
              />
            );
          })}
          <hr />
          <button onClick={(evt) => router.push("/blog")}>Back to Blog</button>
        </Inner>
      </Section>
    </>
  );
}
