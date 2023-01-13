import { useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import DateWithTimePicker from "~/components/DateTimePicker";
import { UptConfirmModal } from "~/components/Modal";
import { EditorTool } from "~/components/Editor";
const osList = ["Android", "iOS", "Windows", "Mac"];
const typeList = ["긴급", "일반"];

const AddAppNotification = ({ backState }) => {
  const classes = useStyles();
  const [osRadioValue, setOsRadioValue] = useState("Android");
  const onChangeRadio1 = (e) => {
    setOsRadioValue(e.target.value);
  };
  const [typeRadioValue, setTypeRadioValue] = useState("긴급");
  const onChangeRadio2 = (e) => {
    setTypeRadioValue(e.target.value);
  };

  // 등록완료 모달
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <figure className={classes.userAccContainer}>
      <section className={classes.titleSection}>
        <h2 className={classes.mainTitle}>APP Intro 공지 등록</h2>
      </section>
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
                  <div key={index} className={classes.radioBtnLayout1}>
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
              <DateWithTimePicker />
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
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>공지 내용</label>
            </th>
            <td className={classes.inputLayout}>
              {/* <input
                type="tel"
                value={userInfo.content}
                onChange={onChange}
                className={classes.inputNumStyle}
                name="content"
                id="introNoti"
                maxLength="3"
                required
              /> */}
              {/* 공지 내용 */}
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
      <EditorTool />
      <div className={classes.submitBtns}>
        <button onClick={backState} className={classes.backBtn}>
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
    </figure>
  );
};
export default AddAppNotification;
