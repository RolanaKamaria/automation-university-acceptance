import React, { useLayoutEffect, useState } from "react";
import upinfo from "../../../assest//images//upinfo.svg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import finalChoices from "../../../assest/data/Choices";
import Header from "../../Header/Header";
import MainNav from "../../MainNav/MainNav";
import Footer from "../../Footer/Footer";
import "./ConfirmChoices.css";
import axios from "axios";

function ConfirmChoices() {
  const state = useSelector((state) => state.root);
  const queryInfo = useSelector((state) => state.student);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [personalNum, setPersonalNum] = useState(123456789);
  const [wrong, setWrong] = useState(false);
  const [error, setError] = useState("الرجاء املئ الحقول المطلوبة !!!");
  const handleBack = () => {
    navigate("/starts/choose-desires/info");
  };
  useLayoutEffect(() => {
    dispatch(setTitle(" الأوراق المطلوبة"));
    dispatch(setSymbol("../../assest/images/ConfirmChoicesForAlln.svg"));
  }, [state.head]);
  const handleNext = () => {
    if (
      image1 != null &&
      image2 != null &&
      image3 != null &&
      personalNum != ""
    ) {
      setWrong(false);
      navigate("/ensure");
    } else {
      setError("الرجاء املئ الحقول المطلوبة !!!");
      setWrong(true);
    }
  };
  const handelSet1 = (e) => {
    setImage1(e.target.files[0]);
    console.log(image1);
    axios
      .post(
        "https://university-admission.onrender.com/upload-required-documents/",
        {
          admission_id: 14,
          document_id: 2,
          document: image1,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handelSet2 = (e) => {
    setImage2(e.target.files[0]);
    axios
      .post(
        "https://university-admission.onrender.com/upload-required-documents/",
        {
          admission_id: 14,
          document_id: 2,
          document: image2,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handelSet3 = (e) => {
    setImage3(e.target.files[0]);
    axios
      .post(
        "https://university-admission.onrender.com/upload-required-documents/",
        {
          admission_id: 14,
          document_id: 2,
          document: image3,
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const changePersonalNumber = (e) => {
    setPersonalNum(e.target.value);
  };
  return (
    <div className="main-ConfirmChoice" dir="rtl">
      <Header />
      <div className="ConfirmChoices">
        <div className="finalChoice">
          <div className="showfinalchoice">
            {queryInfo.choices.map((m) => (
              <div className="each-element-of-final-choices" key={m.id}>
                <div className="numberOfTheChoice">{m.id} </div>
                <div className="collageChosenName"> {m.name} </div>
                <div className="collageChosenCity">{m.city} </div>
              </div>
            ))}
          </div>
          <div className="some-content-cc">
            <div className="BothSquare">
              <div className="squarewithtext">
                <div className="upInfoName">
                  <label>صورة البطاقة الشخصية الوجه الأمامي</label>
                </div>
                <div className="upInfoSquare">
                  <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                  <label className="browsefileLabel">
                    <input
                      type="file"
                      className="browsefile"
                      onChange={handelSet1}
                    />
                    <p className="filebrowsetext">استعراض الملفات</p>
                  </label>
                </div>
              </div>
              <div className="squarewithtext">
                <div className="upInfoName">
                  <label>صورة البطاقة الشخصية الوجه الخلفي</label>
                </div>
                <div className="upInfoSquare">
                  <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                  <label className="browsefileLabel">
                    <input
                      type="file"
                      className="browsefile"
                      onChange={handelSet2}
                    />
                    <p className="filebrowsetext">استعراض الملفات</p>
                  </label>
                </div>
              </div>

              <div className="squarewithtext" id="low">
                <div className="upInfoName">
                  <label>صورة عن شهادة الثانوية </label>
                </div>
                <div className="upInfoSquare">
                  <img src={upinfo} alt="upinfo" className="upinfoLogo" />
                  <label className="browsefileLabel">
                    <input
                      type="file"
                      className="browsefile"
                      onChange={handelSet3}
                    />
                    <p className="filebrowsetext">استعراض الملفات</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="ID-Number-Label">
              <label className="ID-Number">رقم البطاقة الشخصية:</label>
              <input
                type="text"
                id="inp"
                className="ID-Number-Input"
                onChange={changePersonalNumber}
              />
            </div>
          </div>
        </div>
        {wrong && (
          <p
            className="test-err"
            style={{
              paddingRight: "550px",
              paddingTop: "50px",
            }}
          >
            {error}
          </p>
        )}
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

export default ConfirmChoices;
