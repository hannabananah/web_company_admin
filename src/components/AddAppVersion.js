import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useStyles from "~/styles/AppVersionAdd";
import { SaveConfirmModal, UptConfirmModal } from "~/components/Modal";
import TableHeader from "~/components/TableHeader";
import { g } from "~/util/global"

const storeList = ["Google Play", "App Store", "Microsoft", "Mac"];
const osList = ["Android", "iOS", "Windows", "Mac"];

const AddAppVersion = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [radioValue, setRadioValue] = useState("Google Play");

  const onChangeRadio = (e) => {
    const { name, value, checked } = e.target;

    if (name == "store") {
      notiInfo["store"] = value;
      notiInfo["os"] = osList[storeList.indexOf(value)];
    }
    if (name == "upt_type") {
      notiInfo["update_type"] = value;
    }
    console.log(notiInfo);
    const newInfo = {
      ...notiInfo,
      [name]: value, //e.target의 name과 value이다.
    };
    setRadioValue(value);
    setNotiInfo(newInfo);
  };

  // 등록완료 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);

  const [notiInfo, setNotiInfo] = useState({
    store: "Google Play",
    os: "Android",
    late_app_version: "",
    min_app_version: "",
    update_type: "choice",
    status: "",
    remark: "",
    reg_id: "",
    udt_id: "",
  });

  const onChange = (e) => {
    const { name, value, checked } = e.target;

    const newInfo = {
      ...notiInfo,
      [name]: value, //e.target의 name과 value이다.
    };
    setNotiInfo(newInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveConfirm(false);

    // eslint-disable-next-line no-restricted-globals
    // if (confirm("저장 하시겠습니까?")) {
      // notiInfo["store"] = c
      axios
        .post(
          `${g.base_url}api/version/create`,
          {
            ...notiInfo,
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

  const openModal = () => {
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
      <TableHeader title="App 버전 등록" />
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
                      defaultChecked={radioValue == item}
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
                      readOnly={true}
                      color={"#aaa"}
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
                name="late_app_version"
                id="recentVer"
                value={notiInfo.late_app_version}
                onChange={onChange}
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
                name="min_app_version"
                id="minVer"
                value={notiInfo.min_app_version}
                onChange={onChange}
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
                  onChange={onChangeRadio}
                  className={classes.radioBtn}
                  defaultChecked
                />
                <label htmlFor="choice">선택</label>
              </div>
              <div className={classes.radioBtnLayout2}>
                <input
                  type="radio"
                  id="compulsion"
                  name="upt_type"
                  onChange={onChangeRadio}
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
                name="remark"
                id="description"
                value={notiInfo.remark}
                onChange={onChange}
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
          value="등록 "
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
      
      <UptConfirmModal open={modalOpen} close={closeModal} header="등록 완료">
        <main>업데이트 버전을 등록했습니다.</main>
      </UptConfirmModal>
    </figure>
  );
};
export default AddAppVersion;
