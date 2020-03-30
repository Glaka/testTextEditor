import React, { useState } from "react";
import "isomorphic-fetch";
import 'bootstrap/dist/css/bootstrap.css';
import ToolbarComponent from "./ToolbarComponent";
import RelatedWordsComponent from "./RelatedWordsComponent";
import { IRelatedWords, ItoolBarState } from "../interface";

const getRelatedWords = async (word: string) => {
  const res = await fetch(`https://api.datamuse.com/words?ml=${word}&max=10`);
  return res.json();
};

const EditorComponent: React.FC = () => {
  const [toolbar, setToolbar] = useState<ItoolBarState>({});
  const handleBlur = () => setToolbar({});

  const [relatedWords, setRelatedWords] = useState<IRelatedWords>({
    show: false, words: [], range: undefined
  });
  const handleDoubleClick = async () => {
    if (document.getSelection() && document.getSelection()!.toString()) {
      const words = await getRelatedWords(document.getSelection()!.toString());
      const sel = document.getSelection();
      setRelatedWords({ show: true, words, range: sel!.getRangeAt(0) });
    }
  };

  const handleOnEditorSelect = () => {
    const newState = { ...toolbar };
    newState.bold = document.queryCommandState("bold");
    newState.italic = document.queryCommandState("italic");
    newState.underline = document.queryCommandState("underline");
    setColorButtonColor(document.queryCommandValue("backColor"));
    setToolbar(newState);
    setRelatedWords({ show: false, words: [] });
  };

  const [colorButtonColor, setColorButtonColor] = useState("#fff");

  return (
    <div className="container">
      <ToolbarComponent
        toolBarState={toolbar}
        textBgColor={colorButtonColor}
      />
      <div
        className="editor bg-light p-3"
        contentEditable
        onSelect={handleOnEditorSelect}
        onDoubleClick={handleDoubleClick}
        onBlur={handleBlur}
      >
        <h1>Simple Html editor</h1>
        <p>Good to start</p>
      </div>
      <RelatedWordsComponent
        relatedWords={relatedWords}
        setRelatedWords={setRelatedWords}
      />
    </div>
  );
};

export default EditorComponent;