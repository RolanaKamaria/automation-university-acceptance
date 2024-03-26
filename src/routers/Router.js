import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import View from "../components/View/View";
import Colleges from "../components/Colleges/Colleges";
import Login from "../components/Login/Login";
import MainPage from "../components/MainPage/MainPage";
import Confirm from "../trash/Confirm/Confirm";
import ITExplain from "../components/Colleges/ExplainInterFaces/ITExplain";
import ArchitectureExplain from "../components/Colleges/ExplainInterFaces/ArchitectureExplain";
import EconomicExplain from "../components/Colleges/ExplainInterFaces/EconomicExplai";
import DentistExplain from "../components/Colleges/ExplainInterFaces/DentistExplain";
import Test1 from "../components/Test/Test1";
import Test2 from "../components/Test/Test2";
import Test3 from "../components/Test/Test3";
import Test4 from "../components/Test/Test4";
import Test5 from "../components/Test/Test5";
import Test6 from "../components/Test/Test6";
import Test7 from "../components/Test/Test7";
import Result from "../components/Test/Result";
import ChooseDesiresGeneral from "../components/ChooseDesiresGeneral/ChooseDesiresGeneral";
import Helper from "../components/Helper/Helper";
import QueryState from "../components/QueryState/QueryState";
import MofadaliInfo from "../components/MofadaliInfo/MofadaliInfo";
import StudentInfo from "../components/StudentInfo/StudentInfo";
import ConfirmChoices from "../components/upInfo/ConfirmChoices/ConfirmChoices";
import ConfirmChoicesSonOfMartyrs from "../components/upInfo/ConfirmChoicesSonOfMartyrs/ConfirmChoicesSonOfMartyrs";
import ConfirmChoicesParallel from "../components/upInfo/ConfirmChoicesParallel/ConfirmChoicesParallel";
import ConfirmChoicesProfessor from "../components/upInfo/ConfirmChoicesProfessor/ConfirmChoicesProfessor";
import ConfirmChoicesHandoCapped from "../components/upInfo/ConfirmChoicesHandoCapped/ConfirmChoicesHandoCapped";
import ConfirmChoicesnonResidentSyrian from "../components/upInfo/ConfirmChoicesnonResidentSyrian/ConfirmChoicesnonResidentSyrian";
import ConfirmChoicesSyrianMothers from "../components/upInfo/ConfirmChoicesSyrianMothers/ConfirmChoicesSyrianMothers";
import ConfirmChoicesArabAndForign from "../components/upInfo/ConfirmChoicesArabAndForign/ConfirmChoicesArabAndForign";
import FinalChoicesView from "../components/FinalChoicesView/FinalChoicesView";
import EnterEmail from "../components/ForgetPassword/EnterEmail/EnterEmail";
import ConfirmPassword from "../components/ForgetPassword/ConfirmPassword/ConfirmPassword";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/view" element={<View />} />
      <Route path="/test1" element={<Test1 />} />
      <Route path="/colleges" element={<Colleges />} />
      <Route path="/login" element={<Login />} />
      <Route path="/starts/choose-desires" element={<ChooseDesiresGeneral />} />
      <Route path="/confirm" element={<Confirm />} />
      <Route path="/colleges/it-explain" element={<ITExplain />} />
      <Route
        path="/colleges/architecture-explaine"
        element={<ArchitectureExplain />}
      />
      <Route path="/colleges/economic-explaine" element={<EconomicExplain />} />
      <Route path="/colleges/dentist-explaine" element={<DentistExplain />} />
      <Route path="/test1/test2" element={<Test2 />} />
      <Route path="/test1/test2/test3" element={<Test3 />} />
      <Route path="/test1/test2/test3/test4" element={<Test4 />} />
      <Route path="/test1/test2/test3/test4/test5" element={<Test5 />} />
      <Route path="/test1/test2/test3/test4/test5/test6" element={<Test6 />} />
      <Route
        path="/test1/test2/test3/test4/test5/test6/test7"
        element={<Test7 />}
      />
      <Route
        path="/test1/test2/test3/test4/test5/test6/test7/result"
        element={<Result />}
      />
      <Route path="/help" element={<Helper />} />
      <Route path="/status/query-state" element={<QueryState />} />
      <Route path="/starts/choose-desires/info" element={<StudentInfo />} />
      <Route path="/start" element={<MofadaliInfo />} />
      <Route
        path="/starts/choose-desires/info/1"
        element={<ConfirmChoices />}
      />
      <Route
        path="/starts/choose-desires/info/2"
        element={<ConfirmChoicesParallel />}
      />
      <Route
        path="/starts/choose-desires/info/4"
        element={<ConfirmChoicesSonOfMartyrs />}
      />
      <Route
        path="/starts/choose-desires/info/3"
        element={<ConfirmChoicesProfessor />}
      />
      <Route
        path="/starts/choose-desires/info/5"
        element={<ConfirmChoicesHandoCapped />}
      />
      <Route
        path="/starts/choose-desires/info/6"
        element={<ConfirmChoicesnonResidentSyrian />}
      />
      <Route
        path="/starts/choose-desires/info/7"
        element={<ConfirmChoicesSyrianMothers />}
      />
      <Route
        path="/starts/choose-desires/info/8"
        element={<ConfirmChoicesArabAndForign />}
      />
      <Route path="/ensure" element={<FinalChoicesView />} />
      <Route path="/status" element={<Login />} />
      <Route path="/status/change-number-email" element={<EnterEmail />} />
      <Route
        path="/status/change-number-confirm"
        element={<ConfirmPassword />}
      />
    </Routes>
  );
};

export default Router;
