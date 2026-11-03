"use client";

import { useEffect, useRef, useState } from "react";
import type { StudyLesson } from "../lib/study-lessons";

export default function PatternStudy({ lesson, number }: { lesson: StudyLesson; number: number }) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      dialog?.showModal();
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previous; };
    }
    dialog?.close();
  }, [open]);
  const step = lesson.frames[position];
  return <div className="study-panel">
    <button ref={triggerRef} className="button button-small" aria-haspopup="dialog" onClick={() => setOpen(true)}>Study · Python & walkthrough</button>
    <dialog ref={dialogRef} className="study-dialog" aria-labelledby={`study-title-${number}`} onCancel={() => setOpen(false)} onClose={() => { setOpen(false); triggerRef.current?.focus(); }} onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const box = event.currentTarget.getBoundingClientRect();
      if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) setOpen(false);
    }}>
      <div className="study-dialog-header"><h2 id={`study-title-${number}`}>{lesson.title}</h2><button autoFocus className="modal-close" aria-label="Close study" onClick={() => setOpen(false)}>×</button></div>
      {open && <div className="study-content">
        <p>{lesson.idea}</p>
        <h4>Recognize it</h4><ul>{lesson.cues.map((cue) => <li key={cue}>{cue}</li>)}</ul>
        <p><strong>Watch out:</strong> {lesson.warning}</p>
        <h4>Step through an example</h4><p>{lesson.example}</p>
        <div className="window-cells" aria-label="Example values and current pointer positions">
          {step.values.map((value, index) => <div key={index} className={`window-cell ${step.marks[index] ? "in-window" : ""}`}><small>{index}</small><strong title={String(value)}>{typeof value === "number" && !Number.isInteger(value) ? Number(value.toPrecision(6)) : value}</strong><span>{step.marks[index] ?? ""}</span></div>)}
        </div>
        <p className="trace-state">{step.state}</p>
        <p className="window-action" aria-live="polite">{step.explanation}</p>
        <div className="study-controls"><button className="button button-small" disabled={position === 0} onClick={() => setPosition(position - 1)}>Back</button><span>{position + 1} / {lesson.frames.length}</span><button className="button button-primary" disabled={position === lesson.frames.length - 1} onClick={() => setPosition(position + 1)}>Next</button><button className="text-button" onClick={() => setPosition(0)}>Reset</button></div>
        <h4>Python template</h4><pre className="study-code"><code>{lesson.code}</code></pre>
        <p><strong>Template complexity:</strong> {lesson.complexity}</p>
        <h4>Adapt it to variations</h4><ul>{lesson.variations.map((variation) => <li key={variation}>{variation}</li>)}</ul>
        <p className="study-sources"><a href={lesson.source} target="_blank" rel="noreferrer">Reference / practice ↗</a></p>
      </div>}
    </dialog>
  </div>;
}
