import React, { useLayoutEffect, useState } from "react";
// import "./ChooseDesiresGeneral.css";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import marks from "../../assest/data/marks";
import { uniqBy } from "lodash";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import "./MofadaliInfo.css";
import {
  setStdQuery,
  setLoadingCollages,
  setstdSelection,
} from "../../store/slices/studentSlice";
import axios from "axios";
function MofadaliInfo() {
  const state = useSelector((state) => state.root);
  const queryInfo = useSelector((state) => state.student);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [register, setRigester] = useState(1);
  const [city, setCity] = useState(1);
  const [lang, setLang] = useState(1);
  const [specialNumber, setSpecialNumber] = useState("");
  const [sum, setSum] = useState("");
  const [wrong, setWrong] = useState(false);
  const [error, setError] = useState("الرجاء ملئ جميع الحقول مطلوبة !!!");
  const handleBack = () => {
    navigate("/");
    dispatch(setTitle(" "));
    dispatch(setSymbol("../../assest/images/main.svg"));
  };
  useLayoutEffect(() => {
    dispatch(setTitle("معلومات المفاضلة"));
    dispatch(setSymbol("../../assest/images/MofadaliInfo1.svg"));
  }, [state.head]);

  const fetchCollage = () => {
    dispatch(setLoadingCollages(true));
   const response= async()=>{
    await axios
      .get(
        "https://university-admission.onrender.com/filtered-major-list",
        {
          params: {
            admission_id: queryInfo.registerType,
            certificate_type_id: 3,
            min_pass_grade__lte: queryInfo.sum
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        dispatch(setstdSelection(response.data));
        dispatch(setLoadingCollages(true));
      })
      .catch((error) => {
        console.error(error);
      });
    }
  };

  const handleNext = () => {
    if (
      register != "" &&
      specialNumber != "" &&
      sum != "" &&
      city != "" &&
      lang != ""
    ) {
      navigate("/starts/choose-desires");
      const queInfo = {
        registerType: register,
        cityId: city,
        langId: lang,
        specialNumber: specialNumber,
        sum: sum,
      };
      dispatch(setStdQuery(queInfo));
      fetchCollage();
      setWrong(false);
    } else {
      setError("الرجاء ملئ جميع الحقول مطلوبة !!!");
      setWrong(true);
    }
  };
  const onRegisterChange = (e) => {
    setRigester(e.target.value);
  };
  const onCityChange = (e) => {
    setCity(e.target.value);
  };
  const onLangChange = (e) => {
    setLang(e.target.value);
  };
  const onNumberChange = (e) => {
    setSpecialNumber(e.target.value);
  };
  const onSumChange = (e) => {
    setSum(e.target.value);
  };
  return (
    <div className="main-MofadaliInfo mainbg" dir="rtl">
      <Header />
      <div className="MofadaliInfo-nav">
        <MainNav />
        <div className="desires-general-MofadaliInfo">
          <div className="selectList-RowPosition">
            <div className="choose-filter special">
              <label className="label-MofadaliInfo">نوع المفاضلة : </label>
              <select id="selectList" onChange={onRegisterChange}>
                <option value="1">عام</option>
                <option value="2">موازي</option>
                <option value="3">أبناء الهيئة التدريسية</option>
                <option value="4">أبناء شهداء</option>
                <option value="5">ذوي احتياجات خاصة</option>
                <option value="6">سوري غير مقيم</option>
                <option value="7">أمهات سوريات</option>
                <option value="8">عرب وأجانب</option>
              </select>
            </div>
            <div className="choose-filter special">
              <label className="label-MofadaliInfo">المحافظة : </label>
              <select id="selectList" onChange={onCityChange}>
                <option value="5">حمص</option>
                <option value="6">حماه</option>
                <option value="4">دمشق</option>
                <option value="14">حلب</option>
                <option value="8">اللاذقية</option>
                <option value="9">طرطوس</option>
                <option value="10">درعا</option>
                <option value="16">السويداء</option>
                <option value="17">القنيطرة</option>
                <option value="12">دير الزور</option>
                <option value="15">ادلب</option>
                <option value="13">الرقة</option>
                <option value="12">الحسكة</option>
                <option value="7">ريف دمشق</option>
              </select>
            </div>
            <div className="choose-filter special">
              <label className="label-MofadaliInfo">لغة التفاضل : </label>
              <select id="selectList" onChange={onLangChange}>
                <option value="3">اللغة الإنكليزية</option>
                <option value="2">اللغة الفرنسية</option>
                <option value="4">اللغة الروسية</option>
              </select>
            </div>
          </div>
          <div className="label-input-inRowPosition">
            <div className="Mof-all-dem">
              <label className="label-MofadaliInfo">رقم الاكتتاب:</label>
              <input
                type="text"
                className="input-label-MofadaliInfo"
                onChange={onNumberChange}
              />
            </div>
            <div className="Mof-all-dem">
              <label className="label-MofadaliInfo">المجموع :</label>
              <input
                type="text"
                className="input-label-MofadaliInfo"
                onChange={onSumChange}
              />
            </div>
          </div>

          {wrong && <p className="test-err">{error}</p>}
          <div className="buttons-box-mof">
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

export default MofadaliInfo;
