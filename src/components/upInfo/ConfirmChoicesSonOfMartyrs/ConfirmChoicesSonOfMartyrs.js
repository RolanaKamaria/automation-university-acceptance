import React, { useLayoutEffect, useState } from "react";
import upinfo from "../../../assest//images//upinfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";
import MainNav from "../../MainNav/MainNav";
import Footer from "../../Footer/Footer";
import "./ConfirmChoicesSonOfMartyrs.css";
import finalChoices from "../../../assest/data/Choices";

function ConfirmChoicesSonOfMartyrs() {
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
    <div className="main-ConfirmChoiceSonOfMartyrs" dir="rtl">
      <Header />
      <div className="ConfirmChoices-SonOfMartyrs">
        <div className="finalChoiceForSonOfMartyrs">
          <div className="showfinalchoice-SonOfMartyrs">
            {finalChoices.map((m) => (
              <div
                className="each-element-of-final-choices-SonOfMartyrs"
                key={m.id}
              >
                <div className="numberOfTheChoice-SonOfMartyrs">{m.id} </div>
                <div className="collageChosenName-SonOfMartyrs"> {m.name} </div>
                <div className="collageChosenCity-SonOfMartyrs">{m.city} </div>
              </div>
            ))}
          </div>
          <div className="some-content-cc-SonOfMartyrs">
            <div className="All-Square-SonOfMartyrs">
              <div className="three-row-squares-son">
                <div className="squarewithtext-SonOfMartyrs">
                  <div className="upInfoName-SonOfMartyrs">
                    <label>صورة البطاقة الشخصية-الوجه الأمامي</label>
                  </div>
                  <div className="upInfoSquare-SonOfMartyrs">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-SonOfMartyrs">
                      <input type="file" className="browsefile-SonOfMartyrs" />
                      <p className="filebrowsetext-SonOfMartyrs">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-SonOfMartyrs">
                  <div className="upInfoName-SonOfMartyrs">
                    <label>صورة البطاقة الشخصية-الوجه الخلفي</label>
                  </div>
                  <div className="upInfoSquare-SonOfMartyrs">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-SonOfMartyrs">
                      <input type="file" className="browsefile-SonOfMartyrs" />
                      <p className="filebrowsetext-SonOfMartyrs">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-SonOfMartyrs">
                  <div className="upInfoName-SonOfMartyrs">
                    <label>صورة عن شهادة الثانوية </label>
                  </div>
                  <div className="upInfoSquare-SonOfMartyrs">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-SonOfMartyrs">
                      <input type="file" className="browsefile-SonOfMartyrs" />
                      <p className="filebrowsetext-SonOfMartyrs">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="three-row-squares-son">
                <div className="squarewithtext-SonOfMartyrs">
                  <div className="upInfoName-SonOfMartyrs">
                    <label>صورة بيان قيد عائلي</label>
                  </div>
                  <div className="upInfoSquare-SonOfMartyrs">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-SonOfMartyrs">
                      <input type="file" className="browsefile-SonOfMartyrs" />
                      <p className="filebrowsetext-SonOfMartyrs">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-SonOfMartyrs">
                  <div className="upInfoName-SonOfMartyrs">
                    <label>صورة عن وثيقة الاستشهاد</label>
                  </div>
                  <div className="upInfoSquare-SonOfMartyrs">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-SonOfMartyrs">
                      <input type="file" className="browsefile-SonOfMartyrs" />
                      <p className="filebrowsetext-SonOfMartyrs">
                        استعراض الملفات
                      </p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="ID-Number-Label-SonOfMartyrs">
              <label className="ID-Number-SonOfMartyrs">
                رقم البطاقة الشخصية:
              </label>
              <input
                type="text"
                id="inp"
                className="ID-Number-Input-SonOfMartyrs"
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

export default ConfirmChoicesSonOfMartyrs;
