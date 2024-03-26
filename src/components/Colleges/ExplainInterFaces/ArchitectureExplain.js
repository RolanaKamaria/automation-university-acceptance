import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Explain.css";
import Footer from "../../Footer/Footer";
import Architectureex from "../../../assest/images/Architectureex.svg";
import MainNav from "../../MainNav/MainNav";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";

function ArchitectureExplain() {
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
    dispatch(setTitle(" كلية الهندسة المعمارية"));
    dispatch(setSymbol("../../assest/images/ArchitectureIcone.svg"));
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
                  لا تُعرَف "هندسة العمارة" أو"الهندسة المعمارية" بأنَّها علم
                  فقط، بل هي شَغَف، وإبداع، وموهبة، وعمل، بالإضافة إلى أنها فنّ؛
                  فهي فن التصميم. تُعتَبر هندسة العمارة فرعًا من قسم الفنون
                  والتصميم، كما أنها فرعًا من فروع الهندسة أو نوعًا منها. حيث
                  يختص كل نوع من أنواع الهندسة بجانب معيّن وتختص هندسة العمارة
                  بجوانب البناء والتصميم المعماري والإنشاء.
                </p>
              </div>
              <div className="two">
                <p className="sec-1">الاختصاصات:</p>
                <div className="list-l">
                  <ul>
                    <li className="text-1">التصميم</li>
                    <li className="text-1">ديكور داخلي</li>
                    <li className="text-1">تخطيط مدن</li>
                    <li className="text-1">التنفيذية</li>
                  </ul>
                </div>
              </div>
            </div>
            <img src={Architectureex} className="photo-ex" />
          </div>
          <div className="second-section">
            <div className="three">
              <p className="sec-1">سوق العمل :</p>
              <p className="text-1">
                مهندس مُنفّذ/ مُدير مشاريع/ مهندس مُشرف/ تكنولوجيا البناء/ الرسم
                المعماري/ العمارة الداخلية/ شركات المشاريع الهندسية/ المكاتب
                الهندسية/ مؤسسات الاستشارات/ مكتب خاص/ شركات الإنشاء/
              </p>
            </div>

            <div className="four">
              <p className="sec-1">لمعرفة المزيد :</p>
              <a
                href="http://damascusuniversity.edu.sy/arch/"
                className="text-4"
                target="blank_"
              >
                http://damascusuniversity.edu.sy/arch/
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

export default ArchitectureExplain;
