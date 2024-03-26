import React, { useEffect, useState } from "react";
import "./Header.css";

import { useSelector } from "react-redux";
import agree from "../../assest/images/agree.svg";
import logo3 from "../../assest/images/logo3.png";
import LoginImage from "../../assest/images/LoginImage.svg";
import CollegesImage from "../../assest/images/CollegesImage.svg";
import DesireImage from "../../assest/images/chooseDesire.svg";
import ViewIcon from "../../assest/images/ViewIcon.svg";
import dentalIcon from "../../assest/images/dentalIcon.svg";
import ArchitectureIcone from "../../assest/images/ArchitectureIcone.svg";
import startIcon from "../../assest/images/StartIcon.svg";
import EconomyIcon from "../../assest/images/EconomyIcon.svg";
import ITIcon from "../../assest/images/ITIcon.svg";
import Result from "../../assest/images/resultIcon.svg";
import Main from "../../assest/images/main.svg";
import ConfirmChoicesForAll from "../../assest/images/ConfirmChoicesForAll.svg";
import MofadaliInfo1 from "../../assest/images/MofadaliInfo1.svg";
import Mofadali2 from "../../assest/images/Mofadali2.svg";
import StudentInfo3 from "../../assest/images/StudentInfo3.svg";
import ForgetPass from "../../assest/images/ForgetPass.svg";
import finalChoiceViewHeader from "../../assest/images/finalChoiceViewHeader.svg";
import QueryState from "../../assest/images/QueryState.svg";
import Helper from "../../assest/images/Helper.svg";
export default function Header() {
  const state = useSelector((state) => state.root);

  const [res, setRes] = useState({});
  useEffect(() => {
    switch (state.head.symbol) {
      case "../../assest/images/agree.svg": {
        setRes(agree);
        break;
      }
      case "../../assest/images/LoginImage.svg": {
        setRes(LoginImage);
        break;
      }
      case "../../assest/images/CollegesImage.svg": {
        setRes(CollegesImage);
        break;
      }
      case "../../assest/images/chooseDesire.svg": {
        setRes(DesireImage);
        break;
      }
      case "../../assest/images/ViewIcon.svg": {
        setRes(ViewIcon);
        break;
      }
      case "../../assest/images/dentalIcon.svg": {
        setRes(dentalIcon);
        break;
      }
      case "../../assest/images/ArchitectureIcone.svg": {
        setRes(ArchitectureIcone);
        break;
      }
      case "../../assest/images/StartIcon.svg": {
        setRes(startIcon);
        break;
      }
      case "../../assest/images/EconomyIcon.svg": {
        setRes(EconomyIcon);
        break;
      }
      case "../../assest/images/ITIcon.svg": {
        setRes(ITIcon);
        break;
      }
      case "../../assest/images/resultIcon.svg": {
        setRes(Result);
        break;
      }
      case "../../assest/images/main.svg": {
        setRes(Main);
        break;
      }
      case "../../assest/images/QueryState.svg": {
        setRes(QueryState);
        break;
      }
      case "../../assest/images/finalChoiceViewHeader.svg": {
        setRes(finalChoiceViewHeader);
        break;
      }
      case "../../assest/images/ForgetPass.svg": {
        setRes(ForgetPass);
        break;
      }
      case "../../assest/images/MofadaliInfo1.svg": {
        setRes(MofadaliInfo1);
        break;
      }
      case "../../assest/images/Mofadali2.svg": {
        setRes(Mofadali2);
        break;
      }
      case "../../assest/images/StudentInfo3.svg": {
        setRes(StudentInfo3);
        break;
      }
      case "../../assest/images/ConfirmChoicesForAlln.svg": {
        setRes(ConfirmChoicesForAll);
        break;
      }
      case "../../assest/images/Helper.svg": {
        setRes(Helper);
        break;
      }
    }
  }, [state.head.symbol, setRes]);

  return (
    <div className="header mainbg">
      <img src={logo3} alt="logo3" className="image2" />

      <span className="title">{state.head.title}</span>

      <img src={res} alt="image" className="image1" />
    </div>
  );
}
