import React, { useLayoutEffect, useState } from "react";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import "./StudentInfo.css";
import { setstdInfo } from "../../store/slices/studentSlice";
import axios from "axios";

function StudentInfo() {
  const state = useSelector((state) => state.root);
  const queryInfo = useSelector((state) => state.student);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [email, setEmail] = useState("");
  const [specialNumber, setSpecialNumber] = useState("");
  const [date, setDate] = useState("");
  const [sum, setSum] = useState("");
  const [wrong, setWrong] = useState(false);
  const [error, setError] = useState("الرجاء ملئ جميع الحقول مطلوبة !!!");
  const handleBack = () => {
    navigate("/starts/choose-desires");
  };
  useLayoutEffect(() => {
    dispatch(setTitle("معلومات الطالب"));
    dispatch(setSymbol("../../assest/images/StudentInfo3.svg"));
  }, [state.head]);
  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onCardChange = (e) => {
    setCardNumber(e.target.value);
  };
  const onNumberChange = (e) => {
    setSpecialNumber(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onSumChange = (e) => {
    setSum(e.target.value);
  };
  const handleNext = () => {
      if (
      name != "" &&
      email != "" &&
      specialNumber != "" &&
      cardNumber != "" &&
      date != "" &&
      sum != ""
    ) {
      
      const query = queryInfo.stdQuery.registerType;
      const std = {
        stdName: name,
        cardNumber: cardNumber,
        email: email,
        specialNumber: specialNumber,
        date: date,
        sum: sum,
      };
      dispatch(setstdInfo(std));
         axios
          .post(
            "https://university-admission.onrender.com/start-admission/",
            {
              admission_desires:queryInfo.choices,
                admission_id: queryInfo.registerType,
                first_name: "تقلا",
                middle_name: "زيدان",
                last_name: "زيدان",
                birth_date: date,
                national_id: cardNumber,
                email:email,
                seat_number:specialNumber,
                total_marks:sum,
              },
            
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
         console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
        
    
      if (query == 1) {
        navigate("/starts/choose-desires/info/1");
      } else if (query == 2) {
        console.log(query);
        navigate("/starts/choose-desires/info/2");
      } else if (query == 3) {
        navigate("/starts/choose-desires/info/3");
      } else if (query == 4) {
        navigate("/starts/choose-desires/info/4");
      } else if (query == 5) {
        navigate("/starts/choose-desires/info/5");
      } else if (query == 6) {
        navigate("/starts/choose-desires/info/6");
      } else if (query == 7) {
        navigate("/starts/choose-desires/info/7");
      } else if (query == 8) {
        navigate("/starts/choose-desires/info/8");
      }
      setWrong(false);
    
    } else {
      setError("الرجاء ملئ جميع الحقول مطلوبة !!!");
      setWrong(true);
    }
  };
  return (
    <div className="main-StudentInfo mainbg" dir="rtl">
      <Header />
      <div className="StudentInfo-nav">
        <MainNav />
        <div className="all-StudentInfo-content">
          <div className="desires-general-StudentInfo">
            <div className="label-input-inRowPosition-StudentInfo">
              <div className="StudentInfo-all-dem">
                <label className="label-StudentInfo">الاسم الثلاثي:</label>
                <input
                  type="text"
                  className="input-label-StudentInfo"
                  onChange={onNameChange}
                />
              </div>
              <div className="StudentInfo-all-dem">
                <label className="label-StudentInfo">
                  رقم البطاقة الشخصية:
                </label>
                <input
                  type="text"
                  className="input-label-StudentInfo"
                  onChange={onCardChange}
                />
              </div>
              <div className="StudentInfo-all-dem">
                <label className="label-StudentInfo">رقم الاكتتاب:</label>
                <input
                  type="text"
                  className="input-label-StudentInfo"
                  onChange={onNumberChange}
                />
              </div>
            </div>
            <div className="label-input-inRowPosition-StudentInfo">
              <div className="StudentInfo-all-dem">
                <label className="label-StudentInfo"> البريد الإلكتروني:</label>
                <input
                  type="email"
                  className="input-label-StudentInfo"
                  onChange={onEmailChange}
                />
              </div>
              <div className="StudentInfo-all-dem">
                <label className="label-StudentInfo"> تاريخ الميلاد:</label>
                <input
                  type="date"
                  className="input-label-StudentInfo"
                  onChange={onDateChange}
                />
              </div>
              <div className="StudentInfo-all-dem">
                <label className="label-StudentInfo">المجموع :</label>
                <input
                  type="text"
                  className="input-label-StudentInfo"
                  onChange={onSumChange}
                />
              </div>
            </div>
          </div>
          {wrong && (
            <p
              className="test-err"
              style={{
                paddingRight: "500px",
                paddingTop: "50px",
              }}
            >
              {error}
            </p>
          )}

          <div className="buttons-box-studentInfo">
            <button className="btn" type="submit" onClick={handleNext}>
              التالي
            </button>
            <button className="btn back-btn" onClick={handleBack}>
              عودة
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentInfo;
