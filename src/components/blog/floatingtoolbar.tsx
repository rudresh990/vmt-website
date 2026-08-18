'use client';

import { useEffect, useState } from 'react';
import type { Editor } from '@tiptap/react';

interface FloatingToolbarProps {
  editor: Editor;
}

export default function FloatingToolbar({
  editor,
}: FloatingToolbarProps) {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
  });

  const INTERNAL_LINK_REGEX =
    /^(\/(?!\/)|#)[A-Za-z0-9\-\/#?=&._~]+$/;

  const addLink = () => {
    const url = prompt('Enter URL');

    if (!url) return;

    const isInternal =
      url.startsWith('/') || url.startsWith('#');

    if (
      !isInternal ||
      !INTERNAL_LINK_REGEX.test(url)
    ) {
      alert('Only internal links allowed');
      return;
    }

    editor
      .chain()
      .focus()
      .extendMarkRange('link')
      .setLink({
        href: url,
      })
      .run();
  };

  const applyFormat = (
    command: 'bold' | 'italic'
  ) => {
    if (command === 'bold') {
      editor.chain().focus().toggleBold().run();
    }

    if (command === 'italic') {
      editor.chain().focus().toggleItalic().run();
    }
  };

  const clearFormatting = () => {
    editor
      .chain()
      .focus()
      .unsetAllMarks()
      .clearNodes()
      .run();
  };

  const applyHeading = (level: 2 | 3) => {
    editor
      .chain()
      .focus()
      .setHeading({ level })
      .run();
  };

  useEffect(() => {
    const TOOLBAR_HEIGHT = 40;
    const OFFSET = 8;

    const handleSelection = () => {
      if (!editor) return;

      const { from, to } = editor.state.selection;

      // No text selected
      if (from === to) {
        setVisible(false);
        return;
      }

      const selectedText = editor.state.doc.textBetween(
        from,
        to,
        ' '
      );

      if (!selectedText.trim()) {
        setVisible(false);
        return;
      }

      const domSelection = window.getSelection();

      if (
        !domSelection ||
        domSelection.rangeCount === 0
      ) {
        setVisible(false);
        return;
      }

      const range = domSelection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      let top;

      if (
        rect.top >
        TOOLBAR_HEIGHT + OFFSET
      ) {
        top =
          rect.top -
          TOOLBAR_HEIGHT -
          OFFSET;
      } else {
        top = rect.bottom + OFFSET;
      }

      const left = Math.min(
        window.innerWidth - 100,
        Math.max(
          100,
          rect.left + rect.width / 2
        )
      );

      setVisible(true);

      setPosition({
        top,
        left,
      });
    };

    document.addEventListener(
      'mouseup',
      handleSelection
    );

    document.addEventListener(
      'keyup',
      handleSelection
    );

    return () => {
      document.removeEventListener(
        'mouseup',
        handleSelection
      );

      document.removeEventListener(
        'keyup',
        handleSelection
      );
    };
  }, [editor]);

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
        type="button"
        className="btn"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => applyFormat('bold')}
      >
        <b>B</b>
      </button>

      {/* Italic */}
      <button
        type="button"
        className="btn"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => applyFormat('italic')}
      >
        <i>I</i>
      </button>

      {/* H2 */}
      <button
        type="button"
        className="btn"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => applyHeading(2)}
      >
        H2
      </button>

      {/* H3 */}
      <button
        type="button"
        className="btn"
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => applyHeading(3)}
      >
        H3
      </button>

      {/* Link */}
      <button
        type="button"
        className={`btn ${
          editor.isActive('link')
            ? 'bg-cyan-500 text-black'
            : ''
        }`}
        onMouseDown={(e) =>
          e.preventDefault()
        }
        onClick={addLink}
      >
        🔗
      </button>

      {/* Remove Link */}
      <button
        type="button"
        className="btn"
        onMouseDown={(e) =>
          e.preventDefault()
        }
        onClick={() => {
          editor
            .chain()
            .focus()
            .extendMarkRange('link')
            .unsetLink()
            .run();
        }}
      >
        ❌
      </button>

      {/* Clear */}
      <button
        type="button"
        className="btn"
        onMouseDown={(e) =>
          e.preventDefault()
        }
        onClick={clearFormatting}
      >
        ✖
      </button>
    </div>
  );
}