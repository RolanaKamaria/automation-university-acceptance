import React, { useLayoutEffect, useRef, useState } from "react";

import "./MainNav.css";
import { NavLink } from "react-router-dom";
import View from "../View/View";
import Colleges from "../Colleges/Colleges";
import MofadaliInfo from "../MofadaliInfo/MofadaliInfo";
import { useDispatch, useSelector } from "react-redux";
import { CiMenuBurger } from "react-icons/ci";
import {
  setScoreA,
  setScoreB,
  setScoreC,
  setScoreD,
  setScoreE,
  setScoreF,
  setScoreG,
  setSymbol,
  setTitle,
} from "../../store/slices/rootSlice";
import Test1 from "../Test/Test1";
import ChooseDesiresGeneral from "../ChooseDesiresGeneral/ChooseDesiresGeneral";
import Helper from "../Helper/Helper";
import QueryState from "../QueryState/QueryState";
export default function MainNav() {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const [liClass, setLiClass] = useState("main-side visible");
  const [chooseClass, setChooseClass] = useState("main-side hidden choose");
  const [show, setShow] = useState(true);

  const handlTest = () => {
    dispatch(setScoreA(0));
    dispatch(setScoreB(0));
    dispatch(setScoreC(0));
    dispatch(setScoreD(0));
    dispatch(setScoreE(0));
    dispatch(setScoreF(0));
    dispatch(setScoreG(0));
  };

  return (
    <div
      className={show ? "outer-container  mainbg" : "outer-container1 mainbg"}
    >
      <ul className="main-navlink ">
        <li
          className={show ? "main-nav-icon" : "main-nav-icon1"}
          onClick={() => {
            setShow(!show);
          }}
        >
          <CiMenuBurger className="nav-icon" />
        </li>
        <li className={show ? "main-side" : "main-side1"}>
          <NavLink to="/view" element={<View />}>
            عرض المفاضلة
          </NavLink>{" "}
        </li>

        <li className={show ? "main-side" : "main-side1"}>
          <NavLink to="/colleges" element={<Colleges />}>
            عرض الأفرع
          </NavLink>
        </li>
        <li className={show ? "main-side" : "main-side1"}>
          <NavLink to="/test1" element={<Test1 />} onClick={handlTest}>
            اختبار الرغبة
          </NavLink>
        </li>
        <li className={show ? "main-side" : "main-side1"}>
          <NavLink to="/start" element={<MofadaliInfo />}>
            تسجيل المفاضلة
          </NavLink>
        </li>
        <li className={show ? "main-side" : "main-side1"}>
          <NavLink to="/status" element={<QueryState />}>
            مراجعة الطلب
          </NavLink>
        </li>
        <li className={show ? "main-side" : "main-side1"}>
          <NavLink to="/help" element={<Helper />}>
            مركز المساعدة
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
