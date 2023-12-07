import React from "react";

export default function Inner({
  children,
  maxWidth = "1100px",
  backgroundColor = "transparent",
  color = "inherit",
  padding = "20px",
}) {
  const styles = {
    div: {
      backgroundColor: backgroundColor,
      maxWidth: maxWidth,
      width: "100%",
      padding: padding,
    },
  };
  return <div style={styles.div}>{children}</div>;
}
