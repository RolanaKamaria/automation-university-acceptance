import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import finalChoices from "../../assest/data/Choices";
import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import "./QueryState.css";

function QueryState() {
  const state = useSelector((state) => state.root);
  const state1 = useSelector((state) => state.student);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate("/");
    dispatch(setTitle(" "));
    dispatch(setSymbol("../../assest/images/main.svg"));
  };
  useLayoutEffect(() => {
    dispatch(setTitle("حالة الطلب"));
    dispatch(setSymbol("../../assest/images/QueryState.svg"));
  }, [state.head]);
  const changeMofadaly = () => {
    navigate("/start");
  };
  const handleDelete = () => {
    alert("هل أنت متأكد من الحذف ؟؟");
    navigate("/");
  };
  return (
    <div className="main-QueryState" dir="rtl">
      <Header />
      <div className="QueryState-Nav">
        <MainNav />
        <div className="QueryState-Without-Nav">
          <div className="finalChoice-QueryState">
            <div className="showfinalchoice-QueryState">
              {state1.stdAddmission.map((m) => (
                <div
                  className="each-element-of-final-choices-QueryState"
                  key={m.id}
                >
                  <div className="numberOfTheChoice">{m.major_id} </div>
                  <div className="collageChosenName"> {m.major_name} </div>
                  <div className="collageChosenCity">{m.governorate_name} </div>
                </div>
              ))}
            </div>
          </div>
          <div className="QueryStateForStudent">
            <label className="QueryStateForStudent-Label">
              تم تسجيل طلبك بنجاح
            </label>
          </div>
          <div className="All-button-togather">
            <div className="first-group-button">
              <button
                className="zr-QueryState button-color-GreenQS"
                onClick={changeMofadaly}
              >
                تعديل المفاضلة
              </button>
              <button
                className="zr-QueryState button-color-RedQS"
                onClick={handleDelete}
              >
                حذف المفاضلة
              </button>
            </div>
            <div className="first-group-button">
              <button
                className="btn back-btn zr-QueryState"
                onClick={handleBack}
              >
                خروج
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default QueryState;
