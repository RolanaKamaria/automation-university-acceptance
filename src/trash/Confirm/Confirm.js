import React, { useState ,useLayoutEffect,useCallback} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./Confirm.css";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
export default function Confirm() {
  const state = useSelector((state) => state.root);
  const state1=useSelector((state)=>state.user);
  const [inputCode, setInputCode] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChangeInput = (e) => {
    setInputCode(e.target.value);
  };
  const handleBack=()=>{
    navigate('/');
  }
  const handleConfirm = () => {
    if (inputCode === state1.passwored) {
      setError("");
      navigate("/");
    } else setError(" الرمز الذي أدخلته خاطئ ؛ حاول مجدداً !!");
    setInputCode("");
  };
  useLayoutEffect(()=>{
    dispatch(setTitle('التحقق من المستخدم'))
    dispatch(setSymbol('../../images/agree.svg'))
  },[]);
  
  return (
    <div className="mainContainer mainbg" dir="rtl">
      <Header />
      <div className="confirm">
        <div className="confirm-content">
          <div className="verf-box">
            <p className="label-conf">رمز التحقق:</p>
            <input className="conf-inp" type="text" onChange={handleChangeInput} value={inputCode} />
          </div>
          <div className="resend-box">
            <a className="conf-a" href="#">إعادة الإرسال</a>
            <p className="text">يرجى الإنتظار 60 ثانية قبل إعادة الإرسال</p>
            {error && <p className="text error">{error}</p>}
          </div>
        </div>
        <div className="buttons-box">
          <button className="btn" type="submit" onClick={handleConfirm}>
            تأكيد
          </button>
          <button className="btn back-btn" onClick={handleBack}>عودة</button>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}
