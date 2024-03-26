import React, { useLayoutEffect, useState } from "react";
import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import "./Helper.css";

function Helper() {
  const state = useSelector((state) => state.root);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate("/");
    dispatch(setTitle(" "));
    dispatch(setSymbol("../../assest/images/main.svg"));
  };
  useLayoutEffect(() => {
    dispatch(setTitle("مركز المساعدة"));
    dispatch(setSymbol("../../assest/images/Helper.svg"));
  }, [state.head]);

  return (
    <div className="main-Helper mainbg" dir="rtl">
      <Header />
      <div className="PageContent-withNav">
        <MainNav />
        <div className="pageContent-withoutNav">
          <div className="about-website" id="unique">
            <label className="about-website-label">أهداف الموقع:</label>
            <p className="about-website-paragraph">
              تم العمل في هذا المشروع على بناء موقع لأتمتة مفاضلة القبول الجامعي
              في سوريا حتى يتمكن جميع الطلاب السوريين والمغتربين من التقدم إلى
              المفاضلة بسهولة إضافة إلى تحسين جودة خدمات الجامعة والوصول إلى
              المعلومات المتعلقة بالقبول الجامعي وتحسين العدالة والشمولية في
              عملية مفاضلة القبول والرفع من كفاءة إدارة الجامعات وتقليل الوقت
              المستغرق في معالجة طلبات الالتحاق بالجامعات.
            </p>
          </div>

          <div className="about-website-label" id="the-content-of-our-website">
            أقسام الموقع:{" "}
          </div>
          <div className="row-explain">
            <div className="about-website section-togather">
              <label className="section-of-website">
                <li className="li-right-padding">عرض المفاضلة:</li>
              </label>
              <p className="available-type">
                يتيح الموقع إمكانية عرض المفاضلة حسب:
              </p>
              <ol type="1" className="ol-section">
                <li>الفرع:</li>
              </ol>
              <p className=" special-par">علمي، أدبي، مهني</p>
              <ol start="2" className="ol-section">
                <li>نوع المفاضلة:</li>
              </ol>
              <p className=" special-par">
                عام، موازي، ذوي احتياجات خاصة، أعضاء هيئة تدريسية، أبناء شهداء،
                سوري غير مقيم، أمهات سوريات، عرب وأجانب
              </p>
              <ol start="3" className="ol-section">
                <li>العام الدراسي</li>
              </ol>
            </div>

            <div className="about-website section-togather">
              <label className="section-of-website">
                <li className="li-right-padding">عرض الأفرع:</li>
              </label>
              <p className="about-website-paragraph right-pad-par">
                يمكن الاطلاع على الأفرع (الكليات والمعاهد) مع توفر شرح لكل منها.
              </p>
            </div>
          </div>

          <div className="row-explain">
            <div className="about-website section-togather">
              <label className="section-of-website">
                <li className="li-right-padding">اختبار الرغبة:</li>
              </label>
              <p className="about-website-paragraph right-pad-par">
                يساعد الموقع الطالب على اختبار رغباته، وتحديد ميوله لمعرفة الفرع
                الجامعي الذي يناسب شخصيته.
              </p>
            </div>
            <div className="about-website section-togather">
              <label className="section-of-website">
                <li className="li-right-padding">تسجيل المفاضلة:</li>
              </label>
              <p className="about-website-paragraph right-pad-par">
                يتم من هنا بدء التسجيل على المفاضلة.
                <br></br>
                خطوات التسجيل على المفاضلة:
                <br></br>
                <ol type="1" className="ol-sec-two">
                  <li>
                    تعبئة معلومات المفاضلة، مع إدخال رقم اكتتاب الدورة المراد
                    التسجيل عليها (أولى/ثانية).
                  </li>
                  <li>اختيار الرغبات المطلوبة من قائمة الأفرع.</li>
                  <li>إدخال معلومات الطالب.</li>
                  <li>رفع الأوراق المطلوبة.</li>
                </ol>
                ثم تظهر المفاضلة النهائية لتأكيد نجاح العملية، ويمكن حفظ النتيجة
                كصورة.
              </p>
            </div>
          </div>
          <div className="row-explain">
            <div className="about-website section-togather">
              <label className="section-of-website">
                <li className="li-right-padding">مراجعة الطلب:</li>
              </label>

              <p className="about-website-paragraph right-pad-par">
                يتطلب تسجيل الدخول إلى الموقع من أجل مراجعة حالة الطلب، حيث سيتم
                إدخال البريد الإلكتروني ورقم الطلب الذي تم إرساله إلى البريد
                الإلكتروني عند تأكيد التسجيل على المفاضلة.
                <br></br>
                عند إتمام تسجيل الدخول بنجاح ستظهر مفاضلة الطالب النهائية.
                <br></br>
                يتيح الموقع للطالب إمكانية تعديل مفاضلته ضمن الوقت المتاح
                للتعديل، وأيضا إمكانية حذف المفاضلة.
              </p>
            </div>
          </div>
          <button className="back-btn zr-helper" onClick={handleBack}>
            عودة
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Helper;
