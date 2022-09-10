import StackItem from "./StackItem/StackItem";

const stackData = [
  { flag: "sp", km: 5, money: 10, key: 1 },
  { flag: "ukr", km: 4, money: 10, key: 2 },
  { flag: "eng", km: 5, money: 10, key: 3 },
  { flag: "pol", km: 6, money: 10, key: 4 },
  { flag: "it", km: 9, money: 10, key: 5 },
  { flag: "fra", km: 7, money: 10, key: 6 },
];

const stackMenu = stackData.map((e) => (
    <StackItem flag={e.flag} km={e.km} money={e.money} key={e.key} />
));

function Stack() {


  return (
    <div>
      {stackMenu}
    </div>
  );
}

export default Stack;
