import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import "./MainPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import MainNav from "../MainNav/MainNav";
import MainInterface from "../../assest/images/MainInterface.jpg";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import Header from "../Header/Header";

const MainPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.root);
  useLayoutEffect(() => {
    dispatch(setTitle(""));
    dispatch(setSymbol("../../assest/images/main.svg"));
  }, [state.head]);
  return (
    <div className="main-page mainbg" dir="rtl">
      <Header />
      <div className="main-page-body">
        <MainNav />
        <div className="main-page-content">
          <div className="main-page-top">
            <img className="main-image" src={MainInterface} alt="" />
          </div>
          <div className="main-page-bottom">
            <div className="main-page-text">
              <h1>أهلاً بك على موقع مفاضلتي</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;
