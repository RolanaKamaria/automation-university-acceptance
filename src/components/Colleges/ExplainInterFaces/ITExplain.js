import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Explain.css";
import Footer from "../../Footer/Footer";
import Robot from "../../../assest/images/Robot.svg";
import MainNav from "../../MainNav/MainNav";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";

function ITExplain() {
  const state = useSelector((state) => state.root);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onBackButt = () => {
    navigate("/colleges");
  };
  const onleaveButt = () => {
    dispatch(setTitle(""));
    dispatch(setSymbol("../../assest/images/main.svg"));
    navigate("/");
  };
  useLayoutEffect(() => {
    dispatch(setTitle(" كلية الهندسة المعلوماتية"));
    dispatch(setSymbol("../../assest/images/ITIcon.svg"));
  }, [state.head]);
  return (
    <div className="main-explain mainbg" dir="rtl">
      <Header />
      <div className="Ex-nav">
        <MainNav />
        <div className="explain">
          <div className="fisrst-section">
            <div className="justText">
              <div className="one">
                <p className="sec-1">عن الفرع:</p>
                <p className="text-1" id="job">
                  يهدف تخصص الهندسة المعلوماتية إلى إعداد مهندسين ومبرمجين
                  محترفين ويمتلكون المعارف والمهارات الأساسية التي تعطي المهندس
                  قدرات على التحصيل والتحليل والتركيب وتوليد الحلول وعلى عمليات
                  الابتكار والتجديد
                </p>
              </div>
              <div className="two">
                <p className="sec-1">الاختصاصات:</p>
                <div className="list-l">
                  <ul>
                    <li className="text-1">هندسة البرمجيات ونظم المعلومات</li>
                    <li className="text-1">هندسة الشبكات والنظم الحاسوبية</li>
                    <li className="text-1">الذكاء الصنعي</li>
                  </ul>
                </div>
              </div>
            </div>
            <img src={Robot} className="photo-ex" />
          </div>
          <div className="second-section">
            <div className="three">
              <p className="sec-1">سوق العمل :</p>
              <p className="text-1">
                يإنشاء مشاريع وشركات مستقلة / إنشاء ورشات خدمية مصغرة / العمل
                كمهندس برمجيات / العمل ككمهندس لنظم التشغيل /العمل ك خبير وسائط
                متعددة / العمل خبير في الذكاء لصنعي ومجالاته
              </p>
            </div>

            <div className="four">
              <p className="sec-1">لمعرفة المزيد :</p>
              <a
                href="http://damascusuniversity.edu.sy/ite/"
                className="text-4"
                target="blank_"
              >
                http://damascusuniversity.edu.sy/ite/
              </a>
            </div>
          </div>
          <div className="buttons-box" id="explainbuttonbox">
            <button className="btn back-btn" onClick={onBackButt}>
              {" "}
              عودة{" "}
            </button>
            <button className="leave btn back-btn" onClick={onleaveButt}>
              مغادرة
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ITExplain;
