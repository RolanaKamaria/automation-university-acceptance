import React, { useLayoutEffect, useState } from "react";
import "./CreateAccountStrange.css";
import Header from "../../components/Header/Header";
import MainNav from "../../components/MainNav/MainNav";
import Footer from "../../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
const CreateAccountStrange = () => {
  const state = useSelector((state) => state.root.head);
  const dispatch = useDispatch();
  const [phone,setPhone]=useState("*** *** *99 963+");
  const [pasporNumber,setPasporNumber]=useState("******X123");
  const [pass,setPass]=useState('***');
  const [conf,setConf]=useState("***");
  const [gender,setGender]=useState("");
  const [error,setError]=useState("");
  useLayoutEffect(() => {
    dispatch(setTitle("إنشاء حساب جديد"));
    dispatch(setSymbol("E:ITReactFoldermyprojectmyprojectsrcimagescreate.png"));
  });
  const handlePhoneChange=(e)=>{
    if (isNaN(e.target.value)) {
        setError("يرجى التأكد من الحقول المطلوبة")
    }else{
    setPhone(e.target.value);
    }
  }
  const handlePasporNumberChange=(e)=>{
    if (isNaN(e.target.value)) {
      setError("يرجى التأكد من الحقول المطلوبة")
  }
  else{
    setPasporNumber(e.target.value);
  }
  }
  const handlePasswordChange=(e)=>{
    if (isNaN(e.target.value)) {
      setError("يرجى التأكد من الحقول المطلوبة")
  }else{
    setPass(e.target.value);}
  }
  const handleConfirmChange=(e)=>{
    if (isNaN(e.target.value)) {
      setError("يرجى التأكد من الحقول المطلوبة")
  }else{
    setConf(e.target.value);
  }
  }
  const handleGenderChange=(e)=>{
    if (isNaN(e.target.value)) {
      setError("يرجى التأكد من الحقول المطلوبة")
  }else{
    setGender(e.target.value);
  }
  }
  const createStrange=()=>{
    if(isNaN(phone||pass||pasporNumber||conf||gender)){
      
      setError("يرجى التأكد من الحقول المطلوبة")
    } else{
    console.log(phone);
    console.log(pass);
    console.log(pasporNumber);
    console.log(conf);
    console.log(gender);
    setPhone("");
    setPasporNumber("");
    setPass("");
    setConf("");
    setGender("");
    setError("");
  }
  }
  
  return (
    <div className="main-login mainbg" dir="rtl">
      <Header />
      <div className="log-nav">
        <MainNav />
        <div className="create-strange">
          <div className="create-strange-lable">
            <label className="label-login">رقم الموبايل :</label>
            <label className="label-login">رقم جواز السفر :</label>
            <label className="label-login">كلمة المرور :</label>
            <label className="label-login">تأكيد كلمة المرور :</label>
            <label className="label-login">الجنس :</label>
          </div>
          <div className="create-strange-input">
            <input id="inp" type="text" 
            value={phone}
            onChange={handlePhoneChange} />
            <input id="inp" type="text" 
            value={pasporNumber}
            onChange={handlePasporNumberChange} />
            <input id="inp" type="password" 
            value={pass} 
            onChange={handlePasswordChange} />
            <input id="inp" type="password" 
            value={conf}
            onChange={handleConfirmChange}/>
            <label className="rad-create-label">
              <input type="radio" 
              value="1" 
              name="gender" 
              className="rad-create" onChange={handleGenderChange} />
              زكر
            </label>

            <label className="rad-create-label">
              <input
              className="rad-create"
                type="radio"
                value="2"
                name="gender" onChange={handleGenderChange} />
              أنثى
            </label>
            {error && <p className="error">{error}</p>}
            <a href="/login" id="a-login" className="forget">
              {" "}
              هل لديك حساب مسبق؟{" "}
            </a>
          </div>
        </div>
      </div>
      <div id="create-btn-box" className="buttons-box">
        <button className="btn" type="submit" onClick={createStrange} >
          إنشاء حساب
        </button>
        <button className="btn back-btn">عودة</button>
      </div>
      <Footer />
    </div>
  );
};

export default CreateAccountStrange;
