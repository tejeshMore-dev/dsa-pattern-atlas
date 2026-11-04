"use client";

import { useEffect, useId, useRef, useState } from "react";

export default function FilterSelect({ label, value, options, onChange }: {
  label: string; value: string;
  options: { value: string; label: string; tone?: string }[];
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const selected = Math.max(0, options.findIndex((option) => option.value === value));
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (!open) return;
    optionRefs.current[active]?.focus();
  }, [open, active]);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [open]);
  const choose = (next: string) => { onChange(next); setOpen(false); triggerRef.current?.focus(); };
  return <div ref={rootRef} className={`filter-select ${value !== "all" ? "has-filter" : ""}`} onBlur={(event) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
  }}>
    <button ref={triggerRef} type="button" className="filter-select-trigger" aria-label={`${label}: ${options[selected].label}`} aria-haspopup="listbox" aria-expanded={open} aria-controls={open ? id : undefined} onClick={() => { setActive(selected); setOpen(!open); }} onKeyDown={(event) => {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); setActive(selected); setOpen(true); }
    }}>
      <span className="filter-select-value">{options[selected].tone && <i className={`filter-dot tone-${options[selected].tone}`} aria-hidden="true"/>}{options[selected].label}</span>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="m7 10 5 5 5-5"/></svg>
    </button>
    {open && <div id={id} role="listbox" aria-label={label} className="filter-select-menu" onKeyDown={(event) => {
      if (event.key === "Escape") { event.preventDefault(); event.stopPropagation(); setOpen(false); triggerRef.current?.focus(); }
      if (event.key === "ArrowDown") { event.preventDefault(); setActive((active + 1) % options.length); }
      if (event.key === "ArrowUp") { event.preventDefault(); setActive((active - 1 + options.length) % options.length); }
      if (event.key === "Home") { event.preventDefault(); setActive(0); }
      if (event.key === "End") { event.preventDefault(); setActive(options.length - 1); }
      if (event.key.length === 1 && /[a-z]/i.test(event.key)) {
        const next = options.findIndex((option, index) => index > active && option.label.toLowerCase().startsWith(event.key.toLowerCase()));
        const fallback = options.findIndex((option) => option.label.toLowerCase().startsWith(event.key.toLowerCase()));
        if (next >= 0 || fallback >= 0) { event.preventDefault(); setActive(next >= 0 ? next : fallback); }
      }
    }}>
      <div className="filter-menu-label" role="presentation">{label}</div>
      {options.map((option, index) => <button key={option.value} ref={(element) => { optionRefs.current[index] = element; }} type="button" role="option" aria-selected={value === option.value} tabIndex={active === index ? 0 : -1} onFocus={() => setActive(index)} onClick={() => choose(option.value)}>
        <span className="filter-select-value">{option.tone && <i className={`filter-dot tone-${option.tone}`} aria-hidden="true"/>}{option.label}</span>
        {value === option.value && <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>}
      </button>)}
    </div>}
  </div>;
}
