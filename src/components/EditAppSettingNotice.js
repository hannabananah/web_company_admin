import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import { convertFromHTML } from "draft-convert";
import Modifier from "draft-js/lib/DraftModifier";
import draftToHtml from "draftjs-to-html";
import "~/styles/Toggle.css";
import useStyles from "~/styles/AppNoticeEdit";
import TableHeader from "~/components/TableHeader";
import DateWithTimePicker from "~/components/DateTimePicker";
import { EditorTool } from "~/components/Editor";
import { SaveConfirmModal, UptConfirmModal } from "~/components/Modal";
import { g } from "~/util/global";

const EditAppSettingNotice = () => {
  const user = useLocation().state;
  const classes = useStyles();
  const navigate = useNavigate();

  //user info state
  const [userInfo, setUserInfo] = useState({
    noticeKey: user.noticeKey,
    os: user.os,
    noti_title: user.noti_title,
    noti_content: user.noti_content,
    remark: user.remark,
    status: user.status,
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    const newInfo = {
      ...userInfo,
      [name]: value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };

  // 수정완료 모달
  const [saveConfirm, setSaveConfirm] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    navigate(-1);
  };
  const onClickPrev = () => {
    navigate(-1, { state: userInfo });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveConfirm(false);
    console.log(userInfo);

    // userInfo["noticeKey"] = userInfo.noti_idx;
    console.log(userInfo);
    console.log(convertToRaw(editorState.getCurrentContent()));

    const editorToHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    // eslint-disable-next-line no-restricted-globals
    // if (confirm("저장 하시겠습니까?")) {
      axios
        .post(
          `${g.base_url}api/sysnotice/update`,
          {
            noticeKey: userInfo.noticeKey,
            os: userInfo.os,
            status: userInfo.status,
            noti_title: userInfo.noti_title,
            noti_content: editorToHtml,
            remark: userInfo.remark,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        )
        .then(({ data }) => {
          openModal();
        });
    // }
  };

  // editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  useEffect(() => {
    const blocksFromHtml = htmlToDraft(userInfo.noti_content);
    if (blocksFromHtml) {
      const { contentBlocks, entityMap } = blocksFromHtml;
      // https://draftjs.org/docs/api-reference-content-state/#createfromblockarray
      const contentState = ContentState.createFromBlockArray(
        contentBlocks,
        entityMap
      );
      // ContentState를 EditorState기반으로 새 개체를 반환.
      // https://draftjs.org/docs/api-reference-editor-state/#createwithcontent
      const editorState = EditorState.createWithContent(contentState);
      setEditorState(editorState);
    }
  }, []);

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="App 설정 공지 수정" />
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
              <label className={classes.leftText}>공지 제목</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                defaultValue={userInfo.noti_title}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="noti_title"
                id="settingNoti"
                required
              />
            </td>
          </tr>
          <tr className={classes.editorInput}>
            <th className={classes.leftContentLayout}>
              <label className={classes.leftText}>공지 내용</label>
            </th>
            <td className={classes.editorLayout}>
              <EditorTool
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
              ></EditorTool>
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>설명</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                defaultValue={userInfo.remark}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="remark"
                id="settingNoti"
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
          // onClick={handleSubmit}
          onClick={() => setSaveConfirm(true)}
          className={classes.saveBtn}
        />
      </div>

      <SaveConfirmModal
        open={saveConfirm}
        onClickCancel={() => setSaveConfirm(false)}
        onClickConfirm={handleSubmit}
        header="저장"
      >
        <main>저장 하시겠습니까?</main>
      </SaveConfirmModal>

      <UptConfirmModal open={modalOpen} close={closeModal} header="수정 완료">
        <main>App 설정 공지를 수정했습니다.</main>
      </UptConfirmModal>
    </figure>
  );
};
export default EditAppSettingNotice;
