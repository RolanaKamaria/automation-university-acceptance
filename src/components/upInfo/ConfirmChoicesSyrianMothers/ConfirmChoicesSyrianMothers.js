import React, { useLayoutEffect, useState } from "react";
import upinfo from "../../../assest//images//upinfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";
import MainNav from "../../MainNav/MainNav";
import Footer from "../../Footer/Footer";
import finalChoices from "../../../assest/data/Choices";
import "./ConfirmChoicesSyrianMothers.css";

function ConfirmChoicesSyrianMothers() {
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
    dispatch(setTitle("الأوراق المطلوبة"));
    dispatch(setSymbol("../../assest/images/ConfirmChoicesForAlln.svg"));
  }, [state.head]);
  return (
    <div className="main-ConfirmChoicemm" dir="rtl">
      <Header />
      <div className="ConfirmChoices-mm">
        <div className="finalChoiceFormm">
          <div className="showfinalchoice-mm">
            {finalChoices.map((m) => (
              <div className="each-element-of-final-choices-mm" key={m.id}>
                <div className="numberOfTheChoice-mm">{m.id} </div>
                <div className="collageChosenName-mm"> {m.name} </div>
                <div className="collageChosenCity-mm">{m.city} </div>
              </div>
            ))}
          </div>
          <div className="some-content-cc-mm">
            <div className="All-Square-mm">
              <div className="three-row-squares">
                <div className="squarewithtext-mm">
                  <div className="upInfoName-mm">
                    <label>صورة البطاقة الشخصية للطالب-الوجه الأمامي</label>
                  </div>
                  <div className="upInfoSquare-mm">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-mm">
                      <input type="file" className="browsefile-mm" />
                      <p className="filebrowsetext-mm">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-mm">
                  <div className="upInfoName-mm">
                    <label>صورة البطاقة الشخصية للطالب-الوجه الخلفي</label>
                  </div>
                  <div className="upInfoSquare-mm">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-mm">
                      <input type="file" className="browsefile-mm" />
                      <p className="filebrowsetext-mm">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-mm">
                  <div className="upInfoName-mm">
                    <label>صورة عن شهادة الثانوية </label>
                  </div>
                  <div className="upInfoSquare-mm">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-mm">
                      <input type="file" className="browsefile-mm" />
                      <p className="filebrowsetext-mm">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="three-row-squares">
                <div className="squarewithtext-mm">
                  <div className="upInfoName-mm">
                    <label>صورة البطاقة الشخصية للأم-الوجه الأمامي </label>
                  </div>
                  <div className="upInfoSquare-mm">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-mm">
                      <input type="file" className="browsefile-mm" />
                      <p className="filebrowsetext-mm">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-mm">
                  <div className="upInfoName-mm">
                    <label> صورة البطاقة الشخصية للأم-الوجه الخلفي </label>
                  </div>
                  <div className="upInfoSquare-mm">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-mm">
                      <input type="file" className="browsefile-mm" />
                      <p className="filebrowsetext-mm">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-mm">
                  <div className="upInfoName-mm">
                    <label>تسلسل دراسي (من صف السادس إلى الحادي عشر)</label>
                  </div>
                  <div className="upInfoSquare-mm">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-mm">
                      <input type="file" className="browsefile-mm" />
                      <p className="filebrowsetext-mm">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="strange-look">
              <div className="squarewithtext-mm">
                <div className="upInfoName-mm">
                  <label> سند إقامة للأم</label>
                </div>
                <div className="upInfoSquare-mm">
                  <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                  <label className="browsefileLabel-mm">
                    <input type="file" className="browsefile-mm" />
                    <p className="filebrowsetext-mm">استعراض الملفات</p>
                  </label>
                </div>
              </div>
              <div className="input-togather">
                <div className="ID-Number-Labels-mm">
                  <label className="ID-Number-mm">
                    {" "}
                    رقم البطاقة الشخصية للطالب:
                  </label>
                  <label className="ID-Number-mm">
                    رقم البطاقة الشخصية للأم:
                  </label>
                </div>
                <div className="ID-Number-Label-mm">
                  <input type="text" id="inp" className="ID-Number-Input-mm" />
                  <input type="text" id="inp" className="ID-Number-Input-mm" />
                </div>
              </div>
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

export default ConfirmChoicesSyrianMothers;
