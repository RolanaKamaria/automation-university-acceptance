import React, { useLayoutEffect, useState } from "react";
import "./styles/Test7.css";
import Header from "../Header/Header";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import questions from "../../assest/data/TestDesires";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setName, setRes, setScoreG, setSrc, setSymbol, setTitle,setData } from "../../store/slices/rootSlice";
import colTit from "../../assest/data/CollagesTitles";
import { setRef } from "@material-ui/core";
import collages from "../../assest/data/Collegs";
const Test7 = () => {
  const state = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [g, setG] = useState(state.score.g);
  const a=state.score.a;
  const b=state.score.b;
  const c=state.score.c;
  const d=state.score.d;
  const e=state.score.ev;
  const f=state.score.f;
  let obj={};
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
      setG(g + 1);
    } else if (parseInt(e.target.value) === 2) {
      setG(g - 1);
    }
  };
  const calculateTotal = () => {
    if (que1 && que2 && que3 && que4 && que5) {
      setWrong(false);
      dispatch(setScoreG(g));
      select();
      navigate("/test1/test2/test3/test4/test5/test6/test7/result");
      console.log(a+ ' '+b+' '+c+' '+d+' '+e+' '+f+' '+g+" src"+state.result.res)
    } else {
      setWrong(true);
    }
  };
  useLayoutEffect(() => {
    dispatch(setTitle("اختبر رغباتي"));
    dispatch(setSymbol("../../assest/images/chooseDesire.svg"));
  }, [state.head]);
  const select=()=>{
    
    if((a>b)&&(a>c)&&(a>d)&&(a>f)&&(a>g)&&(a>e)){
        obj=colTit.filter(i=>i.id==='a')[0];
        dispatch(setSrc(obj.src))
        dispatch(setRes(obj.id))
        dispatch(setName(obj.name))
        dispatch(setData(collages.filter(i=>i.id==='a')))
    }
    else if((b>a)&&(b>c)&&(b>d)&&(b>f)&&(b>g)&&(b>e)){
      obj=colTit.filter(i=>i.id==='b')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      dispatch(setData(collages.filter(i=>i.id==='b')))
    }
    else if((c>a)&&(c>b)&&(c>d)&&(c>f)&&(c>g)&&(c>e)){
      obj=colTit.filter(i=>i.id==='c')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      dispatch(setData(collages.filter(i=>i.id==='c')))
    }
    else if((d>a)&&(d>b)&&(d>c)&&(d>f)&&(d>g)&&(d>e)){
      obj=colTit.filter(i=>i.id==='d')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      dispatch(setData(collages.filter(i=>i.id==='d')))
    }
    else if((e>a)&&(e>b)&&(e>c)&&(e>f)&&(e>g)&&(e>d)){
      obj=colTit.filter(i=>i.id==='e')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      dispatch(setData(collages.filter(i=>i.id==='e')))
    }
    else if((f>a)&&(f>b)&&(f>c)&&(f>e)&&(f>g)&&(f>d)){
      obj=colTit.filter(i=>i.id==='f')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      dispatch(setData(collages.filter(i=>i.id==='f')))
    }
    else if((g>a)&&(g>b)&&(g>c)&&(g>f)&&(g>e)&&(g>d)){
      obj=colTit.filter(i=>i.id==='g')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      dispatch(setData(collages.filter(i=>i.id==='g')))
    }
    else if((a===b&&a===c&&a===d)||(a===b&&a===c&&a===e)||(a===b&&a===c&&a===f)||(a===b&&a===c&&a===g)||(b===c&&b===d&&b===e)
    ||(b===c&&b===d&&b===f)||(b===c&&b===d&&b===g)||(c===d&&c===e&&c===f)||(c===d&&c===e&&c===g)||(d===e&&d===f&&d===g)||(e===f&&e===g)){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>(i.id==='a'||i.id==='b'||i.id==='c'||i.id==='d'||i.id==='e'||i.id==='f'||i.id==='g')&&i.pro===1)
      dispatch(setData(data))
    }
 
    else if(a===b&&a===c){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='b'||i.id==='c')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(a===b&&a===d){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='b'||i.id==='d')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(a===b&&a===e){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='b'||i.id==='e')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(a===b&&a===f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='b'||i.id==='f')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(a===b&&a===e){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='b'||i.id==='g')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(b===c&&b===d){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='d'||i.id==='b'||i.id==='c')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(b===c&&b===e){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='b'||i.id==='e')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(b===c&&b===f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='b'||i.id==='f')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(b===c&&b===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='b'||i.id==='g')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(c===d&&c===e){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='b'||i.id==='e')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(c===d&&c===f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='b'||i.id==='f')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(c===d&&c===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='b'||i.id==='g')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(d===e&&d===f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='d'||i.id==='e'||i.id==='f')&&(i.pro===1||i.pro===2||i.pro==3)))
      dispatch(setData(data))
    }
    else if(d===e&&d===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='d'||i.id==='e'||i.id==='g')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(e===f&&e===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='f'||i.id==='e'||i.id==='g')&&(i.pro===1||i.pro===2||i.pro===3)))
      dispatch(setData(data))
    }
    else if(a===b){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='b')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    } 
    else if(a===c){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='c')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(a===d){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='d')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(a===e){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='e')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(a===f){
      obj=colTit.filter(i=>i.id==='f')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='b')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(a===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='a'||i.id==='g')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(b===c){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='b')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(b===d){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='d'||i.id==='b')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(b===e){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='e'||i.id==='b')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(b===f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='f'||i.id==='b')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(b===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='g'||i.id==='b')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(c===d){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='d')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(c==e){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='e')&&(i.pro===1||i.pro==2||i.pro==3||i.pro==4)))
      dispatch(setData(data))
    }
    else if(c===f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='f')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(c===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='c'||i.id==='g')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(d===e){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='e'||i.id==='d')&&(i.pro===1||i.pro==2||i.pro==3||i.pro==4)))
      dispatch(setData(data))
    }
    else if(d==f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='f'||i.id==='d')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(d===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='g'||i.id==='d')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(e===f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='e'||i.id==='f')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(e===g){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='e'||i.id==='g')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else if(g===f){
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>((i.id==='g'||i.id==='f')&&(i.pro===1||i.pro===2||i.pro===3||i.pro===4)))
      dispatch(setData(data))
    }
    else{
      obj=colTit.filter(i=>i.id==='h')[0];
      dispatch(setSrc(obj.src))
      dispatch(setRes(obj.id))
      dispatch(setName(obj.name))
      const data=collages.filter(i=>(i.id==='a'||i.id==='b'||i.id==='c'||i.id==='d'||i.id==='e'||i.id==='f'||i.id==='g')&&i.pro===1)
      dispatch(setData(data))
    }
 
    
  }
  const handleBack = () => {
    navigate("/test1/test2/test3/test4/test5/test6");
  };
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
              <div className="questions">
                {questions
                  .filter((ques) => ques.q === "g")
                  .map((ques) => (
                    <div className="ques-str" key={ques.id}>
                      {ques.str}
                    </div>
                  ))}
              </div>
              <div className="chooses test7">
                {questions
                  .filter((ques) => ques.q === "g")
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
              النتيجة
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

export default Test7;
