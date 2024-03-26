import React, { useLayoutEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import finalChoices from "../../assest/data/Choices";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./FinalChoicesView.css";
import finalChoicesView from "../../assest/images/finalChoicesView.svg";
import VerifyVector from "../../assest/images/VerifyVector.svg";
import { getstdInfo } from "../../store/slices/studentSlice";
import { useReactToPrint } from "react-to-print";
function FinalChoicesView() {
  const state = useSelector((state) => state.root);
  const state1 = useSelector((state) => state.student);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "المفاضلة النهائية",
  });
  const handleBack = () => {
    navigate("/");
    dispatch(setTitle(" "));
    dispatch(setSymbol("../../assest/images/main.svg"));
  };
  useLayoutEffect(() => {
    dispatch(setTitle("المفاضلة النهائية"));
    dispatch(setSymbol("../../assest/images/finalChoiceViewHeader.svg"));
  }, [state.head]);
  return (
    <>
      <div className="main-FinalChoicesView" dir="rtl">
        <Header />
        <div className="FinalChoicesView-Content">
          <div className="finalChoicesView-outside">
            <div className="finalchoice-view" ref={componentRef}>
              {state1.choices.map((m) => (
                <div className="each-element-of-view-final-choices" key={m.id}>
                  <div className="numberOfTheChoice">{m.id} </div>
                  <div className="collageChosenName"> {m.name} </div>
                  <div className="collageChosenCity">{m.governorate_name} </div>
                </div>
              ))}
            </div>
          </div>
          <div className="numberOfFile">
            <label className="FinalChoiceViewNote">
              للتحقق من حالة الطلب، تم إرسال رمز الدخول إلى بريدك لإلكتروني
            </label>
          </div>
          <div className="bottomFinalChoice">
            <button className="btn zr" onClick={handlePrint}>
              حفظ النتيجة كصورة
            </button>
            <div className="ImageForFinalShow">
              <img
                src={finalChoicesView}
                alt="finalChoiceView"
                className="finalChoiceView"
              />
              <div className="ver-lab">
                <label className="label-FinalChoiceView">
                  تم تسجيل الرغبات بنجاح
                </label>
                <img
                  src={VerifyVector}
                  alt="VerifyVector"
                  className="VerifyVector"
                />
              </div>
            </div>
            <button className="btn back-btn zr" onClick={handleBack}>
              إنهاء
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default FinalChoicesView;
