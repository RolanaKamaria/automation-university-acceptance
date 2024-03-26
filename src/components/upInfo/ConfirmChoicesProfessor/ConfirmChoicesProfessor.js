import React, { useLayoutEffect, useState } from "react";
import upinfo from "../../../assest//images//upinfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";
import MainNav from "../../MainNav/MainNav";
import Footer from "../../Footer/Footer";
import "./ConfirmChoicesProfessor.css";
import finalChoices from "../../../assest/data/Choices";
function ConfirmChoicesProfessor() {
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate("/starts/choose-desires/info");
  };
  const handleNext = () => {
    navigate("/ensure");
  };
  useLayoutEffect(() => {
    dispatch(setTitle(" الأوراق المطلوبة"));
    dispatch(setSymbol("../../assest/images/ConfirmChoicesForAlln.svg"));
  }, [state.head]);
  return (
    <div className="main-ConfirmChoiceprof" dir="rtl">
      <Header />
      <div className="ConfirmChoices-prof">
        <div className="finalChoiceForprof">
          <div className="showfinalchoice-prof">
            {finalChoices.map((m) => (
              <div className="each-element-of-final-choices-prof" key={m.id}>
                <div className="numberOfTheChoice-prof">{m.id} </div>
                <div className="collageChosenName-prof"> {m.name} </div>
                <div className="collageChosenCity-prof">{m.city} </div>
              </div>
            ))}
          </div>
          <div className="some-content-cc-prof">
            <div className="All-Square-prof">
              <div className="three-row-squares">
                <div className="squarewithtext-prof">
                  <div className="upInfoName-prof">
                    <label>صورة البطاقة الشخصية للطالب-الوجه الأمامي</label>
                  </div>
                  <div className="upInfoSquare-prof">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-prof">
                      <input type="file" className="browsefile-prof" />
                      <p className="filebrowsetext-prof">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-prof">
                  <div className="upInfoName-prof">
                    <label>صورة البطاقة الشخصيةللطالب-الوجه الخلفي</label>
                  </div>
                  <div className="upInfoSquare-prof">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-prof">
                      <input type="file" className="browsefile-prof" />
                      <p className="filebrowsetext-prof">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-prof">
                  <div className="upInfoName-prof">
                    <label>صورة عن شهادة الثانوية </label>
                  </div>
                  <div className="upInfoSquare-prof">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-prof">
                      <input type="file" className="browsefile-prof" />
                      <p className="filebrowsetext-prof">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="three-row-squares">
                <div className="squarewithtext-prof">
                  <div className="upInfoName-prof">
                    <label>
                      {" "}
                      صورة البطاقة الشخصية للأم-الوجه الأمامي (اختياري){" "}
                    </label>
                  </div>
                  <div className="upInfoSquare-prof">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-prof">
                      <input type="file" className="browsefile-prof" />
                      <p className="filebrowsetext-prof">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-prof">
                  <div className="upInfoName-prof">
                    <label>
                      صورة البطاقة الشخصية للأم-الوجه الخلفي (اختياري)
                    </label>
                  </div>
                  <div className="upInfoSquare-prof">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-prof">
                      <input type="file" className="browsefile-prof" />
                      <p className="filebrowsetext-prof">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
                <div className="squarewithtext-prof">
                  <div className="upInfoName-prof">
                    <label>وثيقة عضو هيئة تدريسية</label>
                  </div>
                  <div className="upInfoSquare-prof">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-prof">
                      <input type="file" className="browsefile-prof" />
                      <p className="filebrowsetext-prof">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="ID-Number-Label-prof">
              <label className="ID-Number-prof">رقم البطاقة الشخصية:</label>
              <input type="text" id="inp" className="ID-Number-Input-prof" />
            </div>
          </div>
        </div>
        <div className="buttonForConfirmChoices">
          <button type="submit" className="btn" onClick={handleNext}>
            {" "}
            تأكيد{" "}
          </button>
          <button className="btn back-btn" onClick={handleBack}>
            {" "}
            عودة{" "}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ConfirmChoicesProfessor;
