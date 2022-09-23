import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

function Offer() {
  const dispatch = useDispatch();
  // const state = useSelector(state => state)

  const submit = (event) => {
    event.preventDefault(); // убирает перезагрузку страницы
    const dataOffer = event.target.elements; // получаем обьект с данными из формы, (внури получаем вэлью по "id".value)
    dispatch(ACaddOfferToStack(dataOffer));
  };
  const refToLangaugeItem = React.createRef();
  const toChooseLanguage = () =>{
  }

 
const [langauge, setLangauge] = useState('Select langauge')

  const langaugeMap = langaugeData.map((e) => (
    <li onClick={toChooseLanguage}  className={offerS.optionItem} key={e.key}>
      <img ref={refToLangaugeItem} src={e.flag}/>
      <p>{e.langauge}</p>
    </li>
  ));
  



  return (
    <>
      <form onSubmit={submit}>
        <div>
          <p>{langauge}</p>
        </div>
        <div className={offerS.mainWrapper}>
          <ul id="inputFlag" className={offerS.list}>
            {langaugeMap}
          </ul>

          <input id="inputAbout"
            type="text"
            className={offerS.inputAbout}
          ></input>
          <div className={offerS.option}>
            <input id="inputMoney"
              type="number"
              className={offerS.inputMoney}
            ></input>
            <input id="inputLocation" 
            className={offerS.inputLocation}>

            </input>
          </div>

          <button type="submit" className={offerS.button}>
            ADD
          </button>
        </div>
      </form>
    </>
  );
}

export default Offer;
