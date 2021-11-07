import React from "react";
import { Editor, EditorState, RichUtils, DraftEditorCommand } from "draft-js";
import "draft-js/dist/Draft.css";

function RichTextEditor() {
  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty()
  );
  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };

  return (
    <div>
      <p>ddd</p>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="test"
        handleKeyCommand={handleKeyCommand}
      />
    </div>
  );
}

export default RichTextEditor;
