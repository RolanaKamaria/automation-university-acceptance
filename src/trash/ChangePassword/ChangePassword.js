import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./ChangePassword.css";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
// import ChangePassowrdImage from "../../images/ChangePassowrdImage.svg";


function ChangePassword() {
  const state = useSelector((state) => state.root);
  const state1=useSelector((state)=>state.user)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPassErr, setConfirmnPassErr] = useState('');
  const [allDataErr,setAllDataErr] = useState('');
  const [phoneNumErr, setPhoneNumErr] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    dispatch(setTitle("تغيير كلمة المرور"));
    dispatch(setSymbol("../../images/ChangePassowrdImage.svg"));
  }, []);

  const handleMobileNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleConfirmNewPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const CheckInputValue = () => {
    if (newPassword === confirmPassword &&phoneNumber === state1.mobile) {
      setPhoneNumErr('');
      setPhoneNumber('');
      setNewPassword('');
      setConfirmPassword('');
      setConfirmnPassErr('');
      setAllDataErr('');
      navigate("/");
    } 
    else if (newPassword !== confirmPassword && phoneNumber === state1.mobile){
      setConfirmnPassErr("كلمة المرور غير متطابقة");
      setNewPassword('');
      setConfirmPassword('');
      setAllDataErr('');
    }
    else if (newPassword === confirmPassword && phoneNumber !== state1.mobile){
     setPhoneNumErr('رقم الموبايل خاطئ');
     setConfirmnPassErr('');
     setPhoneNumber('');
     setAllDataErr('');
    }
    else {
      setPhoneNumber('');
      setNewPassword('');
      setConfirmPassword('');
      setConfirmnPassErr('');
      setPhoneNumErr('');
      setAllDataErr('البيانات التي تم إدخالها خاطئة');
    }
  };

  return (
    <div className="main-ChangePassword mainbg" dir="rtl">
      <Header />
      <div className="ChangePassword">
        <div className="All-Content">
          <div className="JustText">
            <p className="label">رقم الموبايل:</p>
            <p className="label">كلمة المرور الجديدة:</p>
            <p className="label">تأكيد كلمة المرور الجديدة:</p>
          </div>
          <div className="JustInputLabel">
            <input
              type="text"
              id="inp"
              onChange={handleMobileNumber}
              value={phoneNumber}
            />
            <input
              type="password"
              id="inp"
              onChange={handleNewPassword}
              value={newPassword}
            />
            <input
              type="password"
              id="inp"
              onChange={handleConfirmNewPassword}
              value={confirmPassword}
            />
          </div>
       
        </div> 
          {confirmPassErr && <p className="text err">{confirmPassErr}</p>}
          {phoneNumErr && <p className="text err">{phoneNumErr}</p>}
          {allDataErr && <p className="text err">{allDataErr}</p>}
        <div className="buttons-box" id="loginbuttonbox">
          <button type="submit" className="btn" onClick={CheckInputValue}>
            تأكيد{" "}
          </button>
          <button className="btn back-btn"> عودة </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ChangePassword;
