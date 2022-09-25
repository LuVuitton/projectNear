const stackReducer =(state=1, action)=>{
        console.log('IN stackReducer');
    if (action.type === 'ADD_OFFER_TO_STACK') {
        //ниже синтаксис добавления обьекта в массив вмнесто state.push() - ...state, {new: obj}
        return [...state, {
            flag: action.flag,
            km: action.km,
            money: action.money,
            key: action.action,
            description: action.description
        }];   
    }
    return state
}

export default stackReducer