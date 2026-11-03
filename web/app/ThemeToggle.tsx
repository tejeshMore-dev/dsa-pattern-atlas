"use client";

export default function ThemeToggle() {
  return (
    <button className="button button-icon theme-toggle" aria-label="Toggle light and dark theme" onClick={() => {
      const theme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      document.documentElement.dataset.theme = theme;
      try { localStorage.setItem("tejesh-theme", theme); } catch { /* Theme still works without storage. */ }
    }}>
      <span aria-hidden="true">◐</span>
    </button>
  );
}
