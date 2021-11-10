import React from "react";
import { Editor, EditorState, RichUtils, DraftEditorCommand } from "draft-js";
import "draft-js/dist/Draft.css";
import { linkDecorator } from "./Link";

function RichTextEditor() {
  const [editorState, setEditorState] = React.useState<EditorState>(
    EditorState.createEmpty(linkDecorator)
  );
  const handleKeyCommand = (command: DraftEditorCommand) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return "handled";
    }
    return "not-handled";
  };
  const handleToggleClick = (e: React.MouseEvent, inlineStyle: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };
  const handleBlockClick = (e: React.MouseEvent, blockType: string) => {
    e.preventDefault();
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };
  const handleAddLink = () => {
    const selection = editorState.getSelection();
    const link = prompt("Please enter the URL of your link");
    if (!link) {
      setEditorState(RichUtils.toggleLink(editorState, selection, null));
      return;
    }
    const content = editorState.getCurrentContent();
    const contentWithEntity = content.createEntity("LINK", "MUTABLE", {
      url: link,
    });
    const newEditorState = EditorState.push(
      editorState,
      contentWithEntity,
      "apply-entity"
    );
    const entityKey = contentWithEntity.getLastCreatedEntityKey();
    setEditorState(RichUtils.toggleLink(newEditorState, selection, entityKey));
  };

  return (
    <div>
      <button onMouseDown={(e) => handleBlockClick(e, "header-one")}>H1</button>
      <button onMouseDown={(e) => handleBlockClick(e, "header-two")}>H2</button>
      <button onMouseDown={(e) => handleBlockClick(e, "header-three")}>
        H3
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "unstyled")}>
        Normal
      </button>
      <button onMouseDown={(e) => handleToggleClick(e, "BOLD")}>Bold</button>
      <button onMouseDown={(e) => handleToggleClick(e, "ITALIC")}>
        Italic
      </button>
      <button onMouseDown={(e) => handleToggleClick(e, "STRIKETHROUGH")}>
        strikthrough
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "order-list-item")}>
        Ordered List
      </button>
      <button onMouseDown={(e) => handleBlockClick(e, "unordered-list-item")}>
        Unordere List
      </button>
      <Editor
        editorState={editorState}
        onChange={setEditorState}
        placeholder="test"
        handleKeyCommand={handleKeyCommand}
      />
      <button
        disabled={editorState.getSelection().isCollapsed()}
        onMouseDown={(e) => {
          e.preventDefault();
          handleAddLink();
        }}
      >
        link
      </button>
      <button
        disabled={editorState.getUndoStack().size <= 0}
        onMouseDown={() => setEditorState(EditorState.undo(editorState))}
      >
        undo
      </button>
      <button
        disabled={editorState.getRedoStack().size <= 0}
        onMouseDown={() => setEditorState(EditorState.redo(editorState))}
      >
        redo
      </button>
    </div>
  );
}

export default RichTextEditor;
