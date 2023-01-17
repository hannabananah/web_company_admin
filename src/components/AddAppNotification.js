import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import DateWithTimePicker from "~/components/DateTimePicker";
import { UptConfirmModal } from "~/components/Modal";
import { EditorTool } from "~/components/Editor";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import draftToHtml from 'draftjs-to-html';
import dayjs, { Dayjs } from "dayjs";

const osList = ["Android", "iOS", "Windows", "Mac"];
const typeList = ["긴급", "일반"];

const AddAppNotification = ({ backState }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [value, setValue] = useState(dayjs(new Date()));
  const [start, setStart] = useState(dayjs(new Date()));
  const [end, setEnd] = useState(start);
  const [ampm, setAmpm] = useState(false);
  const [osRadioValue, setOsRadioValue] = useState("Android");
  const onChangeRadio1 = (e) => {
    setOsRadioValue(e.target.value);
  };
  const [typeRadioValue, setTypeRadioValue] = useState("긴급");
  const onChangeRadio2 = (e) => {
    setTypeRadioValue(e.target.value);
  };
  // console.log('오전인지 오후인지 보여줄지 말지 ----> ', ampm)
  console.log('start 시작 날짜 -----> ', start)
  console.log('end 종료 날짜 -----> ', end)

  // 등록완료 모달
  const [modalOpen, setModalOpen] = useState(false);

  // editor state
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  //----------------------------//
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [uploadedImages, setUploadedImages] = useState([])
  //----------------------------//

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  //----------------------------//
  const _uploadImageCallBack = async (file) => {
    const imageObject = {
      file: file,
      localSrc: URL.createObjectURL(file),
    };
    setUploadedImages([...uploadedImages, imageObject]);
    return { data: { link: imageObject.localSrc } };
  };
  //----------------------------//


  const editorToHtml = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  const openModal = () => {
    console.log(editorToHtml);
    console.log(JSON.stringify(editorState, null, 4));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickPrev = () => {
    // NoticeAppIntro.js
    navigate('/notice/app_intro')
  }

  return (
    <figure className={classes.userAccContainer}>

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
              <label className={classes.leftText}>공지 유형</label>
            </th>
            <td className={classes.inputLayout}>
              {typeList.map((item, index) => {
                return (
                  <div key={index} className={classes.radioBtnLayout2}>
                    <input
                      type="radio"
                      id={item}
                      name="type"
                      value={item}
                      onChange={onChangeRadio2}
                      className={classes.radioBtn}
                      defaultChecked={item == typeRadioValue}
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 노출 기간</label>
            </th>
            <td className={classes.pickerLayout}>
              <DateWithTimePicker 
                value={value}
                setStart={setStart}
                setEnd={setEnd}
                ampm={ampm}
                start={start} 
                end={end} 
                />
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
                name="minVer"
                id="minVer"
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
                name="description"
                id="description"
                maxLength={40}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        {/* <button onClick={backState} className={classes.backBtn}> */}
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
      <UptConfirmModal open={modalOpen} close={closeModal} header="등록 완료">
        <main>APP Intro 공지를 등록했습니다.</main>
      </UptConfirmModal>

      {/* <div>{editorToHtml}</div> */}

    </figure>
  );
};
export default AddAppNotification;
