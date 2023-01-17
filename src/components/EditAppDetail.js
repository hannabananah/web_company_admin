import { useEffect, useState } from "react";
import useStyles from "~/styles/Add";
import "~/styles/Toggle.css";
import { UptConfirmModal } from "~/components/Modal";
import axios from "axios";

const EditDetailAccount = ({ gobackstate, user }) => {
  const classes = useStyles();

  //user info state
  const [userInfo, setUserInfo] = useState({
    store: user.store,
    os: user.os,
    late_app_version: user.late_app_version,
    min_app_version: user.min_app_version,
    update_type: user.update_type,
    remark: user.remark,
    reg_dttm: user.reg_dttm,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // eslint-disable-next-line no-restricted-globals
    if (confirm("저장 하시겠습니까?")) {
      axios.post(
          `http://localhost:3001/api/version/update`,
          {
            ...userInfo
          },
          {
            headers: {
              Authorization:
                  "Bearer " +
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
            },
          }
      ).then(({data}) => {
        console.log(data);
        openModal()
      });
    }
  };

  useEffect(() => {
    axios
        .get(`http://localhost:3001/api/version/${user.version_idx}`, {
          headers: {
            Authorization:
                "Bearer " +
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY1MTE5NjM1OSwiZXhwIjoxNjgyNzMyMzU5fQ.5ZxqvUdLOS8zrbCZuDqZqv4Zjox1POUrZ0Ah0u9LEbs",
          },
        })
        .then(({data}) => {
          // data.use_yn = data.use_yn  === 'Y' ? true : false
          // setUserData(data);

          // console.log(userInfo.phone)
        });
  }, [])

  const onChange = (e) => {
    const { name, value, checked } = e.target;

    const newInfo = {
      ...userInfo,
      [name]: value, //e.target의 name과 value이다.
    };
    setUserInfo(newInfo);
  };


  // 저장완료 모달
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
        <h2 className={classes.mainTitle}>App 버전 수정</h2>
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
                value={userInfo.late_app_version}
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
                value={userInfo.min_app_version}
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
                  name="update_type"
                  value="choice"
                  className={classes.radioBtn}
                  defaultChecked={userInfo.update_type === "choice"}
                />
                <label for="choice">선택</label>
              </div>
              <div className={classes.radioBtnLayout2}>
                <input
                  type="radio"
                  id="compulsion"
                  name="update_type"
                  value="compulsion"
                  className={classes.radioBtn}
                  defaultChecked={userInfo.update_type !== "choice"}
                />
                <label for="compulsion">강제</label>
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
            <td className={classes.fixedLayout}>{userInfo.createdAt}</td>
          </tr>
        </tbody>
      </table>
      <div className={classes.submitBtns}>
        <button onClick={gobackstate} className={classes.backBtn}>
          이전
        </button>
        <input
          type="submit"
          value="저장"
          onClick={handleSubmit}
          className={classes.saveBtn}
        />
      </div>
      <UptConfirmModal open={modalOpen} close={closeModal} header="저장 완료">
        <main>저장했습니다.</main>
      </UptConfirmModal>
    </figure>
  );
};
export default EditDetailAccount;
