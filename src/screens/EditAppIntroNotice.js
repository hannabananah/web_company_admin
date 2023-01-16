import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import TableHeader from "~/components/TableHeader";
import DateWithTimePicker from "~/components/DateTimePicker";
import { UptConfirmModal } from "~/components/Modal";
import { EditorTool } from "~/components/Editor";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import htmlToDraft from 'html-to-draftjs';

const EditAppIntroNotice = () => {
  const user = useLocation().state;
  // console.log('data---->', data)
  const classes = useStyles();
  const navigate = useNavigate();

  //user info state
  const [userInfo, setUserInfo] = useState({
    os: user.ip,
    type: user.gender,
    period: user.phone,
    title: user.eyeColor,
    content: user.ip,
    desc: user.userAgent,
  });

  const { os, type, period, title, content, desc } = userInfo;

  const onChange = (e) => {
    console.log("onchange!!!!!!!!!!!");
    const { name, value, checked } = e.target;
    console.log("e.target.name:::::::", name);
    console.log("e.target.value:::::::::", value);
    console.log("e.target.checked:::::::::", checked);

    const newInfo = {
      ...userInfo,
      [name]: name == "type" ? !userInfo.type : value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };

  console.log("userInfo ----------->", userInfo);
  console.log("userInfo.use_yn ----------->", userInfo.type);

  // 수정완료 모달
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const onClickPrev = () => {
    navigate('/notice/app_intro/details/', { state : user })
  }

  // editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  // 임시
  const htmlToEditor = `<strong>ㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇㅎㅇ</strong>`;

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(htmlToEditor);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      // https://draftjs.org/docs/api-reference-content-state/#createfromblockarray
      const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
      // ContentState를 EditorState기반으로 새 개체를 반환.
      // https://draftjs.org/docs/api-reference-editor-state/#createwithcontent
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  },[]);

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="App Intro 공지 수정" />
      <table className={classes.tableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>OS</label>
            </th>
            <td className={classes.fixedLayout}>{userInfo.os}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 유형</label>
            </th>
            <td className={classes.inputLayout}>
              <div className={classes.radioBtnLayout2}>
                <input
                  type="radio"
                  id="urgent"
                  onChange={onChange}
                  name="type"
                  value="urgent"
                  className={classes.radioBtn}
                  defaultChecked={userInfo.type == "male"}
                />
                <label htmlFor="urgent">긴급</label>
              </div>
              <div className={classes.radioBtnLayout2}>
                <input
                  type="radio"
                  id="normal"
                  onChange={onChange}
                  name="type"
                  value="normal"
                  className={classes.radioBtn}
                  defaultChecked={userInfo.type == "female"}
                />
                <label htmlFor="normal">일반</label>
              </div>
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 노출 기간</label>
            </th>
            <td className={classes.pickerLayout}>
              {/* <input
                value={userInfo.period}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="period"
                id="introNoti"
                required
              /> */}
              <DateWithTimePicker />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 제목</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.title}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="title"
                id="introNoti"
                required
              />
            </td>
          </tr>
          <tr className={classes.editorInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 내용</label>
            </th>
            <td className={classes.editorLayout}>
              <EditorTool
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>설명</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.desc}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="desc"
                id="introNoti"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={onClickPrev} className={classes.backBtn}>
          이전
        </button>
        <input
          type="submit"
          value="저장"
          onClick={openModal}
          className={classes.saveBtn}
        />
      </div>
      <UptConfirmModal open={modalOpen} close={closeModal} header="수정 완료">
        <main>App Intro 공지를 수정했습니다.</main>
      </UptConfirmModal>
    </figure>
  )
}
export default EditAppIntroNotice