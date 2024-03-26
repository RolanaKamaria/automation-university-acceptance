import React from "react";
import "./HeaderLog.css";
import { useDispatch, useSelector } from "react-redux";
import agree from "../../assest/images/agree.svg";
import logo3 from "../../assest/images/logo3.png";
import { useNavigate } from "react-router-dom";
import LoginImage from "../../assest/images/LoginImage.svg";
import CollegesImage from "../../assest/images/CollegesImage.svg";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
export default function HeaderLog() {
  const state = useSelector((state) => state.root);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  var res = {};
  if (state.head.symbol === "../../assest/images/agree.svg") {
    res = agree;
  }else if(state.head.symbol==='../../assest/images/LoginImage.svg'){
    res=LoginImage;
}else if(state.head.symbol==='../../assest/images/CollegesImage.svg'){
    res=CollegesImage;
}

  const handleLogin=()=>{
    dispatch(setTitle("تسجيل الدخول"));
    dispatch(setSymbol("../../assest/images/LoginImage.svg"));
    navigate('/login');
  }
  return (
    <div className="header">
      <img src={logo3} alt="logo3" className="image2" />

      <span className="title">{state.head.title}</span>
      <div className="log-box">
        <div className="label">
          <span >تسجيل دخول</span>
          <span >إنشاء حساب</span>
        </div>
        <div className="in-out">
          
            <button className="in div-bt" onClick={handleLogin}></button>
          

          <button className="out div-bt"></button>
        </div>
      </div>
    </div>
  );
}
