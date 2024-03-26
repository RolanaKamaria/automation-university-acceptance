import React, { useLayoutEffect } from "react";
import "./HeaderOut.css";
import { useDispatch, useSelector } from "react-redux";
import logo3 from "../../assest/images/logo3.png";
import LoginImage from "../../assest/images/LoginImage.svg";
import CollegesImage from "../../assest/images/CollegesImage.svg";
import agree from "../../assest/images/agree.svg";
import { setTitle } from "../../store/slices/rootSlice";
const HeaderOut = () => {
  const state = useSelector((state) => state.root);
  const state1 = useSelector((state) => state.user);
  const dispatch=useDispatch();
  // useLayoutEffect(()=>{
  //   dispatch(setTitle('أهلاً '+state1.user.userinfo.username))
  // },);
  var res = {};
  if (state.head.symbol === "../../assest/images/agree.svg") {
    res = agree;
  } else if (state.head.symbol === "../../assest/images/LoginImage.svg") {
    res = LoginImage;
  } else if (state.head.symbol === "../../assest/images/CollegesImage.svg") {
    res = CollegesImage;
  }
  return (
    <div className="header">
      <img src={logo3} alt="logo3" className="image2" />

      <span className="title">{state.head.title}</span>
      <div className="log-box">
      <div className="label">
        <span>تسجيل خروج</span>
      </div>
      <div className="in-out">
        <button className="log-out-bt div-bt"></button>
      </div>
      </div>
    </div>
  );
};

export default HeaderOut;
