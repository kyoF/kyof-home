import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

function RichTextEditor() {
  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty()
  );

  return (
    <div>
      <p>ddd</p>
      <Editor editorState={editorState} onChange={setEditorState} />
    </div>
  );
}

export default RichTextEditor;
