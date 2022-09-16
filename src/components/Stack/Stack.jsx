import StackItem from "./StackItem/StackItem";
import data from "../../data/data.json"

// const stackData = [
//   {
//     flag: "sp",
//     km: 5,
//     money: 10,
//     key: 1,
//     description: `Ivan attempts to bribe the police officer, but the officer refuses.`,
//   },
//   {
//     flag: "ukr",
//     km: 4,
//     money: 10,
//     key: 2,
//     description: `On 26 March, the barber Ivan Yakovlevich finds out that his wife has made bread. He tries to get rid of the nose by throwing it into the Neva River, but he is caught by a police officer. Ivan attempts to bribe the police officer, but the officer refuses.`,
//   },
//   {
//     flag: "eng",
//     km: 5,
//     money: 10,
//     key: 3,
//     description: `With horror, he recognizes this nose as that of one of his regular customers, Collegiate Assessor Kovalyov (known as "Major Kovalyov").`,
//   },
//   {
//     flag: "pol",
//     km: 6,
//     money: 10,
//     key: 4,
//     description: `Ivan's wife demands that Ivan remove the nose from her home, so he wraps it up in cloth and attempts to throw it off a bridge. He tries to get rid of the nose by throwing it into the Neva River, but he is caught by a police officer.`,
//   },
//   {
//     flag: "it",
//     km: 9,
//     money: 10,
//     key: 5,
//     description: `He tries to get rid of the nose by throwing it into the Neva River, but he is caught by a police officer. Ivan attempts to bribe the police officer, but the officer refuses.`,
//   },
//   {
//     flag: "fra",
//     km: 7,
//     money: 10,
//     key: 6,
//     description: `On 26 March, the barber Ivan Yakovlevich finds out that his wife has made bread. During breakfast, he cuts a loaf in half and finds a nose in his bread. With horror, he recognizes this nose as that of one of his regular customers, Collegiate Assessor Kovalyov (known as "Major Kovalyov"). Ivan's wife demands that Ivan remove the nose from her home, so he wraps it up in cloth and attempts to throw it off a bridge. He tries to get rid of the nose by throwing it into the Neva River, but he is caught by a police officer. Ivan attempts to bribe the police officer, but the officer refuses`,
//   },
// ];

const stackMenu = data.stackData.map((e) => (
  <StackItem
    flag={e.flag}
    km={e.km}
    money={e.money}
    key={e.key}
    description={e.description}
  />
));

function Stack() {
  return <>{stackMenu}</>;
}

export default Stack;
