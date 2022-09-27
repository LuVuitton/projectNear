import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ACaddOfferToStack } from "../../action/actionCreator";
import offerS from "./Offer.module.css";

const langaugeData = [
  { langauge: "English", flag: "flags/usa.png", key: 9 },
  { langauge: "Ukrainian", flag: "flags/ukraine.png", key: 8 },
  { langauge: "Italian", flag: "flags/italy.png", key: 5 },
  { langauge: "Albanian", flag: "flags/albania.png", key: 1 },
  { langauge: "Azerbaijani", flag: "flags/azerbaijan.png", key: 2 },
  { langauge: "French", flag: "flags/france.png", key: 3 },
  { langauge: "German", flag: "flags/germany.png", key: 4 },
  { langauge: "Spanish", flag: "flags/spain.png", key: 6 },
  { langauge: "Turkish", flag: "flags/turkey.png", key: 7 },
];
const classesForMainWr = [offerS.mainWrapper, offerS.mainWrapperBlur].join(" ");


function Offer() {

  const dispatch = useDispatch();
  const refInputs = useRef();
  const [langauge, setLangauge] = useState({nameLangauge: " SLECT LANGAUGE v ",});
  const [chooseList, setChooseList] = useState(false);
  const [imgInTittle, setImgInTittle] = useState(false);
  const [formDone, setformDone] = useState(false);

  const turnOfFormDone =()=> {
    setTimeout(() => {
      setformDone(false)
    }, 2000);
  }
  const resetAfterAdd = () => {
    refInputs.current.inputAbout.value = "";
    refInputs.current.inputLocation.value = ""; 
    refInputs.current.inputMoney.value = "";
    setLangauge({ flag: "", nameLangauge: " SLECT LANGAUGE v " });
    setImgInTittle(false);
    setformDone(true);
    turnOfFormDone()
  };
  const submit = (event) => {
    event.preventDefault(); // убирает перезагрузку страницы
    const dataOffer = event.target.elements; // получаем обьект с данными из формы, (внури получаем вэлью по "id".value)
    dispatch(ACaddOfferToStack({ ...dataOffer, flag: langauge.flag }));
    resetAfterAdd();
  };

  const langaugeMap = langaugeData.map((e) => (
    <li
      onClick={() => {
        setLangauge({ flag: e.flag, nameLangauge: e.langauge }); //возвращаем обьект по сетСтейту, из него достаем имя языка(для заголовка) и флаг(для отправки в стек)
        setChooseList((prev) => !prev); //скрываем меню языков
        setImgInTittle(true); //подставляем img в заголовок
      }}
      className={offerS.optionItem}
      key={e.key}
    >
      <img src={e.flag} alt="icon" />
      <p>{e.langauge}</p>
    </li>
  ));

  return (
    <>
      <form ref={refInputs} onSubmit={submit}>
        <div
          onClick={() => {
            setChooseList((prev) => !prev);
          }}
        >
          <p className={offerS.langaugeTittle}>
            {imgInTittle && <img src={langauge.flag} />} {langauge.nameLangauge}
          </p>
        </div>
        {chooseList && <ul className={offerS.list}>{langaugeMap}</ul>}

        <div className={chooseList ? classesForMainWr : offerS.mainWrapper}>
          <textarea
            id="inputAbout"
            type="text"
            className={offerS.inputAbout}
            placeholder="write here"
          />
          <div className={offerS.option}>
            <input
              id="inputMoney"
              type="number"
              className={offerS.inputMoney}
              placeholder="0,00"
            />
            <input
              id="inputLocation"
              className={offerS.inputLocation}
              placeholder="w u?"
            />
          </div>

          <button type="submit" className={offerS.button}>
            ADD
          </button>
        </div>
      </form>
      {formDone && (
        <div className={offerS.formDone}>
          <img src="icons\done.png" alt="done" />
        </div>
      )}
    </>
  );
}

export default Offer;
