import React, { useLayoutEffect, useState } from "react";
import upinfo from "../../../assest//images//upinfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";
import MainNav from "../../MainNav/MainNav";
import Footer from "../../Footer/Footer";
import "./ConfirmChoicesHandoCapped.css";
import finalChoices from "../../../assest/data/Choices";

function ConfirmChoicesHandoCapped() {
  const state = useSelector((state) => state.root);
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
    <div className="main-ConfirmChoiceHandCapped" dir="rtl">
      <Header />
      <div className="ConfirmChoices-HandCapped">
        <div className="finalChoiceForHandCapped">
          <div className="showfinalchoice-HandCapped">
            {finalChoices.map((m) => (
              <div
                className="each-element-of-final-choices-HandCapped"
                key={m.id}
              >
                <div className="numberOfTheChoice-HandCapped">{m.id} </div>
                <div className="collageChosenName-HandCapped"> {m.name} </div>
                <div className="collageChosenCity-HandCapped">{m.city} </div>
              </div>
            ))}
          </div>
          <div className="some-content-cc-HandCapped">
            <div className="All-Square-HandCapped">
              <div className="two-row-squares">
                <div className="squarewithtext-HandCapped">
                  <div className="upInfoName-HandCapped">
                    <label>صورة البطاقة الشخصية الوجه الأمامي</label>
                  </div>
                  <div className="upInfoSquare-HandCapped">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-HandCapped">
                      <input type="file" className="browsefile-HandCapped" />
                      <p className="filebrowsetext-HandCapped">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
                <div className="squarewithtext-HandCapped">
                  <div className="upInfoName-HandCapped">
                    <label>صورة البطاقة الشخصية الوجه الخلفي</label>
                  </div>
                  <div className="upInfoSquare-HandCapped">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-HandCapped">
                      <input type="file" className="browsefile-HandCapped" />
                      <p className="filebrowsetext-HandCapped">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="two-row-squares">
                <div className="squarewithtext-HandCapped">
                  <div className="upInfoName-HandCapped">
                    <label>صورة عن ورقة طبية تثبت الإعاقة</label>
                  </div>
                  <div className="upInfoSquare-HandCapped">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-HandCapped">
                      <input type="file" className="browsefile-HandCapped" />
                      <p className="filebrowsetext-HandCapped">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
                <div className="squarewithtext-HandCapped">
                  <div className="upInfoName-HandCapped">
                    <label>صورة عن شهادة الثانوية</label>
                  </div>
                  <div className="upInfoSquare-HandCapped">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-HandCapped">
                      <input type="file" className="browsefile-HandCapped" />
                      <p className="filebrowsetext-HandCapped">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="ID-Number-Label-HandCapped">
              <label className="ID-Number-HandCapped">
                رقم البطاقة الشخصية:
              </label>
              <input
                type="text"
                id="inp"
                className="ID-Number-Input-HandCapped"
              />
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

export default ConfirmChoicesHandoCapped;
