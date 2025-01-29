import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import React from 'react';
import EditorExtensions from './EditorExtensions';
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';

function TextEditor() {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Start taking your notes here...',
            }),
            Highlight.configure({ multicolor: true }),
            Underline,
            Strike,
            Heading.configure({
                levels: [1, 2, 3],
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
        ],
        content: "",
        editorProps: {
            attributes: {
                class: 'focus:outline-none h-screen p-5'
            }
        }
    })
    return (
        <div>
            <EditorExtensions editor={editor} />
            <div>
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}

export default TextEditor;