import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import "./ConfirmPassword.css";
import { setPassword } from "../../../store/slices/userSlice";

function ConfirmPassword() {
  const state = useSelector((state) => state.root);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [queryNum, setQueryNum] = useState("");
  const [wrong, setWrong] = useState(false);
  const error = "الرجاء املئ الحقل المطلوب !!!";
  const handleConfirm = () => {
    if (queryNum != "") {
      setWrong(false);
      navigate("/status/query-state");
      dispatch(setPassword(queryNum));
    } else {
      setWrong(true);
    }
  };
  const handleBack = () => {
    navigate("/status/change-number-email");
  };
  const handlePassChange = (e) => {
    setQueryNum(e.target.value);
  };
  useLayoutEffect(() => {
    dispatch(setTitle("تأكيد رقم الطلب"));
    dispatch(setSymbol("../../assest/images/ForgetPass.svg"));
  }, [state.head]);
  return (
    <div className="main-ConfirmPass mainbg" dir="rtl">
      <Header />
      <div className="All-ConfirmPass-Content">
        <div className="Confirm-Password">
          <label className="ConfirmYourPassword"> أدخل رقم الطلب:</label>
          <input
            type="text"
            className="ConfirmYourPassword-Label"
            onChange={handlePassChange}
          />
        </div>
        {wrong && (
          <p
            className="test-err"
            style={{
              paddingRight: "550px",
              paddingTop: "50px",
            }}
          >
            {error}
          </p>
        )}
        <div className="buttons-box-ConfirmPassword">
          <button className="btn" type="submit" onClick={handleConfirm}>
            تأكيد
          </button>
          <button className="btn back-btn" onClick={handleBack}>
            عودة
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmPassword;
