'use client';

import { useEffect, useState } from 'react';

export default function FloatingToolbar() {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const applyFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  const clearFormatting = () => {
    document.execCommand('removeFormat');
  };

  const applyHeading = (tag: 'h2' | 'h3') => {
    document.execCommand('formatBlock', false, tag);
  };

  const INTERNAL_LINK_REGEX = /^(\/(?!\/)|#)[A-Za-z0-9\-\/#?=&._~]+$/;

  const addLink = () => {
    const url = prompt('Enter URL');
    if (!url) return;

    const isInternal = url.startsWith('/') || url.startsWith('#');

    if (!isInternal || !INTERNAL_LINK_REGEX.test(url)) {
      alert('Only internal links allowed');
      return;
    }

    document.execCommand('createLink', false, url);
  };

  useEffect(() => {
    const TOOLBAR_HEIGHT = 40;
    const OFFSET = 8;

    const handleSelection = () => {
      const selection = window.getSelection();

      if (!selection || selection.rangeCount === 0) {
        setVisible(false);
        return;
      }

      const text = selection.toString().trim();
      if (!text) {
        setVisible(false);
        return;
      }

      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      let top;

      if (rect.top > TOOLBAR_HEIGHT + OFFSET) {
        top = rect.top - TOOLBAR_HEIGHT - OFFSET;
      } else {
        top = rect.bottom + OFFSET;
      }

      const left = Math.min(window.innerWidth - 100, Math.max(100, rect.left + rect.width / 2));

      setVisible(true);
      setPosition({ top, left });
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('keyup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('keyup', handleSelection);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed z-50 bg-[var(--surface)] border border-[var(--border)] rounded-xl px-2 py-1 flex gap-2 items-center shadow-lg"
      style={{
        top: position.top,
        left: position.left,
        transform: 'translateX(-50%)',
      }}
    >
      {/* Bold */}
      <button
        className="btn"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => applyFormat('bold')}
      >
        <b>B</b>
      </button>

      {/* Italic */}
      <button
        className="btn"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => applyFormat('italic')}
      >
        <i>I</i>
      </button>

      {/* H2 */}
      <button
        className="btn"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => applyHeading('h2')}
      >
        H2
      </button>

      {/* H3 */}
      <button
        className="btn"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => applyHeading('h3')}
      >
        H3
      </button>

      {/* Link */}
      <button className="btn" onMouseDown={(e) => e.preventDefault()} onClick={addLink}>
        🔗
      </button>

      {/* Clear formatting */}
      <button className="btn" onMouseDown={(e) => e.preventDefault()} onClick={clearFormatting}>
        ✖
      </button>
    </div>
  );
}
