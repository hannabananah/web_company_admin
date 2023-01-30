import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import AppNotiAdd from "~/components/AddAppNotification";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import draftToHtml from "draftjs-to-html";
import { EditorState, convertToRaw } from "draft-js";
import axios from "axios";
import { UptConfirmModal } from "~/components/Modal";
import TableHeader from "~/components/TableHeader";
import { EditorTool } from "~/components/Editor";
import { g } from "~/util/global";

const osList = ["Android", "iOS", "Windows", "Mac"];

const NotiAppSettingAdd = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [osRadioValue, setOsRadioValue] = useState("Android");
  const onChangeRadio1 = (e) => {
    setOsRadioValue(e.target.value);
    setNotiInfo({
      ...notiInfo,
      [e.target.name]: e.target.value,
    });
  };
  // console.log('osRadioValue-------------------',osRadioValue);

  const [notiInfo, setNotiInfo] = useState({
    noti_idx: "",
    os: "",
    noti_title: "",
    en_noti_title: "",
    noti_content: "",
    en_noti_content: "",
    remark: "",
    reg_id: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    const newInfo = {
      ...notiInfo,
      [name]: value, //e.target의 name과 value이다.
    };
    setNotiInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    notiInfo["os"] = osRadioValue;

    const editorToHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );

    // eslint-disable-next-line no-restricted-globals
    if (confirm("저장 하시겠습니까?")) {
      axios
        .post(
          `${g.base_url}api/sysnotice/create`,
          {
            ...notiInfo,
            noti_content: editorToHtml,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        )
        .then(({ data }) => {
          console.log(data);
          openModal();
          console.log(notiInfo);
        });
    }
  };

  // 등록완료 모달
  const [modalOpen, setModalOpen] = useState(false);

  // editor state
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploadedImages, setUploadedImages] = useState([]);

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const _uploadImageCallBack = async (file) => {
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };
    setUploadedImages([...uploadedImages, imageObject]);
    return { data: { link: imageObject.localSrc } };
  };

  const editorToHtml = draftToHtml(
    convertToRaw(editorState.getCurrentContent())
  );
  const openModal = () => {
    console.log(editorToHtml);
    console.log(JSON.stringify(editorState, null, 4));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    navigate(-1);
  };

  const onClickPrev = () => {
    navigate(-1);
  };

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="App 설정 공지 등록" />
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
            <td className={classes.inputLayout}>
              {osList.map((item, index) => {
                return (
                  <div key={index} className={classes.radioBtnLayout1}>
                    <input
                      type="radio"
                      id={item}
                      name="os"
                      value={item}
                      onChange={onChangeRadio1}
                      className={classes.radioBtn}
                      defaultChecked={item == osRadioValue}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 제목</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                value={notiInfo.noti_title}
                onChange={onChange}
                name="noti_title"
                id="minVer"
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
                _uploadImageCallBack={_uploadImageCallBack}
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>설명</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                onChange={onChange}
                name="remark"
                id="noti_content"
                maxLength={40}
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
          onClick={handleSubmit}
          className={classes.saveBtn}
        />
      </div>
      <UptConfirmModal open={modalOpen} close={closeModal} header="등록 완료">
        <main>APP Intro 공지를 등록했습니다.</main>
      </UptConfirmModal>

      {/* <div>{editorToHtml}</div> */}
    </figure>
  );
};
export default NotiAppSettingAdd;
