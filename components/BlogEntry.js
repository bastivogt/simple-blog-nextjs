import React from "react";
import Router, { useRouter } from "next/router";

export default function BlogEntry({
  id,
  title,
  content,
  image,
  date,
  featured,
  className = null,
  style = null,
}) {
  const router = useRouter();

  function buttonClickHandler(evt) {
    router.push(`/blog/${id}`);
  }
  return (
    <div className={className} style={style}>
      <div style={styles.container}>
        <img
          src={image}
          alt={title}
          style={styles.img}
          width="100%"
          height="auto"
        />
        <div style={styles.content}>
          <h3>{title}</h3>
          <p>{content}</p>
          <button onClick={buttonClickHandler}>Mehr...</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "stretch",

    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.3)",
  },
  img: {
    display: "blog",
    objectFit: "cover",
    maxWidth: "30%",
    width: "100%",

    flex: "1 1 0",
  },
  content: {
    flex: "1 1 0",
    padding: "20px",
  },
};
