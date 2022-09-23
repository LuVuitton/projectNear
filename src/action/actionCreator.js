const ADD_OFFER_TO_STACK = "ADD_OFFER_TO_STACK";

export const ACaddOfferToStack = (dataOffer) => ({
  type: ADD_OFFER_TO_STACK,
  flag: "dataOffer.inputFlag.value",
  km: 'near',
  money: dataOffer.inputMoney.value ,
  key: 0,
  description: dataOffer.inputAbout.value
});

