"use client";

import { useEffect, useId, useRef, useState, type ReactNode } from "react";

export default function FilterPanel({ count, children, onReset }: { count: number; children: ReactNode; onReset: () => void }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const id = useId();
  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [open]);
  return <div ref={root} className="filter-panel" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false); }}>
    <button ref={trigger} className={`button toolbar-filter ${count ? "filters-active" : ""}`} aria-expanded={open} aria-controls={open ? id : undefined} onClick={() => setOpen(!open)}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M4 7h16M4 17h16"/><circle cx="9" cy="7" r="2.5" fill="var(--paper-bright)"/><circle cx="15" cy="17" r="2.5" fill="var(--paper-bright)"/></svg>
      Filters {count > 0 && <span className="filter-count">{count}</span>}
    </button>
    {open && <div id={id} className="filter-panel-popover" role="region" aria-label="Question filters">
      <div className="filter-panel-heading"><strong>Filter questions</strong><button autoFocus aria-label="Close filters" onClick={() => { setOpen(false); trigger.current?.focus(); }}>×</button></div>
      {children}
      <div className="filter-panel-footer"><button className="text-button" disabled={!count} onClick={onReset}>Reset filters</button><button className="button button-small" onClick={() => { setOpen(false); trigger.current?.focus(); }}>Done</button></div>
    </div>}
  </div>;
}
