import { useRouter } from "next/router";
import React from "react";
import BlogData from "@/data";
import Section from "@/components/elements/Section";
import Inner from "@/components/elements/Inner";

export default function BlogEntry() {
  const router = useRouter();
  const id = parseInt(router.query.id);

  const entryIndex = BlogData.getAll().findIndex((item) => item.id === id);

  const entry = BlogData.getEntryById(id);
  if (!entry) {
    return <h1>Nothing found</h1>;
  }
  const formattedDate = new Date(entry.date).toLocaleDateString();

  function backButtonClickHandler(evt) {
    router.back();
  }

  return (
    <div>
      <Section imageSrc={entry.image} minHeight="700px"></Section>
      <Section>
        <Inner>
          <div style={styles.dateContainer}>
            <time style={styles.date}>{formattedDate}</time>
          </div>
          <hr />
          <h1>{entry.title}</h1>
          <p>{entry.content}</p>
          <button onClick={backButtonClickHandler}>Back</button>
        </Inner>
      </Section>
    </div>
  );
}

const styles = {
  dateContainer: {
    disply: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  date: {
    textAlign: "right",
    flex: "1 1 0",
  },
};
