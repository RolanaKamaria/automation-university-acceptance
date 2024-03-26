import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import "./EnterEmail.css";
import { setUsername } from "../../../store/slices/userSlice";

function EnterEmail() {
  const state = useSelector((state) => state.root);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [wrong, setWrong] = useState(false);
  const error = "الرجاء املئ الحقل المطلوب !!!";
  const handleClickConfirm = () => {
    if (email != "") {
      dispatch(setUsername(email));
      navigate("/status/change-number-confirm");
      setWrong(false);
    } else {
      setWrong(true);
    }
  };
  const handleBack = () => {
    navigate("/status");
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  useLayoutEffect(() => {
    dispatch(setTitle("إعادة طلب الرقم"));
    dispatch(setSymbol("../../assest/images/ForgetPass.svg"));
  }, [state.head]);
  return (
    <div className="main-EnterEmail mainbg" dir="rtl">
      <Header />
      <div className="All-EnterEmail-Content">
        <div className="Enter-Email">
          <label className="EnterYourEmail ">أدخل بريدك الإلكتروني:</label>
          <input
            type="email"
            className="EnterYourEmail-Label"
            onChange={onEmailChange}
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
        <div className="buttons-box-EnterEmail">
          <button className="btn" type="submit" onClick={handleClickConfirm}>
            التالي
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

export default EnterEmail;
