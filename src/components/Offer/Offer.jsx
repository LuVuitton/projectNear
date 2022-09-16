import offerS from "./Offer.module.css";
import data from "../../data/data.json"


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
  return (
    <div className={offerS.mainWrapper}>
      <select className={offerS.select}>{langaugeMap}</select>
     
      <textarea className={offerS.inputAbout}></textarea>
      <div className={offerS.option}>
        <textarea className={offerS.inputMoney}></textarea>
        <textarea className={offerS.inputLocation}></textarea>
      </div>

      <button className={offerS.button}>ADD</button>
    </div>
  );
}

export default Offer;
