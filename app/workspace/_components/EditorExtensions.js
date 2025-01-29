import { AlignCenter, AlignLeft, AlignRight, Bold, Code, Heading1, Heading2, Heading3, Highlighter, Italic, List, Strikethrough, TextQuote, Underline } from 'lucide-react';
import React from 'react';

function EditorExtensions({editor}) {
  return editor&&(
    <div className='p-5'>
        <div className="control-group">
            <div className="button-group flex gap-3">
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                    className={editor.isActive('heading', { level: 1 }) ? 'text-blue-500' : ''}
                >
                    <Heading1 size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                    className={editor.isActive('heading', { level: 2 }) ? 'text-blue-500' : ''}
                >
                    <Heading2 size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                    className={editor.isActive('heading', { level: 3 }) ? 'text-blue-500' : ''}
                >
                    <Heading3 size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'text-blue-500' : ''}
                >
                    <Bold size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={editor.isActive('italic') ? 'text-blue-500' : ''}
                >
                    <Italic size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={editor.isActive('underline') ? 'text-blue-500' : ''}
                >
                    <Underline size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={editor.isActive('strike') ? 'text-blue-500' : ''}
                >
                    <Strikethrough size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCode().run()}
                    className={editor.isActive('code') ? 'text-blue-500' : ''}
                >
                    <Code size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleHighlight().run()}
                    className={editor.isActive('highlight') ? 'text-blue-500' : ''}
                >
                    <Highlighter size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'text-blue-500' : ''}
                >
                    <List size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={editor.isActive('blockquote') ? 'text-blue-500' : ''}
                >
                    <TextQuote size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={editor.isActive({ textAlign: 'left' }) ? 'text-blue-500' : ''}
                >
                    <AlignLeft size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={editor.isActive({ textAlign: 'center' }) ? 'text-blue-500' : ''}
                >
                    <AlignCenter size={24} />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={editor.isActive({ textAlign: 'right' }) ? 'text-blue-500' : ''}
                >
                    <AlignRight size={24} />
                </button>
            </div>
        </div>
    </div>
  )
}

export default EditorExtensions;