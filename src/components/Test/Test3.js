import React, { useLayoutEffect, useState } from "react";
import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import questions from "../../assest/data/TestDesires";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setScoreC, setSymbol, setTitle } from "../../store/slices/rootSlice";
const Test3 = () => {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [c, setC] = useState(state.score.c);
  const [que1, setQue1] = useState(false);
  const [que2, setQue2] = useState(false);
  const [que3, setQue3] = useState(false);
  const [que4, setQue4] = useState(false);
  const [que5, setQue5] = useState(false);
  const [wrong, setWrong] = useState(false);
  const message = "الرجاء الإجابة على جميع الأسئلة";

  const handleChoose = (e) => {
    if (parseInt(e.target.name) === 1) {
      setQue1(true);
    } else if (parseInt(e.target.name) === 2) {
      setQue2(true);
    } else if (parseInt(e.target.name) === 3) {
      setQue3(true);
    } else if (parseInt(e.target.name) === 4) {
      setQue4(true);
    } else {
      setQue5(true);
    }
    if (parseInt(e.target.value) === 1) {
      setC(c + 1);
    } else if (parseInt(e.target.value) === 2) {
      setC(c - 1);
    }
  };
  const calculateTotal = () => {
    if (que1 && que2 && que3 && que4 && que5) {
      setWrong(false);
      dispatch(setScoreC(c));
      navigate("/test1/test2/test3/test4");
    } else {
      setWrong(true);
    }
  };
  const handleBack = () => {
    navigate("/test1/test2");
  };
  useLayoutEffect(() => {
    dispatch(setTitle("اختبر رغباتي"));
    dispatch(setSymbol("../../assest/images/chooseDesire.svg"));
  }, [state.head]);
  return (
    <div className="main-test1 mainbg" dir="rtl">
      <Header />
      <div className="test1-container">
        <MainNav />
        <div className="test-content">
          <div className="form-container">
            <div className="choose-form">
              <div className="choose-label">نعم</div>
              <div className="choose-label">كلّا</div>
              <div className="choose-label">ربّما</div>
            </div>
            <div className="question-container">
              <div className="questions test3">
                {questions
                  .filter((ques) => ques.q === "c")
                  .map((ques) => (
                    <div className="ques-str" key={ques.id}>
                      {ques.str}
                    </div>
                  ))}
              </div>
              <div className="chooses">
                {questions
                  .filter((ques) => ques.q === "c")
                  .map((ques) => (
                    <div className="radio-choose1">
                      <input
                        className="rad-choose1"
                        type="radio"
                        value="1"
                        name={ques.id}
                        onChange={handleChoose}
                      />

                      <input
                        className="rad-choose1"
                        type="radio"
                        value="2"
                        name={ques.id}
                        onChange={handleChoose}
                      />

                      <input
                        className="rad-choose1"
                        type="radio"
                        value="3"
                        name={ques.id}
                        onChange={handleChoose}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          {wrong && <p className="test-err">{message}</p>}
          <div id="create-btn-box" className="buttons-box">
            <button className="btn" type="submit" onClick={calculateTotal}>
              التالي
            </button>
            <button className="btn back-btn" onClick={handleBack}>
              السابق
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Test3;
