import React, {useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import rootReducer from "../../store/reducers/rootReducer";
import Footer from "../Footer/Footer";
import HeaderOut from "../HeaderOut/HeaderOut";
import "./ChoiceType.css";
import MainNav from "../MainNav/MainNav";

function ChoiceType() {
    const state = useSelector((state) => state);
    const navigate=useNavigate();

    const handleBack = () => {
      navigate("/");
      state.head.title="";
    };

  return (
    <div className="mainChoiceType" dir="rtl">
      <HeaderOut />
      <div className="Choice-Type-nav">
        <MainNav />
        <div className="all-Type">
          <div className="sc">
            <div className="ChoiceType">
              <div className="first">
                <a href="#" className="link" id="genral-scientific-section" value="1">
                  المفاضلة العامة للفرع العلمي
                </a>
                <a href="#" className="link" id="parallel-scientific-section" value="2">
                  مفاضلة الموازي للفرع العلمي
                </a>
                <a href="#" className="link" id="sons-of-martyrs" value="5">
                  مفاضلة أبناء الشهداء
                </a>
              </div>
              <div className="second">
                <a className="link" id="sons-of-professors" href="#" value="4">
                  مفاضلة أبناء أعضاء الهيئة التدريسية
                </a>
                <a href="#" className="link" id="handicapped" value="3">
                  مفاضلة ذوي الاحتياجات الخاصة
                </a>
                <a href="#" className="link" id="arabs-foreigners" value="8">
                  مفاضلة عرب وأجانب
                </a>
              </div>
              <div className="third">
                <a href="#" className="link" id="non-resident-syrian" value="6">
                  مفاضلة السوري غير المقيم
                </a>
                <a href="#" className="link" id="syrian-mothers" value="7">
                مفاضلة امهات سوريات
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="btn back-btn" id="back-c" onClick={handleBack}>
        {" "}
        عودة{" "}
      </button>
      <Footer />
    </div>
  );
}

export default ChoiceType
