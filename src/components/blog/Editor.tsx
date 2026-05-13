'use client';
import { useEditor, EditorContent } from '@tiptap/react';
import { useEffect } from 'react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder';
import TextAlign from '@tiptap/extension-text-align';
import { TextStyle } from '@tiptap/extension-text-style';
import FloatingToolbar from './floatingtoolbar';

export default function Editor({ content, onChange }: any) {
  const INTERNAL_LINK_REGEX = /^(\/(?!\/)|#)[A-Za-z0-9\-\/#?=&._~]+$/;
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        paragraph: {
          HTMLAttributes: {
            class: 'blog-paragraph',
          },
        },
        link: {
          openOnClick: true,
          HTMLAttributes: {
            class: 'blog-link',
          },
        },
      }),
      TextStyle,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Placeholder.configure({
        placeholder: 'Start writing your blog...',
      }),
    ],

    content,

    editorProps: {
      attributes: {
        class:
          'prose prose-invert max-w-none focus:outline-none [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:ml-6 [&_ol]:ml-6',
      },
    },

    immediatelyRender: false,

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    // if (editor && content !== lastContent.current) {
    //   editor.commands.setContent(content);
    //   lastContent.current = content;
    // }
    const html = editor.getHTML();
    if (content !== html) {
      editor.commands.setContent(content, { emitUpdate: false });
    }
  }, [editor, content]);

  if (!editor) return null;

  // 🔗 ADD LINK
  const addLink = () => {
    const url = prompt('Enter URL');

    if (!url) return;

    const isInternal = url.startsWith('/') || url.startsWith('#');
    if (!isInternal || !INTERNAL_LINK_REGEX.test(url)) {
      alert('Only internal links allowed');
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url, class: 'blog-link' }).run();
  };
  return (
    <div className="relative">
      <FloatingToolbar />

      <div className="p-4 text-white">
        {/* TOOLBAR */}
        <div className="flex flex-wrap gap-3 mb-4 border border-gray-700 rounded-xl p-3 bg-[#020617]">
          {/* FONT SIZE */}
          {/* H2 */}
          <button
            onClick={() => {
              editor.chain().focus().clearNodes().setHeading({ level: 2 }).run();
            }}
            className={`px-3 py-1 rounded ${
              editor.isActive('heading', { level: 2 })
                ? 'bg-cyan-500 text-black'
                : 'hover:bg-white/10'
            }`}
          >
            H2
          </button>

          {/* H3 */}
          <button
            onClick={() => {
              editor.chain().focus().clearNodes().setHeading({ level: 3 }).run();
            }}
            className={`px-3 py-1 rounded ${
              editor.isActive('heading', { level: 3 })
                ? 'bg-cyan-500 text-black'
                : 'hover:bg-white/10'
            }`}
          >
            H3
          </button>

          {/* BOLD */}
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`px-3 py-1 rounded ${
              editor.isActive('bold') ? 'bg-cyan-500 text-black' : 'hover:bg-white/10'
            }`}
          >
            B
          </button>

          {/* ITALIC */}
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`px-3 py-1 rounded italic ${
              editor.isActive('italic') ? 'bg-cyan-500 text-black' : 'hover:bg-white/10'
            }`}
          >
            I
          </button>

          {/* UNDERLINE */}
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`px-3 py-1 rounded underline ${
              editor.isActive('underline') ? 'bg-cyan-500 text-black' : 'hover:bg-white/10'
            }`}
          >
            U
          </button>

          {/* ALIGNMENT */}
          <select
            onChange={(e) => editor.chain().focus().setTextAlign(e.target.value).run()}
            className="bg-[#020617] text-white border border-gray-600 rounded px-2 py-1"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>

          {/* BULLET LIST */}
          <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={`px-3 py-1 rounded ${
              editor.isActive('bulletList') ? 'bg-cyan-500 text-black' : 'hover:bg-white/10'
            }`}
          >
            • List
          </button>

          {/* NUMBER LIST */}
          <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={`px-3 py-1 rounded ${
              editor.isActive('orderedList') ? 'bg-cyan-500 text-black' : 'hover:bg-white/10'
            }`}
          >
            1. List
          </button>

          {/* QUOTE */}
          <button
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={`px-3 py-1 rounded ${
              editor.isActive('blockquote') ? 'bg-cyan-500 text-black' : 'hover:bg-white/10'
            }`}
          >
            ❝
          </button>

          {/* LINK */}
          <button
            onClick={addLink}
            className={`px-3 py-1 rounded ${
              editor.isActive('link') ? 'bg-cyan-500 text-black' : 'hover:bg-white/10'
            }`}
          >
            🔗
          </button>

          {/* REMOVE LINK */}
          <button
            onClick={() => editor.chain().focus().unsetLink().run()}
            className="px-3 py-1 rounded hover:bg-red-500/20"
          >
            ❌
          </button>

          {/* CLEAR */}
          <button
            onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
            className="px-3 py-1 rounded hover:bg-red-500/20"
          >
            Clear
          </button>
        </div>

        {/* EDITOR */}
        <EditorContent
          editor={editor}
          className="min-h-[250px] p-2 cursor-text
        prose prose-invert
        [&_h2]:text-2xl [&_h2]:font-bold
        [&_h3]:text-xl [&_h3]:font-semibold"
        />
      </div>
    </div>
  );
}
