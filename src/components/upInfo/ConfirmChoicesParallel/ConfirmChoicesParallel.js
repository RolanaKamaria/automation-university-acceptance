import React, { useLayoutEffect, useState } from "react";
import upinfo from "../../../assest//images//upinfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";
import MainNav from "../../MainNav/MainNav";
import "./ConfirmChoicesParallel.css";
import Footer from "../../Footer/Footer";
import finalChoices from "../../../assest/data/Choices";

function ConfirmChoicesParallel() {
  const state = useSelector((state) => state);
  const state1 = useSelector((state) => state.student);
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
    <div className="main-ConfirmChoiceParallel" dir="rtl">
      <Header />
      <div className="ConfirmChoicesParallel">
        <div className="finalChoices">
          <div className="showfinalchoices">
            {state1.choices.map((m) => (
              <div className="each-element-final-choices" key={m.id}>
                <div className="numberOfTheChoices">{m.id} </div>
                <div className="collageChosen-Name"> {m.name} </div>
                <div className="collageChosen-City">{m.city} </div>
              </div>
            ))}
          </div>
          <div className="some-contents-cc">
            <div className="BothSquares">
              <div className="Just-two-row-squares">
                <div className="squarewithtexts">
                  <div className="upInfoNames">
                    <label>صورة البطاقة الشخصية الوجه الأمامي</label>
                  </div>
                  <div className="upInfoSquares">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabels">
                      <input type="file" className="browsefiles" />
                      <p className="filebrowsetexts">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
                <div className="squarewithtexts">
                  <div className="upInfoNames">
                    <label>صورة البطاقة الشخصية الوجه الخلفي</label>
                  </div>
                  <div className="upInfoSquares">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabels">
                      <input type="file" className="browsefiles" />
                      <p className="filebrowsetexts">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="Just-two-row-squares">
                <div className="squarewithtexts">
                  <div className="upInfoNames">
                    <label>صورة عن الشهادة الثانوية</label>
                  </div>
                  <div className="upInfoSquares">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabels">
                      <input type="file" className="browsefiles" />
                      <p className="filebrowsetexts">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtexts">
                  <div className="upInfoNames">
                    <label>صورة إيصال الدفع</label>
                  </div>
                  <div className="upInfoSquares">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabels">
                      <input type="file" className="browsefiles" />
                      <p className="filebrowsetexts">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="ID-Numbers-Label">
              <label className="ID-Numbers">رقم البطاقة الشخصية:</label>
              <input type="text" id="inp" className="ID-Numbers-Input" />
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

export default ConfirmChoicesParallel;
