import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./View.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import MainNav from "../MainNav/MainNav";
import marks from "../../assest/data/marks";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import Header from "../Header/Header";
import axios from "axios";
export default function View() {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [special, setSpecial] = useState(3);
  const [rigester, setRigester] = useState(1);
  const [year, setYear] = useState(2022);
  const [collage, setCollage] = useState([]);
  const onSpecialChange = (e) => {
    setSpecial(e.target.value);
  };
  const onRigesterChange = (e) => {
    setRigester(e.target.value);
  };
  const onYearChange = (e) => {
    setYear(e.target.value);
  };
  const handleBack = () => {
    navigate("/");
    dispatch(setTitle(""));
    dispatch(setSymbol("../../assest/images/main.svg"));
  };
  useLayoutEffect(() => {
    dispatch(setTitle("عرض المفاضلة"));
    dispatch(setSymbol("../../assest/images/ViewIcon.svg"));
  }, [state.head]);
  useEffect(() => {
    axios
      .get(
        "https://university-admission.onrender.com/MajorList",
        {
          params: {
            admission_type_id: rigester,
            certificate_type_id: special,
            year: year,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${state.authToken}`,
          },
        }
      )
      .then((response) => {
        setCollage(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [special, rigester, year]);

  return (
    <div className="mainContainer mainbg" dir="rtl">
      <Header />

      <div className="viewContainer">
        <MainNav />
        <div className="view">
          <div className="list">
            <div className="special">
              <label className="label-list">الفرع :</label>
              <select name="special" id="selectList" onChange={onSpecialChange}>
                <option value="3">علمي</option>
                <option value="4">أدبي</option>
                <option value="9">الشريعة</option>
                <option value="8">فنون نسوية</option>
                <option value="5">تجارة</option>
                <option value="7">فندقية</option>
              </select>
            </div>
            <div className="rigester">
              <label className="label-list">نوع المفاضلة :</label>
              <select
                name="register"
                id="selectList"
                onClick={onRigesterChange}
              >
                <option value="1">المفاضلة العامة</option>
                <option value="2">مفاضلة الموازي</option>
                <option value="5">مفاضلة ذوي الاحتياجات الخاصة</option>
                <option value="3">مفاضلة أعضاء الهيئة التدريسية</option>
                <option value="4">مفاضلة أبناء الشهداء</option>
                <option value="8">مفاضلة سوري غير مقيم</option>
                <option value="7">مفاضلة أمهات سوريات</option>
                <option value="9">مفاضلة عرب وأجانب</option>
              </select>
            </div>

            <div className="yaer">
              <label className="label-list">العام :</label>
              <select name="year" id="selectList" onClick={onYearChange}>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </div>
          </div>

          <div className="data">
            <div className="head-mark">
              <div id="item-r">الفرع</div>
              <div>المحافظة</div>
              <div>المجموع العام</div>
              <div className="subject">
                المواد التي ينظر إليها
                <div className="sub-title">
                  <div>الرياضيات</div>
                  <div>اللغة الأجنبية</div>
                  <div>الفيزياء</div>
                </div>
              </div>
            </div>
            <div className="mark-cont">
              {collage.map((c) => (
                <div className="mark-item" key={c.id}>
                  <span id="item-r"> {c.name} </span>
                  <span>{c.governorate.name} </span>
                  <span> {c.min_pass_grade} </span>
                  <span id="sub-mark">
                    {" "}
                    {c.major.map((item) => {
                      return (
                        <span
                          style={{
                            minWidth: "50px",
                          }}
                        >
                          {item.min_pass_grade}
                        </span>
                      );
                    })}
                  </span>
                </div>
              ))}
            </div>
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
}
