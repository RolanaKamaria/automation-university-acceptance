import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles/Result.css";
import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import { setRes, setSymbol, setTitle } from "../../store/slices/rootSlice";
import dentistPerson from "../../assest/images/dentistPerson.svg";
import ItPerson from "../../assest/images/ItPerson.svg";
import engPerson from "../../assest/images/engPerson.svg";
import doctorPerson from "../../assest/images/doctorPerson.svg";
import neturePerson from "../../assest/images/naturePerson.svg";
import lowyerPerson from "../../assest/images/lowyerPerson.svg";
import teachPerson from "../../assest/images/TeachPerson.svg";
import effictivePerson from "../../assest/images/effectivPerson.svg";
import { useNavigate } from "react-router-dom";
const Result = () => {
  let i = 1;
  const state = useSelector((state) => state.root);
  var obj = {
    name: state.result.name,
    src: state.result.src,
  };
  const result = state.result.data;
  var firstGroup = result.slice(0, 3);
  var secondGroup = result.slice(3, 6);
  var thirdGroup = result.slice(6, 9);
  const [img, setImg] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    dispatch(setTitle("النتيجة"));
    dispatch(setSymbol("../../assest/images/resultIcon.svg"));
    selectImage();
  }, [state.head]);

  const selectImage = () => {
    switch (obj.src) {
      case "../../assest/images/dentistPerson.svg": {
        setImg(dentistPerson);
        break;
      }
      case "../../assest/images/ItPerson.svg": {
        setImg(ItPerson);
        break;
      }
      case "../../assest/images/engPerson.svg": {
        setImg(engPerson);
        break;
      }
      case "../../assest/images/doctorPerson.svg": {
        setImg(doctorPerson);
        break;
      }
      case "../../assest/images/naturePerson.svg": {
        setImg(neturePerson);
        break;
      }
      case "../../assest/images/lowyerPerson.svg": {
        setImg(lowyerPerson);
        break;
      }
      case "../../assest/images/TeachPerson.svg": {
        setImg(teachPerson);
        break;
      }
      case "../../assest/images/effectivPerson.svg": {
        setImg(effictivePerson);
        break;
      }
    }
  };
  const handleBack = () => {
    navigate("/");
    dispatch(setTitle(""));
    dispatch(setSymbol("../../assest/images/main.svg"));
  };
  return (
    <div className="mainContainer mainbg" dir="rtl">
      <Header />
      <div className="viewContainer">
        <MainNav />
        <div className="result-body">
          <div className="result-head">
            <h1 className="result-title">{obj.name}</h1>
            <img src={img} className="result-img" />
          </div>
          <p className="result-span">
            الأفرع التي تلائم هذا النوع من الشخصيات :
          </p>
          <div className="result-content">
            <div className="result-group">
              {" "}
              {firstGroup.map((item) => (
                <div className="result-item">
                  <div className="box-title">
                    {item.name}
                    <div>
                      <a
                        href={item.url}
                        className="box-url"
                        target="blank"
                        rel="noreferrer"
                      >
                        المزيد ...
                      </a>
                    </div>
                  </div>
                  <div className="box-detail">{item.det}</div>
                </div>
              ))}
            </div>
            <div className="result-group">
              {" "}
              {secondGroup.map((item) => (
                <div className="result-item">
                  <div className="box-title">
                    {item.name}{" "}
                    <div>
                      <a
                        href={item.url}
                        className="box-url"
                        target="blank"
                        rel="noreferrer"
                      >
                        المزيد ...
                      </a>
                    </div>
                  </div>
                  <div className="box-detail">{item.det}</div>
                </div>
              ))}
            </div>
            <div className="result-group">
              {" "}
              {thirdGroup.map((item) => (
                <>
                  {" "}
                  <div className="result-item">
                    <div className="box-title">
                      {item.name}
                      <div>
                        <a
                          href={item.url}
                          className="box-url"
                          target="blank"
                          rel="noreferrer"
                        >
                          المزيد ...
                        </a>
                      </div>
                    </div>
                    <div className="box-detail">{item.det}</div>
                  </div>
                </>
              ))}
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="view-btn">
        <button className="btn back-btn" onClick={handleBack}>
          عودة
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Result;
