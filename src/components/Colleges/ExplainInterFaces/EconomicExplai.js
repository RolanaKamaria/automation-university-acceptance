import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Explain.css";
import Footer from "../../Footer/Footer";
import Economicex from "../../../assest/images/Economicex.svg";
import MainNav from "../../MainNav/MainNav";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";

function EconomicExplain() {
  const state = useSelector((state) => state.root);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onBackButt = () => {
    navigate("/colleges");
  };
  const onleaveButt = () => {
    dispatch(setSymbol("../../assest/images/main.svg"));
    dispatch(setTitle(" "));
    navigate("/");
  };
  useLayoutEffect(() => {
    dispatch(setTitle(" كلية الاقتصاد"));
    dispatch(setSymbol("../../assest/images/EconomyIcon.svg"));
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
                  يهدف تخصص الاقتصاد إلى تأهيل الطلاب والطالبات وتزويدهم
                  بالمعرفة، والمعلومات اللازمة في مجالات الاقتصاد النظرية
                  والتطبيقية من أجل تلبية احتياجات سوق العمل ومتطلباته محليًا
                  ودوليًا، ومن الإلمام بجميع الاختصاصات التي تقدمها كلية
                  الاقتصاد، وبالتالي فإنه يصبح قادراً على التفكير بطريقة تندمج
                  فيها المحاسبة مع الاقتصاد مع الإدارة مع المصارف مع الإحصاء
                  وهذا لب وجوهر التفكير الاقتصادي المتكامل.
                </p>
              </div>
              <div className="two">
                <p className="sec-1">الاختصاصات:</p>
                <div className="list-l">
                  <ul>
                    <li className="text-1">قسم الاقتصاد </li>
                    <li className="text-1">قسم المحاسبة</li>
                    <li className="text-1">قسم إدارة الأعمال</li>
                    <li className="text-1">قسم الإحصاء التطبيقي</li>
                    <li className="text-1">قسم المصارف والتأمين</li>
                  </ul>
                </div>
              </div>
            </div>
            <img src={Economicex} className="photo-ex" />
          </div>
          <div className="second-section">
            <div className="three">
              <p className="sec-1">سوق العمل :</p>
              <p className="text-1">
                البنوك/ البورصة/ الشركات/ شركات التأمين/ السكرتاريا/ شؤون
                الموظفين/ مدرس في المدرسة أو الجامعة/ محاسب قانوني، أو مساعد
                محاسب/ العمل في المصارف العامة والخاصة/ محلل اقتصادي.
              </p>
            </div>

            <div className="four">
              <p className="sec-1">لمعرفة المزيد :</p>
              <a
                href="http://damascusuniversity.edu.sy/eco/"
                className="text-4"
                target="blank_"
              >
                http://damascusuniversity.edu.sy/eco/
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

export default EconomicExplain;
