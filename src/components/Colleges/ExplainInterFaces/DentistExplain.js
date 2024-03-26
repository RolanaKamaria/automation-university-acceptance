import React, { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Explain.css";
import Footer from "../../Footer/Footer";
import Dentistex from "../../../assest/images/Dentistex.svg";
import MainNav from "../../MainNav/MainNav";
import { setSymbol, setTitle } from "../../../store/slices/rootSlice";
import Header from "../../Header/Header";

function DentistExplain() {
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
    dispatch(setTitle("كلية طب الأسنان"));
    dispatch(setSymbol("../../assest/images/dentalIcon.svg"));
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
                <p className="sec-1" id="job">
                  عن الفرع:
                </p>
                <p className="text-1">
                  يهدف تخصص "طب وجراحة الفم والأسنان" أو ما يُطلق عليه باللغة
                  الإنجليزية "Dentistry" إلى تخريج أطباء مُؤهلِّين لمعالجة
                  المرضى، وعلى أهبة للعمل في عيادة الأسنان، ومُزوّدين بالمهارات
                  الكافية من أجل تشخيص، ومعالجة، والوقاية من أمراض الفم والأسنان
                  مثل الحشو، وتركيب الجسور، وتركيب الأطقم وتقويم الأسنان،
                  والخلع. بالإضافة إلى معالجة أمراض اللثة وإجراء العمليات
                  الجراحية للفم والأسنان.
                </p>
              </div>
              <div className="two">
                <p className="sec-1">الاختصاصات:</p>
                <div className="list-l">
                  <ul>
                    <li className="text-1">
                      قسم جراحة الفم والفكين وأمراض الفم واللثة
                    </li>
                    <li className="text-1">المعالجة التحفظية </li>
                    <li className="text-1">طب أسنان الأطفال والتقويم </li>
                    <li className="text-1">الاستعاضات السنية المتحركة</li>
                  </ul>
                </div>
              </div>
            </div>
            <img src={Dentistex} className="photo-ex" />
          </div>

          <div className="second-section">
            <div className="three">
              <p className="sec-1">سوق العمل :</p>
              <p className="text-1">
                طبيب أسنان عام/ مختص في مجال المختبرات، أو صحة الفم، أو
                تكنولوجيا الأسنان وغيرها من الاختصاصات/ طبيب تقويم أسنان/ خصائي
                طب أسنان أطفال/ طبيب أسنان في عيادة او مستشفى/ مدير عيادة أسنان.
              </p>
            </div>

            <div className="four">
              <p className="sec-1">لمعرفة المزيد :</p>
              <a
                href="http://damascusuniversity.edu.sy/dent/"
                target="blank_"
                className="text-4"
              >
                http://damascusuniversity.edu.sy/dent/
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

export default DentistExplain;
