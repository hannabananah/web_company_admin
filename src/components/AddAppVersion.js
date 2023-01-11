import { useState } from "react";
import useStyles from "~/styles/Add";
import { UptConfirmModal } from "~/components/Modal";

const storeList = ["Google Play", "App Store", "Microsoft", "Mac"];
const osList = ["Android", "iOS", "Windows", "Mac"];

const AddAppVersion = ({ backState }) => {
  const classes = useStyles();
  const [radioValue, setRadioValue] = useState(false);
  const onChangeRadio = (e) => {
    setRadioValue(e.target.value);
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
        <h2 className={classes.mainTitle}>App 버전 등록</h2>
      </section>
      <table className={classes.tableStyle}>
        <colgroup>
          <col />
          <col />
        </colgroup>
        <tbody>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>스토어</label>
            </th>
            <td className={classes.inputLayout}>
              {storeList.map((item, index) => {
                return (
                  <div key={index} className={classes.radioBtnLayout1}>
                    <input
                      type="radio"
                      id={item}
                      name="store"
                      value={item}
                      onChange={onChangeRadio}
                      className={classes.radioBtn}
                      required
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}
            </td>
          </tr>
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
                      onChange={onChangeRadio}
                      className={classes.radioBtn}
                      checked={radioValue == storeList[index]}
                      disabled
                    />
                    <label htmlFor={item}>{item}</label>
                  </div>
                );
              })}
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최신 APP 버전</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                type="text"
                className={classes.inputStyle}
                name="recentVer"
                id="recentVer"
                required
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최소 APP 버전</label>
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
              <label className={classes.leftText}>업데이트 유형</label>
            </th>
            <td className={classes.inputLayout}>
              <div className={classes.radioBtnLayout2}>
                <input
                  type="radio"
                  id="choice"
                  name="upt_type"
                  value="choice"
                  className={classes.radioBtn}
                />
                <label htmlFor="choice">선택</label>
              </div>
              <div className={classes.radioBtnLayout2}>
                <input
                  type="radio"
                  id="compulsion"
                  name="upt_type"
                  value="compulsion"
                  className={classes.radioBtn}
                />
                <label htmlFor="compulsion">강제</label>
              </div>
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
        <button onClick={backState} className={classes.backBtn}>
          이전
        </button>
        <input
          type="submit"
          value="등록 "
          onClick={openModal}
          className={classes.saveBtn}
        />
      </div>
      <UptConfirmModal open={modalOpen} close={closeModal} header="등록 완료">
        <main>업데이트 버전을 등록했습니다.</main>
      </UptConfirmModal>
    </figure>
  );
};
export default AddAppVersion;
