"use client";

import { useEffect, useId, useRef, useState } from "react";

export default function HeaderSettings({ onAbout, onImport, onExport }: {
  onAbout: () => void; onImport: () => void; onExport: () => void;
}) {
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
  const action = (callback: () => void) => { setOpen(false); trigger.current?.focus(); callback(); };
  return <div ref={root} className="header-settings" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false); }}>
    <button ref={trigger} className="button settings-trigger" aria-label="Settings" aria-expanded={open} aria-controls={open ? id : undefined} onClick={() => setOpen(!open)}>
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m9 3-.6 2.2-2 .9-2-.7-2 3.4 1.5 1.6v2.3l-1.5 1.6 2 3.4 2-.7 2 .9L9 21h4l.6-2.2 2-.9 2 .7 2-3.4-1.5-1.6v-2.3l1.5-1.6-2-3.4-2 .7-2-.9L13 3Z"/><circle cx="11" cy="12" r="3"/></svg>
      <span>Settings</span>
    </button>
    {open && <div id={id} className="settings-menu" aria-label="Settings actions">
      <button onClick={() => action(onAbout)}><span>About</span><small>How to use the Atlas</small></button>
      <button onClick={() => action(onImport)}><span>Import backup</span><small>Restore or merge saved progress</small></button>
      <button onClick={() => action(onExport)}><span>Export backup</span><small>Download a copy of your progress</small></button>
    </div>}
  </div>;
}
