import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "~/styles/Toggle.css";
import useStyles from "~/styles/AppVersionEdit";
import { SaveConfirmModal, UptConfirmModal } from "~/components/Modal";
import TableHeader from "~/components/TableHeader";
import { dateFormat, g } from "~/util/global"

const EditDetailAccount = ({ version }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params =  useParams();

  const onChangeRadio = (e) => {
    const { name, value } = e.target;
    console.log(name)

    setUserInfo({
      ...userInfo,
      ['update_type'] : value,
    });
  };

  //version info state
  const [userInfo, setUserInfo] = useState({
    store: version?.store,
    os: version?.os,
    late_app_version: version?.late_app_version,
    min_app_version: version?.min_app_version,
    update_type: version?.update_type,
    remark: version?.remark,
    reg_dttm: version?.reg_dttm,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaveConfirm(false);

    // eslint-disable-next-line no-restricted-globals
    // if (confirm("저장 하시겠습니까?")) {
      axios
        .post(
          `${g.base_url}api/version/update`,
          {
            ...userInfo,
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
        });
    // }
  };

  useEffect(() => {
    axios
      .get(`${g.base_url}api/version/${params.id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then(({ data }) => {
        // data.use_yn = data.use_yn  === 'Y' ? true : false
        setUserInfo(data);
        // console.log(userInfo.phone)
      });
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;

    const newInfo = {
      ...userInfo,
      [name]: value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };

  // 저장완료 모달
  const [modalOpen, setModalOpen] = useState(false);
  const [saveConfirm, setSaveConfirm] = useState(false);

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

  return (
    <figure className={classes.userAccContainer}>
      <TableHeader title="App 버전 수정" />
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
            <td className={classes.fixedLayout}>{userInfo.store}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>OS</label>
            </th>
            <td className={classes.fixedLayout}>{userInfo.os}</td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>최신 APP 버전</label>
            </th>
            <td className={classes.inputLayout}>
              <input
                value={userInfo.late_app_version || ""}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                id="recentVer"
                name="late_app_version"
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
                value={userInfo.min_app_version || ""}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                id="minVer"
                name="min_app_version"
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
                  // onClick={onChangeRadio}
                  checked={userInfo.update_type === "choice"}
                  onChange={onChangeRadio}
                  // defaultChecked={userInfo.update_type === "choice"}
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
                  // onClick={onChangeRadio}
                  checked={userInfo.update_type === "compulsion"}
                  onChange={onChangeRadio}
                  // defaultChecked={userInfo.update_type === "compulsion"}
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
                value={userInfo.remark}
                onChange={onChange}
                type="text"
                className={classes.inputStyle}
                name="remark"
                id="description"
                maxLength={40}
              />
            </td>
          </tr>
          <tr className={classes.contentInput}>
            <th className={classes.leftLayout}>
              <label className={classes.leftText}>등록일</label>
            </th>
            <td className={classes.fixedLayout}>{dateFormat(userInfo.createdAt)}</td>
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

      <UptConfirmModal open={modalOpen} close={closeModal} header="저장 완료">
        <main>저장했습니다.</main>
      </UptConfirmModal>
    </figure>
  );
};
export default EditAppVerDetail;
