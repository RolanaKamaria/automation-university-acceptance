import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Colleges.css";
import MainNav from "../MainNav/MainNav";
import ITExplain from "./ExplainInterFaces/ITExplain";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";

function Colleges() {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
    dispatch(setTitle(" "));
    dispatch(setSymbol("../../assest/images/main.svg"));
  };
  const ITClick = () => {
    navigate("/colleges/it-explain");
  };
  const ArchitecturClick = () => {
    navigate("/colleges/architecture-explaine");
  };
  const EconomyClick = () => {
    navigate("/colleges/economic-explaine");
  };
  const DentistClick = () => {
    navigate("/colleges/dentist-explaine");
  };
  useLayoutEffect(() => {
    dispatch(setTitle("الكليات والمعاهد"));
    dispatch(setSymbol("../../assest/images/CollegesImage.svg"));
  }, [state.head]);

  return (
    <div className="mainColleges mainbg" dir="rtl">
      <Header />
      <div className="col-nav">
        <MainNav />
        <div className="all-col">
          <div className="sc">
            <div className="colleges">
              <div className="first">
                <a href="#" className="link" id="medicine">
                  الطب البشري
                </a>
                <span className="link" id="dentist" onClick={DentistClick}>
                  طب الأسنان
                </span>
                <a href="#" className="link" id="pharm">
                  صيدلة
                </a>
              </div>
              <div className="second">
                <span className="link" id="IT" onClick={ITClick}>
                  الهندسة المعلوماتية
                </span>
                <a href="#" className="link" id="medical">
                  الهندسة الطبية
                </a>
                <a href="#" className="link" id="civil">
                  الهندسة المدنية
                </a>
              </div>
              <div className="third">
                <a href="#" className="link" id="communication">
                  هندسة الاتصالات
                </a>
                <span
                  onClick={ArchitecturClick}
                  className="link"
                  id="architecure"
                >
                  الهندسة المعمارية
                </span>
                <a href="#" className="link" id="mechanic">
                  هندسة الميكانيك
                </a>
              </div>
              <div className="fourth">
                <a href="#" className="link" id="siences">
                  العلوم الصحية
                </a>
                <span className="link" id="economic" onClick={EconomyClick}>
                  التجارة والاقتصاد
                </span>
                <a href="#" className="link" id="phisics">
                  الفيزياء{" "}
                </a>
              </div>
              <div className="fifth">
                <a href="#" className="link" id="chemistry">
                  {" "}
                  الكيمياء
                </a>
                <a href="#" className="link" id="law">
                  {" "}
                  الحقوق
                </a>
                <a href="#" className="link" id="english">
                  {" "}
                  أدب إنكليزي
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

export default Colleges;
