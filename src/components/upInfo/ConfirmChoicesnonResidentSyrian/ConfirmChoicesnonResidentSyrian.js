import React, { useLayoutEffect, useState } from "react";
import upinfo from "../../../assest//images//upinfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";
import MainNav from "../../MainNav/MainNav";
import Footer from "../../Footer/Footer";
import "./ConfirmChoicesnonResidentSyrian.css";
import finalChoices from "../../../assest/data/Choices";
function ConfirmChoicesnonResidentSyrian() {
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
    <div className="main-ConfirmChoiceNRS" dir="rtl">
      <Header />
      <div className="ConfirmChoices-NRS">
        <div className="finalChoiceForNRS">
          <div className="showfinalchoice-NRS">
            {finalChoices.map((m) => (
              <div className="each-element-of-final-choices-NRS" key={m.id}>
                <div className="numberOfTheChoice-NRS">{m.id} </div>
                <div className="collageChosenName-NRS"> {m.name} </div>
                <div className="collageChosenCity-NRS">{m.city} </div>
              </div>
            ))}
          </div>
          <div className="some-content-cc-NRS">
            <div className="All-Square-NRS">
              <div className="three-row-squares">
                <div className="squarewithtext-NRS">
                  <div className="upInfoName-NRS">
                    <label>
                      صورة البطاقة الشخصية أو إخراج القيد-الوجه الأمامي
                    </label>
                  </div>
                  <div className="upInfoSquare-NRS">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-NRS">
                      <input type="file" className="browsefile-NRS" />
                      <p className="filebrowsetext-NRS">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-NRS">
                  <div className="upInfoName-NRS">
                    <label>
                      صورة البطاقة الشخصية أو إخراج القيد-الوجه الخلفي
                    </label>
                  </div>
                  <div className="upInfoSquare-NRS">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-NRS">
                      <input type="file" className="browsefile-NRS" />
                      <p className="filebrowsetext-NRS">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-NRS">
                  <div className="upInfoName-NRS">
                    <label>
                      صورة عن شهادة الأساسية<br></br>
                      (مصدقة من الخارجية السورية وخارجية الدولة المقيم فيها)
                    </label>
                  </div>
                  <div className="upInfoSquare-NRS">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-NRS">
                      <input type="file" className="browsefile-NRS" />
                      <p className="filebrowsetext-NRS">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="three-row-squares">
                <div className="squarewithtext-NRS">
                  <div className="upInfoName-NRS">
                    <label>
                      صورة الشهادة الأصلية<br></br>(مصدقة من الخارجية
                      السورية-1-){" "}
                    </label>
                  </div>
                  <div className="upInfoSquare-NRS">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-NRS">
                      <input type="file" className="browsefile-NRS" />
                      <p className="filebrowsetext-NRS">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-NRS">
                  <div className="upInfoName-NRS">
                    <label>
                      صورة الشهادة الأصلية<br></br>(مصدقة من الخارجية
                      السورية-2-){" "}
                    </label>
                  </div>
                  <div className="upInfoSquare-NRS">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-NRS">
                      <input type="file" className="browsefile-NRS" />
                      <p className="filebrowsetext-NRS">استعراض الملفات</p>
                    </label>
                  </div>
                </div>

                <div className="squarewithtext-NRS">
                  <div className="upInfoName-NRS">
                    <label>
                      صورة الشهادة الأصلية<br></br>(مصدقة من الخارجية
                      السورية-3-){" "}
                    </label>
                  </div>
                  <div className="upInfoSquare-NRS">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-NRS">
                      <input type="file" className="browsefile-NRS" />
                      <p className="filebrowsetext-NRS">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="strange-look">
              <div className="forMoblieOnly">
                <div className="squarewithtext-NRS">
                  <div className="upInfoName-NRS">
                    <label>تسلسل دراسي (صف العاشر + الحادي عشر)</label>
                  </div>

                  <div className="upInfoSquare-NRS">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-NRS">
                      <input type="file" className="browsefile-NRS" />
                      <p className="filebrowsetext-NRS">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
                <div className="squarewithtext-NRS">
                  <div className="upInfoName-NRS">
                    <label> إيصال الدفع</label>
                  </div>
                  <div className="upInfoSquare-NRS">
                    <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                    <label className="browsefileLabel-NRS">
                      <input type="file" className="browsefile-NRS" />
                      <p className="filebrowsetext-NRS">استعراض الملفات</p>
                    </label>
                  </div>
                </div>
              </div>
              <div className="ID-Number-Label-NRS">
                <label className="ID-Number-NRS"> رقم البطاقة الشخصية:</label>
                <input type="text" id="inp" className="ID-Number-Input-NRS" />
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

export default ConfirmChoicesnonResidentSyrian;
