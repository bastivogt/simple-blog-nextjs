import Link from "next/link";
import React from "react";
import classes from "@/components/layout/Topbar.module.css";

export default function Topbar({ className, style }) {
  return (
    <div className={`${classes.topbarContainer} ${className}`} style={style}>
      <h1 className={`${classes.item} ${classes.logo}`}>
        <Link href="/">Logo</Link>
      </h1>
      <nav className={`${classes.item} ${classes.nav}`}>
        <ul className={classes.navList}>
          <li className={classes.navListItem}>
            <Link className={classes.navListItemLink} href="/">
              Home
            </Link>
          </li>
          <li className={classes.navListItem}>
            <Link className={classes.navListItemLink} href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
