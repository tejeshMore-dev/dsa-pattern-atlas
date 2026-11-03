"use client";

import { useEffect, useRef, useState } from "react";
import { LONGEST_TEMPLATE, MINIMUM_TEMPLATE, uniqueWindowSteps, WINDOW_IDEA, WINDOW_CUES } from "../lib/sliding-window-study";

export default function SlidingWindowStudy() {
  const [open, setOpen] = useState(false);
  const [example, setExample] = useState("abba");
  const [position, setPosition] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (open) {
      dialog?.showModal();
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => { document.body.style.overflow = previousOverflow; };
    }
    dialog?.close();
  }, [open]);
  const steps = uniqueWindowSteps(example);
  const step = steps[position];
  return <div className="study-panel">
    <button ref={triggerRef} className="button button-small" aria-haspopup="dialog" onClick={() => setOpen(true)}>Study · Python & walkthrough</button>
    <dialog ref={dialogRef} className="study-dialog" aria-labelledby="sliding-study-title" onCancel={() => setOpen(false)} onClose={() => { setOpen(false); triggerRef.current?.focus(); }} onClick={(event) => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setOpen(false); } }}>
    <div className="study-dialog-header"><h2 id="sliding-study-title">Variable sliding window</h2><button className="modal-close" autoFocus aria-label="Close study" onClick={() => setOpen(false)}>×</button></div>
    {open && <div className="study-content">
      <p>{WINDOW_IDEA}</p>
      <h4>Use when</h4>
      <ul>{WINDOW_CUES.map((cue) => <li key={cue}>{cue}</li>)}</ul>
      <p><strong>Watch out:</strong> This is a substring/subarray technique, not a subsequence technique. Sum and product windows need suitable constraints: negative numbers can make the usual shrinking rule incorrect.</p>
      <h4>Walk through: longest substring without repeats</h4>
      <label className="study-example">Example <select value={example} onChange={(event) => { setExample(event.target.value); setPosition(0); }}><option>abba</option><option>abcabcbb</option><option>pwwkew</option><option>aaaa</option></select></label>
      <div className="window-cells" aria-label="Input characters; highlighted cells are the current window">
        {[...example].map((char, index) => <div key={index} className={`window-cell ${index >= step.left && index <= step.right ? step.valid ? "in-window" : "invalid-window" : ""}`}>
          <small>{index}</small><strong>{char}</strong><span>{index === step.left ? "L" : ""}{index === step.left && index === step.right ? " / " : ""}{index === step.right ? "R" : ""}</span>
        </div>)}
      </div>
      <div className="window-state"><span>Left: {step.left}</span><span>Right: {step.right < 0 ? "—" : step.right}</span><span>Best: {step.best}</span><span>{step.valid ? "Valid window" : "Duplicate: shrink"}</span></div>
      <p className="window-action" aria-live="polite">{step.action}</p>
      <p className="window-counts">Counts: {Object.entries(step.counts).filter(([, count]) => count > 0).map(([char, count]) => `${char}: ${count}`).join(" · ") || "empty"}</p>
      <div className="study-controls"><button className="button button-small" disabled={position === 0} onClick={() => setPosition(position - 1)}>Back</button><span>{position + 1} / {steps.length}</span><button className="button button-primary" disabled={position === steps.length - 1} onClick={() => setPosition(position + 1)}>Next</button><button className="text-button" onClick={() => setPosition(0)}>Reset</button></div>
      <h4>Python template: longest valid window</h4>
      <pre className="study-code"><code>{LONGEST_TEMPLATE.split("\n").map((line, index) => <span key={index} className={index + 1 === step.line ? "active-code" : ""}><i>{index + 1}</i>{line}{"\n"}</span>)}</code></pre>
      <p>Both boundaries move forward at most n times: O(n) time with expected constant-time dictionary operations, O(min(n, Σ)) auxiliary space for counts. Keep the shrink condition in a <code>while</code>: one removal may not be enough.</p>
      <h4>What changes between variations?</h4>
      <ul><li><strong>At most k distinct:</strong> Track counts and the number of distinct values. Remove zero-count keys; shrink while distinct &gt; k.</li><li><strong>Positive sum threshold:</strong> Track a running sum instead of counts. For a minimum length, record the answer while the sum is large enough, then shrink.</li><li><strong>Exactly k distinct:</strong> Count atMost(k) − atMost(k−1). In each at-most pass, add right − left + 1 valid subarrays at each right boundary.</li><li><strong>Minimum covering window:</strong> Track how many required characters are missing. Expand until none are missing, then record and shrink while coverage remains valid.</li></ul>
      <details><summary>Python template: minimum covering window</summary><pre className="study-code"><code>{MINIMUM_TEMPLATE}</code></pre><p>O(n + m) time and O(Σ) auxiliary space for the counts map, excluding the returned substring. n and m are input lengths; Σ is the distinct alphabet stored.</p></details>
      <p className="study-sources">Practice: <a href="https://leetcode.com/problems/longest-substring-without-repeating-characters/" target="_blank" rel="noreferrer">Longest Substring Without Repeating Characters ↗</a> · <a href="https://leetcode.com/problems/minimum-window-substring/" target="_blank" rel="noreferrer">Minimum Window Substring ↗</a></p>
    </div>}
    </dialog>
  </div>;
}
