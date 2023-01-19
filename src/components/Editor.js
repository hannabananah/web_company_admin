import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "~/styles/Editor.css";
import useStyles from "~/styles/Editor";

export const EditorTool = (props) => {
  const classes = useStyles();
  const { editorState, onEditorStateChange, _uploadImageCallBack } = props;

  // const uploadCallback = (file) => {
  //   return new Promise((resolve, reject) => {
  //       const reader = new FileReader();

  //       reader.onloadend = async () => {
  //           const formData = new FormData();
  //           formData.append("multipartFiles", file);
  //           const res = await axios.post('http://localhost:8080/uploadImage', formData);
  //           resolve({ data: { link: res.data } });
  //       };
  //       reader.readAsDataURL(file);
  //   });
  // };

  return (
    <>
      <Editor
        editorState={editorState} // 초기값 설정
        onEditorStateChange={onEditorStateChange} // 에디터의 값이 변경될 때마다 onEditorStateChange 호출
        wrapperClassName={classes.wrapper} // 에디터와 툴바 모두에 적용되는 클래스
        editorClassName={classes.editor} // 에디터 주변에 적용된 클래스
        toolbarClassName={classes.toolbar} // 툴바 주위에 적용된 클래스
        // 한국어 설정
        localization={{
          locale: "ko",
        }}
        // 툴바 설정
        toolbar={{
          // inDropdown: 해당 항목과 관련된 항목을 드롭다운으로 나타낼것인지
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
          image: {
            uploadCallback: _uploadImageCallBack,
            previewImage: true,
            alt: { present: true, mandatory: false },
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
          }
        }}
        placeholder="내용을 작성해주세요."
      />
      <div style={{height:'30px',background:'salmon'}}>
        <input
          type="radio"
          value="Editor"
          id="editor"
          // name="os"
          // value={item}
          // onChange={onChangeRadio1}
          // className={classes.radioBtn}
          // defaultChecked={item == osRadioValue}
        />
        <label htmlFor="editor">Editor</label>

        {/* <button>Editor</button>
        <button>HTML</button>
        <button>TEXT</button> */}
      </div>
    </>
  );
};

export default EditorTool;
