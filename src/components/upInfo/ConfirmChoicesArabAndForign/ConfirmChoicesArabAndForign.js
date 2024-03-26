import React, { useLayoutEffect, useState } from "react";
import upinfo from "../../../assest//images//upinfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";
import MainNav from "../../MainNav/MainNav";
import Footer from "../../Footer/Footer";
import "./ConfirmChoicesArabAndForign.css";
import finalChoices from "../../../assest/data/Choices";
function ConfirmChoicesArabAndForign() {
  const state = useSelector((state) => state.root);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate("/starts/choose-desires/info");
  };
  useLayoutEffect(() => {
    dispatch(setTitle(" الأوراق المطلوبة"));
    dispatch(setSymbol("../../assest/images/ConfirmChoicesForAlln.svg"));
  }, [state.head]);
  const handleNext = () => {
    navigate("/ensure");
  };
  return (
    <div className="main-ConfirmChoiceArabAndForign" dir="rtl">
      <Header />
      <div className="ConfirmChoices-ArabAndForign">
        <div className="finalChoiceForArabAndForign">
          <div className="showfinalchoice-ArabAndForign">
            {finalChoices.map((m) => (
              <div
                className="each-element-of-final-choices-ArabAndForign"
                key={m.id}
              >
                <div className="numberOfTheChoice-ArabAndForign">{m.id} </div>
                <div className="collageChosenName-ArabAndForign">
                  {" "}
                  {m.name}{" "}
                </div>
                <div className="collageChosenCity-ArabAndForign">{m.city} </div>
              </div>
            ))}
          </div>
          <div className="some-content-cc-ArabAndForign">
            <div className="All-Square-ArabAndForign">
              <div className="three-row-squares">
                <div className="squarewithtext-ArabAndForign">
                  <div className="upInfoName-ArabAndForign">
                    <label>صورة البطاقة الشخصية-الوجه الأمامي</label>
                  </div>
                  <div className="upInfoSquare-ArabAndForign">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-ArabAndForign">
                      <input type="file" className="browsefile-ArabAndForign" />
                      <p className="filebrowsetext-ArabAndForign">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-ArabAndForign">
                  <div className="upInfoName-ArabAndForign">
                    <label>صورة البطاقة الشخصية-الوجه الخلفي</label>
                  </div>
                  <div className="upInfoSquare-ArabAndForign">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-ArabAndForign">
                      <input type="file" className="browsefile-ArabAndForign" />
                      <p className="filebrowsetext-ArabAndForign">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-ArabAndForign">
                  <div className="upInfoName-ArabAndForign">
                    <label>صورة عن شهادة الثانوية </label>
                  </div>
                  <div className="upInfoSquare-ArabAndForign">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-ArabAndForign">
                      <input type="file" className="browsefile-ArabAndForign" />
                      <p className="filebrowsetext-ArabAndForign">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="three-row-squares">
                <div className="squarewithtext-ArabAndForign">
                  <div className="upInfoName-ArabAndForign">
                    <label> صورة جواز السفر -الصفحة الأولى </label>
                  </div>
                  <div className="upInfoSquare-ArabAndForign">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-ArabAndForign">
                      <input type="file" className="browsefile-ArabAndForign" />
                      <p className="filebrowsetext-ArabAndForign">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-ArabAndForign">
                  <div className="upInfoName-ArabAndForign">
                    <label>صورة جواز السفر -الصفحة الثانية </label>
                  </div>
                  <div className="upInfoSquare-ArabAndForign">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-ArabAndForign">
                      <input type="file" className="browsefile-ArabAndForign" />
                      <p className="filebrowsetext-ArabAndForign">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
                <div className="squarewithtext-ArabAndForign">
                  <div className="upInfoName-ArabAndForign">
                    <label>إيصال الدفع</label>
                  </div>
                  <div className="upInfoSquare-ArabAndForign">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-ArabAndForign">
                      <input type="file" className="browsefile-ArabAndForign" />
                      <p className="filebrowsetext-ArabAndForign">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="ID-Number-Label-ArabAndForign">
              <label className="ID-Number-ArabAndForign">
                رقم البطاقة الشخصية :
              </label>
              <input
                type="text"
                id="inp"
                className="ID-Number-Input-ArabAndForign"
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

export default ConfirmChoicesArabAndForign;
