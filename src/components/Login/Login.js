import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Login.css";
import MainNav from "../MainNav/MainNav";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import {
  login,
  setPassword,
  setUsername,
  logout,
} from "../../store/slices/userSlice";
import axios from "axios";
import { setReqState, setStdAddmission } from "../../store/slices/studentSlice";

export default function Login() {
  const state = useSelector((state) => state.user);
  const state1 = useSelector((state) => state.root);
  const [loginNumber, setLoginNumber] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [wrong, setWrong] = useState(false);
  const [error, setError] = useState("يرجى ملئ الحقول المطلوبة !!!");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangeLogin = (e) => {
    setLoginNumber(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPasswordLogin(e.target.value);
  };

  const handleBack = () => {
    navigate("/");
    dispatch(setTitle(" "));
    dispatch(setSymbol("../../assest/images/main.svg"));
  };
  const changeNumber = () => {
    navigate("/status/change-number-email");
  };
  const checkAccount = () => {
    if (passwordLogin != "" && loginNumber != "") {
      if(passwordLogin=="14"){
        setError("لا يوجد مفاضلة لهذا الرقم ... يرجى التحقق من البيانات !!!")
        setWrong(true)
      }else{
      setWrong(false);
      axios
        .post(
          "https://university-admission.onrender.com/get-status-desires/",
          {
            email: "taklazidanziadn@gmail.com",
            admission_num: 1,
          },
          {
            headers: {
              accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          dispatch(setReqState(response.data.admission_status));
          dispatch(setStdAddmission(response.data.admission_desires));
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      setWrong(false);
      navigate("/status/query-state");
      }
    } else {
      setError("يرجى ملئ الحقول المطلوبة !!!");
      setWrong(true);
    }
  };

  useLayoutEffect(() => {
    dispatch(setTitle("تسجيل الدخول"));
    dispatch(setSymbol("../../assest/images/LoginImage.svg"));
  }, [state1.head]);

  return (
    <div className="main-login mainbg" dir="rtl">
      <Header />
      <div className="log-nav">
        <MainNav />
        <div className="login">
          <div className="entering">
            <div className=" text-label">
              <p className=" label-login ">البريد الإلكتروني: </p>
              <p className="label-login"> رقم الطلب: </p>
            </div>
            <div className="input-label-login">
              <input
                type="text"
                id="inp"
                onChange={handleChangeLogin}
                value={loginNumber}
                required
              />
              <input
                type="password"
                id="inp"
                className="password"
                onChange={handleChangePassword}
                value={passwordLogin}
                required
              />
            </div>
          </div>

          <div className="text-login not-box">
            <a
              id="a-login"
              className="forget"
              onClick={changeNumber}
              style={{
                textDecoration: "underline",
              }}
            >
              {" "}
              هل نسيت رقم الطلب؟{" "}
            </a>
          </div>
          {wrong && <p className="test-err">{error}</p>}
          <div className="buttons-box-login">
            <button type="submit" className="btn" onClick={checkAccount}>
              تأكيد{" "}
            </button>
            <button className="btn back-btn" onClick={handleBack}>
              {" "}
              عودة{" "}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
