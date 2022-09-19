import offerS from "./Offer.module.css";
import data from "../../data/data.json";

// const langaugeData = [
//   { langauge: "Ukrainian", flag: "flag", key: 1 },
//   { langauge: "Chinese", flag: "flag", key: 2 },
//   { langauge: "English", flag: "flag", key: 3 },
//   { langauge: "Spanish", flag: "flag", key: 4 },
//   { langauge: "Arabic", flag: "flag", key: 5 },
//   { langauge: "French", flag: "flag", key: 6 },
//   { langauge: "German", flag: "flag", key: 7 },
//   { langauge: "Italian", flag: "flag", key: 8 },
//   { langauge: "Turkish", flag: "flag", key: 9 },
//   { langauge: "Korean", flag: "flag", key: 10 },
//   { langauge: "Hindi", flag: "flag", key: 11 },
//   { langauge: "Japanese", flag: "flag", key: 12 },
// ];

const langaugeMap = data.langaugeData.map((e) => (
  <option key={e.key}>
    {e.langauge} {e.flag}{" "}
  </option>
));

function Offer() {

  const submit = (event) => {
event.preventDefault(); // убирает перезагрузку страницы
console.log(event.target.elements);
};



  return (
    <form onSubmit={submit}>
      <div className={offerS.mainWrapper}>
        <select className={offerS.select}>{langaugeMap}</select>

        <input type="text" id='inputAbout' className={offerS.inputAbout}></input>
        <div className={offerS.option}>
          <input type="number" id="inputMoney" className={offerS.inputMoney}></input>
          <input id="inputLocation" className={offerS.inputLocation}></input>
        </div>

        <button type="submit" className={offerS.button}>
          ADD
        </button>
      </div>
    </form>
  );
}

export default Offer;
