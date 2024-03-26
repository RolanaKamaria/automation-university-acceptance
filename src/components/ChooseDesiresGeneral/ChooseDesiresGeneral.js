import React, { useLayoutEffect, useState } from "react";
import "./ChooseDesiresGeneral.css";
import MainNav from "../MainNav/MainNav";
import Footer from "../Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import marks from "../../assest/data/marks";
import { setSymbol, setTitle } from "../../store/slices/rootSlice";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Delete from "../../assest/images/delete.svg";
import {
  deleteFromChoices,
  getChoices,
  setChoices,
} from "../../store/slices/studentSlice";

const ChooseDesiresGeneral = () => {
  const state = useSelector((state) => state.root);
  const state1 = useSelector((state) => state.student);
  const loading = useSelector((state) => state.loadingCollages);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [desires, setDesires] = useState([]);
  const error = "يرجى ملئ المفاضلة حتى يتم الإرسال !!!";
  const [wrong, setWrong] = useState(false);
  const handleBack = () => {
    navigate("/start");
  };
  useLayoutEffect(() => {
    dispatch(setTitle("مفاضلتي"));
    dispatch(setSymbol("../../assest/images/StartIcon.svg"));
  }, [state.head]);

  const checkCollege = (id) => {
    var item = state1.stdSelection.majors.filter((c) => {
      return c.id === id;
    });
    let found = false;

    desires.forEach((element) => {
      if (item[0].id == element.id) found = true;
    });
    if (!found) {
      setDesires((prevState) => [...prevState, item[0]]);
    }
  };
  const deleteChoice = (id) => {
    var items = desires.filter((c) => {
      return c.id != id;
    });
    setDesires(items);
  };
  const sendData = () => {
    if (desires.length > 0) {
      dispatch(setChoices(desires));
      setWrong(false);
      navigate("/starts/choose-desires/info");
    } else {
      setWrong(true);
    }
  };

  function handleOnDragEnd(result) {
    if (!result.destination) return;
    const items = Array.from(desires);
    const [reorderItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderItem);

    setDesires(items);
  }

  return (
    <div className="main-login mainbg" dir="rtl">
      <Header />
      <div className="desire-nav">
        <MainNav />
        <div className="desires-general">
          <div className="desires">
            <div className="choose-collage">
              <div className="choose-collage-data-header">
                <div>الفرع</div>
                <div>المحافظة</div>
              </div>
              <div className="choose-collage-data-body">
                {loading ? (
                  <h1> Loading...</h1>
                ) : (
                  state1.stdSelection.majors.map((i) => (
                    <tr
                      id={i.id}
                      className="desire-row"
                      value={i.id}
                      onClick={() => checkCollege(i.id)}
                    >
                      <span className="mod-cell"> {i.name}</span>
                      <span className="mod-cell1">{i.governorate_name}</span>
                    </tr>
                  ))
                )}
              </div>
            </div>

            <div className="choosen-desires">
              <div className="choosen-header">الرغبات التي تم اختيارها</div>
              <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="droppable">
                  {(provided) => (
                    <div
                      className="choosen-colleges"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {desires.map((i, index) => (
                        //index
                        <Draggable
                          key={i.id}
                          draggableId={i.id.toString()}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              className="coll-item"
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              ref={provided.innerRef}
                            >
                              <div className="priority">{i.id}</div>
                              <div>
                                {i.name} - {i.governorate_name}
                              </div>
                              <img
                                src={Delete}
                                className="exit"
                                onClick={() => deleteChoice(i.id)}
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
          </div>
          {wrong && <p className="test-err">{error}</p>}
          <div className="buttons-box" id="choose-bt">
            <button className="btn" type="submit" onClick={sendData}>
              إرسال
            </button>
            <button className="btn back-btn" onClick={handleBack}>
              عودة
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChooseDesiresGeneral;
