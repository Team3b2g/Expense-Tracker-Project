import React from "react";
import styles from "./Navbar.module.css";

export default function Navbar({ page, onNavigate, userName }) {
  const initials = userName
    ? userName.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2)
    : "AS";

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo} onClick={() => onNavigate("home")}>
          <span className={styles.logoIcon}>💸</span>
          <span className={styles.logoText}>SpendSmart</span>
        </div>

        {/* Nav links */}
        <div className={styles.links}>
          <button
            className={`${styles.link} ${page === "home" ? styles.active : ""}`}
            onClick={() => onNavigate("home")}
          >
            Home
          </button>
          <button
            className={`${styles.link} ${page === "expenses" ? styles.active : ""}`}
            onClick={() => onNavigate("expenses")}
          >
            Expenses
          </button>
        </div>

        {/* Avatar */}
        <div className={styles.avatar}>{initials}</div>
      </div>
    </nav>
  );
}
