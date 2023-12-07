import React, { useState } from "react";
import { useRouter } from "next/router";
import Section from "@/components/elements/Section";
import Inner from "@/components/elements/Inner";
import BlogData from "@/data";
import BlogEntry from "@/components/BlogEntry";

import FilterEntries from "@/components/FilterEntries";

import { CounterService } from "@/CounterService";

export default function BlogPage() {
  const router = useRouter();
  function incHandler() {
    CounterService.incCount();
  }

  function decHandler() {
    CounterService.decCount();
  }

  function filterEntriesSearchHandler(evt) {
    const path = `/blog/${evt.year}/${evt.month}`;
    //console.log(path);
    router.push(path);
  }

  console.log("getYearsAsDict", BlogData.getYearsAndMonths());
  console.log("getYearsAsDict sorted", BlogData.getYearsAndMonthsSorted());
  return (
    <Section>
      <Inner>
        <h1>All Posts</h1>
        <button onClick={decHandler}>-</button>
        <p>{CounterService.getCount()}</p>
        <button onClick={incHandler}>+</button>
        <hr />
        <FilterEntries onSearch={filterEntriesSearchHandler} />
        <hr />
        {BlogData.getAllSortedByDate(false).map((blog) => {
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
  );
}
