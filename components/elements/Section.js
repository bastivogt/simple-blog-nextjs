import React from "react";

export default function Section({
  children,
  paddingTop = "75px",
  paddingBottom = "75px",
  backgroundColor = "transparent",
  color = "inherit",
  imageSrc = "",
  minHeight = "inherit",
  className = null,
  style = null,
}) {
  const styles = {
    section: {
      paddingTop: paddingTop,
      paddingBottom: paddingBottom,
      color: color,
      backgroundColor: backgroundColor,
      backgroundImage: `url("${imageSrc}")`,
      backgroundAttachment: "scroll",
      backgroundPosition: "50% 50%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      minHeight: minHeight,

      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    test: {
      backgroundColor: "green",
    },
  };
  return (
    <section className={className} style={style}>
      <div style={styles.section}>{children}</div>
    </section>
  );
}
