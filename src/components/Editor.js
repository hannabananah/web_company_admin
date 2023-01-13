import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import useStyles from "~/styles/Editor";

export const EditorTool = () => {
  const classes = useStyles();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <>
      <Editor
        editorState={editorState} // 초기값 설정
        onEditorStateChange={onEditorStateChange} // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        wrapperClassName={classes.wrapper} // 에디터와 툴바 모두에 적용되는 클래스
        editorClassName={classes.editor} // 에디터 주변에 적용된 클래스
        toolbarClassName="toolbar-class" // 툴바 주위에 적용된 클래스
        // 한국어 설정
        // localization={{
        //   locale: "ko",
        // }}
        // 툴바 설정
        toolbar={{
          options: ["blockType", "image"],
          blockType: {
            inDropdown: true,
            options: ["H1", "H2"],
            className: "blockText",
            dropdownClassName: "blockTextDown",
          },
          image: {
            uploadCallback: EditorTool,
            inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
            alt: { present: true, mandatory: false },
          },
        }}
        placeholder="내용을 작성해주세요."
      />
    </>
  );
};

export default EditorTool;
